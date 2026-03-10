type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

type ConstituencySearchResponse = {
  items?: Array<{
    value?: {
      name?: string;
      currentRepresentation?: {
        member?: {
          value?: {
            id?: number;
            nameDisplayAs?: string;
            latestParty?: {
              name?: string;
            };
            latestHouseMembership?: {
              membershipFrom?: string;
            };
            thumbnailUrl?: string;
          };
        };
      };
    };
  }>;
};

type PostcodeLookupResponse = {
  result?: {
    parliamentary_constituency?: string;
  };
};

function json(data: JsonValue, init: ResponseInit = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600",
      ...init.headers,
    },
  });
}

function normalisePostcode(postcode: string) {
  return postcode.trim().toUpperCase().replace(/\s+/g, "");
}

function formatPostcode(cleanedPostcode: string) {
  if (cleanedPostcode.length <= 3) {
    return cleanedPostcode;
  }

  return `${cleanedPostcode.slice(0, -3)} ${cleanedPostcode.slice(-3)}`;
}

function getParliamentUrl(memberId: number, suffix = "") {
  return `https://members.parliament.uk/member/${memberId}${suffix}`;
}

async function fetchJson<T>(url: string) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Lookup request failed with status ${response.status}.`);
  }

  return response.json() as Promise<T>;
}

export const onRequestGet = async ({ request }: { request: Request }) => {
  const { searchParams } = new URL(request.url);
  const postcode = searchParams.get("postcode");

  if (!postcode) {
    return json(
      {
        success: false,
        error: "Add a postcode query parameter, for example ?postcode=SW1A0AA.",
      },
      { status: 400 },
    );
  }

  try {
    const cleanedPostcode = normalisePostcode(postcode);
    const formattedPostcode = formatPostcode(cleanedPostcode);

    const postcodeData = await fetchJson<PostcodeLookupResponse>(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(cleanedPostcode)}`,
    );

    const constituencyName = postcodeData.result?.parliamentary_constituency;

    if (!constituencyName) {
      return json(
        {
          success: false,
          error: `No parliamentary constituency was found for ${formattedPostcode}.`,
        },
        { status: 404 },
      );
    }

    const searchData = await fetchJson<ConstituencySearchResponse>(
      `https://members-api.parliament.uk/api/Location/Constituency/Search?searchText=${encodeURIComponent(
        constituencyName,
      )}&skip=0&take=5`,
    );

    const match =
      searchData.items?.find(
        (item) =>
          item.value?.name?.trim().toLowerCase() === constituencyName.trim().toLowerCase(),
      ) ?? searchData.items?.[0];

    const member = match?.value?.currentRepresentation?.member?.value;
    const memberId = member?.id;
    const finalConstituency =
      member?.latestHouseMembership?.membershipFrom ?? match?.value?.name ?? constituencyName;

    if (!member || !memberId) {
      return json(
        {
          success: false,
          error: `No current MP could be matched to ${finalConstituency}.`,
        },
        { status: 404 },
      );
    }

    return json({
      success: true,
      postcode: formattedPostcode,
      constituency: finalConstituency,
      mp: {
        name: member.nameDisplayAs ?? "Current MP",
        party: member.latestParty?.name ?? null,
        constituency: finalConstituency,
        memberId,
        profileUrl: getParliamentUrl(memberId),
        contactUrl: getParliamentUrl(memberId, "/contact"),
        thumbnailUrl: member.thumbnailUrl ?? null,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "The MP lookup could not be completed at this time.";

    return json(
      {
        success: false,
        error: message,
      },
      { status: 502 },
    );
  }
};
