export type CampaignAction = {
  title: string;
  summary: string;
  label: string;
  href: string;
  icon: string;
  emphasis?: "soft" | "strong";
};

export const homepageActions = [
  {
    title: "Write to your MP in minutes",
    summary:
      "Use the built-in postcode lookup to find the right constituency and copy a ready-to-adapt message.",
    label: "Contact your MP",
    href: "/contact-your-mp",
    icon: "mail",
    emphasis: "strong",
  },
  {
    title: "Bring the campaign into your community",
    summary:
      "Use the starter's reusable blocks for resident briefings, local events, or volunteer explainers.",
    label: "See ways to get involved",
    href: "/get-involved",
    icon: "users",
    emphasis: "soft",
  },
  {
    title: "Share the argument clearly",
    summary:
      "Turn the issue framing, stats, and blog layout into a client-ready campaign narrative with minimal rewiring.",
    label: "Read the campaign case",
    href: "/about",
    icon: "file-text",
    emphasis: "soft",
  },
] as const satisfies CampaignAction[];

export const mpContactTemplates = {
  global: {
    subject: "Constituent request: please respond on fair household bills",
    body: `Dear [MP name],

I am writing as a constituent to ask for your support on fairer billing for essential household services.

Many people in our area are facing charges they cannot easily understand, limited debt support, and weak routes to challenge poor practice. I would like you to:

1. Support stronger rules on transparent pricing.
2. Push for better protection for households already in difficulty.
3. Ask ministers and regulators for a clear plan to reduce unfair charges.

Please let me know what action you will take.

Kind regards,
[Your name]
[Your postcode]`,
  },
  campaign: {
    subject: "Fair Bills UK: please back fair, transparent household billing",
    body: `Dear [MP name],

I am one of your constituents and I support Fair Bills UK, a fictional placeholder campaign used in this starter.

The campaign argues for simpler pricing, stronger consumer safeguards, and better support for households facing problem debt. Even in this demo format, the issue is realistic: people need clearer bills, faster challenge routes, and fairer treatment when costs rise.

Please back reforms that would:

1. Limit opaque or punitive charges on essential household services.
2. Require clearer communication when bills or tariffs change.
3. Strengthen support for customers in financial difficulty.

I would welcome a short response setting out your position.

Kind regards,
[Your name]
[Your postcode]`,
  },
} as const;
