export const campaignContent = {
  hero: {
    eyebrow: "Fictional UK campaign demo",
    title: "Household bills should make sense.",
    summary:
      "Fair Bills UK is a fictional advocacy campaign used to demonstrate this starter. It shows how a modern UK campaign site can frame an issue, mobilise supporters, publish updates, and help people contact their MP without hardcoding client-specific content.",
    supportingPoints: ["Transparent pricing", "Fairer debt support", "Stronger accountability"],
    primaryStat: {
      value: "4.2m",
      label: "Example households estimated to be under severe bill pressure",
    },
    secondaryStat: {
      value: "67%",
      label: "Example respondents who say charges are harder to understand than a year ago",
    },
  },
  issueCards: [
    {
      icon: "scale",
      title: "Essential charges are too hard to follow",
      summary:
        "Bills often combine standing charges, service fees, debt recovery, and tariff changes in ways that make comparison difficult for ordinary households.",
    },
    {
      icon: "building-bank",
      title: "People in difficulty face the steepest pathways",
      summary:
        "Households already juggling debt or unstable income can end up facing the least flexible payment options and the weakest support.",
    },
    {
      icon: "gavel",
      title: "Complaint routes still feel stacked against users",
      summary:
        "When things go wrong, people often face fragmented support, confusing evidence requests, and slow escalation between provider, regulator, and ombuds services.",
    },
  ],
  stats: [
    {
      value: "£241",
      label: "Example annual extra cost linked to opaque charges in our fictional campaign model",
    },
    {
      value: "1 in 5",
      label: "Example households who delayed another essential purchase to cover bills",
    },
    {
      value: "9 weeks",
      label: "Example average time supporters said it took to get a clear answer",
    },
  ],
  whyThisMatters: {
    title: "Why this matters beyond a single bill",
    intro:
      "Campaigns like this usually need to show wider public-interest stakes. The starter assumes you will want space for consumer fairness, social impact, and democratic accountability in one coherent narrative.",
    bullets: [
      "When essential services become harder to understand, households cannot make informed choices.",
      "Confusing charges hit hardest when budgets are already tight, especially for disabled people, carers, and renters.",
      "Good campaign sites should move smoothly from issue framing to proof points, supporter action, and deeper policy material.",
      "This starter keeps those layers separate so teams can rewrite campaign content without rebuilding the site structure.",
    ],
  },
  mpLookup: {
    title: "Help supporters take the next step",
    summary:
      "The built-in MP lookup uses a Cloudflare Pages Function to find the current MP for a postcode and offer a configurable contact workflow.",
  },
  featuredQuote: {
    title: "Supporter voice",
    intro:
      "Use short, credible quotes to ground the campaign in lived experience without overwhelming the page.",
  },
  latestPosts: {
    title: "Latest updates",
    summary:
      "The markdown blog is ready from day one, so teams can add briefings, campaign updates, and explainers without touching reusable components.",
  },
  faqTeaser: {
    title: "Questions supporters usually ask",
    summary:
      "FAQ entries live in their own content collection, making it easy to graduate from a homepage teaser to a dedicated FAQ page later.",
  },
  ctaBand: {
    eyebrow: "Reusable final call to action",
    title: "Help supporters contact their MP with less friction.",
    summary:
      "Keep the homepage focused, then send people to a dedicated MP contact flow with postcode lookup, Parliament links where available, and copy-ready messaging.",
    primaryLabel: "Go to the MP contact tool",
    primaryHref: "/contact-your-mp",
  },
};
