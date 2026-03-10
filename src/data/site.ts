export type PageKey =
  | "about"
  | "get-involved"
  | "contact-your-mp"
  | "privacy"
  | "faq"
  | "resources"
  | "supporters"
  | "press"
  | "contact";

export type HomeSectionKey =
  | "hero"
  | "issueCards"
  | "stats"
  | "whyThisMatters"
  | "actionCards"
  | "mpLookupTeaser"
  | "quote"
  | "latestPosts"
  | "faqTeaser"
  | "ctaBand";

export type BlogVisibility = {
  showInNavigation: boolean;
  showOnHomepage: boolean;
};

export type NavRequirement = PageKey | "blog";

export type EmailMode = "none" | "mailto" | "copy" | "both";
export type CopyTemplateSource = "global" | "campaign";
export type CtaStyle = "soft" | "strong";

type NavigationItem = {
  label: string;
  href: string;
  requires?: NavRequirement;
  featured?: boolean;
};

type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  demoNotice: "EXAMPLE_DEMO CONTENT",
  campaignName: "Fair Bills UK",
  tagline: "Transparent essential bills. Stronger consumer protection. Warmer homes.",
  shortSummary:
    "A fictional UK public-interest campaign used as demo content for this reusable starter. Replace all copy, contact details, and legal information before publishing.",
  siteUrl: "https://uk-campaign-site-starter.pages.dev",
  locale: "en-GB",
  seo: {
    defaultTitle: "Fair Bills UK",
    defaultDescription:
      "A polished Astro starter for UK advocacy sites, shown with fictional demo content about fair household bills and stronger consumer protection.",
    ogImage: "/placeholders/og-default.svg",
    twitterCard: "summary_large_image",
  },
  navigation: [
    { label: "About", href: "/about", requires: "about" },
    { label: "Get Involved", href: "/get-involved", requires: "get-involved" },
    { label: "Blog", href: "/blog", requires: "blog" },
    {
      label: "Contact Your MP",
      href: "/contact-your-mp",
      requires: "contact-your-mp",
      featured: true,
    },
  ] satisfies NavigationItem[],
  ctas: {
    primary: {
      label: "Contact your MP",
      href: "/contact-your-mp",
    },
    secondary: {
      label: "Read the campaign case",
      href: "/about",
    },
    tertiary: {
      label: "Get involved",
      href: "/get-involved",
    },
  },
  socials: [
    { label: "Bluesky", href: "https://bsky.app/profile/fairbillsuk-demo.bsky.social" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/fair-bills-uk-demo/" },
    { label: "Instagram", href: "https://www.instagram.com/fairbillsukdemo/" },
  ] satisfies SocialLink[],
  contact: {
    email: "hello@example.org",
    pressEmail: "press@example.org",
    phone: "020 0000 0000",
    addressLines: ["27 Calder Wharf", "Manchester", "M4 1AA", "United Kingdom"],
  },
  legal: {
    organisationName: "Fair Bills UK Campaign",
    legalEntity: "Fictional campaigning organisation",
    companyNumber: "00000000",
    privacyLead: "Campaign Director",
  },
  visibility: {
    blog: {
      showInNavigation: true,
      showOnHomepage: true,
    } satisfies BlogVisibility,
    pages: {
      about: true,
      "get-involved": true,
      "contact-your-mp": true,
      privacy: true,
      faq: false,
      resources: false,
      supporters: false,
      press: false,
      contact: false,
    } satisfies Record<PageKey, boolean>,
    homeSections: {
      hero: true,
      issueCards: true,
      stats: true,
      whyThisMatters: true,
      actionCards: true,
      mpLookupTeaser: true,
      quote: true,
      latestPosts: true,
      faqTeaser: true,
      ctaBand: true,
    } satisfies Record<HomeSectionKey, boolean>,
  },
  mpLookup: {
    enabled: true,
    showOnHomepage: true,
    pageEnabled: true,
    showParty: true,
    showProfileLink: true,
    emailMode: "both" as EmailMode,
    copyTemplateSource: "campaign" as CopyTemplateSource,
    ctaStyle: "strong" as CtaStyle,
    defaultRecipient: "",
    helperNote:
      "Parliament profile links usually include constituency office contact details. The draft email here opens without a recipient so teams can choose their preferred contact route.",
  },
  analytics: {
    cloudflareWebAnalytics: {
      enabled: false,
      mode: "auto" as "auto" | "manual",
      manualBeaconToken: "",
    },
  },
};

export type SiteConfig = typeof siteConfig;
