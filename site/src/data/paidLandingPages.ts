export type PaidLandingPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  lead: string;
  formHeading: string;
  formSubheading: string;
  buttonLabel: string;
  defaultSituation: string;
  proofPoints: string[];
  situationHeading: string;
  situationBody: string;
  situationBullets: string[];
  comparisonHeading: string;
  comparisonIntro: string;
  comparisonItems: Array<{
    title: string;
    body: string;
  }>;
  storySlug: string;
  relatedGuide: {
    label: string;
    href: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const paidLandingPages: PaidLandingPage[] = [
  {
    slug: "sell-my-house-fast-kansas-city",
    title: "Sell My House Fast Kansas City | ACE Properties KC",
    description:
      "Need to sell fast in Kansas City? Compare cash, as-is, and flexible sale options with ACE Properties KC.",
    eyebrow: "Sell my house fast Kansas City",
    headline: "Sell My House Fast in Kansas City",
    lead:
      "When timing matters, start with the address. ACE Properties KC can review the property, repairs, title questions, and your deadline so you can see a practical path without repairs, showings, or a long listing process.",
    formHeading: "Start a fast-sale review",
    formSubheading: "Share the address and one way to reach you. We will review what can realistically happen quickly.",
    buttonLabel: "See fast-sale options",
    defaultSituation: "sell fast",
    proofPoints: [
      "Address-first form with phone or email",
      "As-is cash review with no clean-out required",
      "Flexible close dates when title is ready",
      "Cash and creative options if timing or payoff is tight",
    ],
    situationHeading: "Fast does not have to mean rushed",
    situationBody:
      "A real fast-sale plan still needs title, payoff, ownership, occupancy, and repair questions handled correctly. ACE focuses on removing the slow parts while keeping the numbers clear.",
    situationBullets: [
      "Inherited or vacant houses that are costing money each month",
      "Repair-heavy homes where contractor work would delay the sale",
      "Moves, job changes, family deadlines, or carrying costs",
      "Sellers who want certainty before committing to a listing",
    ],
    comparisonHeading: "Compare the fast paths",
    comparisonIntro:
      "The best fast-sale path depends on condition, payoff, title, and how much certainty you need.",
    comparisonItems: [
      {
        title: "Direct cash sale",
        body: "Best when you want a simple as-is closing with fewer inspections, repairs, and buyer-financing delays.",
      },
      {
        title: "List only if it fits",
        body: "A retail listing may net more if the home is easy to show, updated, and you have time for buyer contingencies.",
      },
      {
        title: "Creative option review",
        body: "If payoff, timing, or payment pressure makes cash difficult, ACE can compare flexible structures before you decide.",
      },
    ],
    storySlug: "inherited-original-condition-house",
    relatedGuide: {
      label: "Read the fast sale guide",
      href: "/resources/sell-house-fast-kansas-city-guide/",
    },
    faqs: [
      {
        question: "How fast can ACE buy a house in Kansas City?",
        answer:
          "A clean cash closing can often move in about two weeks after title is ready. Title, liens, estate paperwork, tenants, or payoff issues can add time, but those are reviewed early.",
      },
      {
        question: "Do I need repairs before asking for a fast offer?",
        answer:
          "No. ACE reviews houses as-is, including repairs, clean-out, contents, dated finishes, and yard work.",
      },
      {
        question: "Does the form obligate me to sell?",
        answer:
          "No. The form starts a conversation and option review. You can compare the numbers before making any decision.",
      },
    ],
  },
  {
    slug: "we-buy-houses-kansas-city",
    title: "We Buy Houses Kansas City | ACE Properties KC",
    description:
      "ACE Properties KC buys houses as-is across the Kansas City metro with cash and flexible sale options.",
    eyebrow: "We buy houses Kansas City",
    headline: "We Buy Houses in Kansas City",
    lead:
      "ACE Properties KC buys houses across the Kansas City metro when sellers need a direct as-is path. Start with the address and one way to reach you, then we can review cash, timing, repairs, and flexible options.",
    formHeading: "See if ACE can buy your house",
    formSubheading: "Send the address and best contact. We will review the property and your timeline.",
    buttonLabel: "Start my review",
    defaultSituation: "as-is cash",
    proofPoints: [
      "Local Kansas City buyer",
      "No repairs, clean-out, or public showings required",
      "Direct call or text available",
      "Clear option review before commitment",
    ],
    situationHeading: "A direct buyer for complicated houses",
    situationBody:
      "Sellers usually reach out when the house, title, repairs, tenants, inheritance, or payment pressure makes a traditional sale feel too slow or uncertain.",
    situationBullets: [
      "Older homes with original finishes or deferred repairs",
      "Inherited houses with multiple family decision-makers",
      "Vacant or occupied rentals that need a simpler exit",
      "Houses with liens, taxes, mortgage pressure, or timing issues",
    ],
    comparisonHeading: "What makes a direct buyer different",
    comparisonIntro:
      "A direct sale should be judged on certainty, net proceeds, timeline, and how much work the seller avoids.",
    comparisonItems: [
      {
        title: "No listing prep",
        body: "You do not need to clean out, stage, repair, photograph, or host showings before starting.",
      },
      {
        title: "Offer terms matter",
        body: "Compare closing date, inspection expectations, seller costs, clean-out responsibility, and whether the buyer can close.",
      },
      {
        title: "Options beyond cash",
        body: "ACE can also review creative paths when payoff, mortgage pressure, or timing makes a simple cash offer harder.",
      },
    ],
    storySlug: "inherited-original-condition-house",
    relatedGuide: {
      label: "Compare cash buyer vs agent",
      href: "/resources/cash-buyer-vs-real-estate-agent-kansas-city/",
    },
    faqs: [
      {
        question: "Does ACE buy houses as-is?",
        answer:
          "Yes. Repairs, contents, dated finishes, clean-out, yard work, and title questions can all be part of the as-is review.",
      },
      {
        question: "What areas does ACE buy in?",
        answer:
          "ACE works across the Kansas City metro, including Kansas City, MO, Kansas City, KS, Johnson County, Jackson County, and nearby communities.",
      },
      {
        question: "Should I list with an agent instead?",
        answer:
          "Sometimes yes. If the house is updated, easy to show, and you have time, listing may make sense. ACE is strongest when certainty, speed, repairs, or privacy matter more.",
      },
    ],
  },
  {
    slug: "cash-home-buyers-kansas-city",
    title: "Cash Home Buyers Kansas City | ACE Properties KC",
    description:
      "Compare a Kansas City cash home buyer offer with as-is, payoff, and flexible sale options from ACE.",
    eyebrow: "Cash home buyers Kansas City",
    headline: "Cash Home Buyers in Kansas City",
    lead:
      "A cash buyer can make sense when you want fewer delays, fewer contingencies, and an as-is closing. ACE Properties KC can review the property and explain how a cash offer compares with other options.",
    formHeading: "Request a cash offer review",
    formSubheading: "Start with the address and one way to reach you. We will review the basics first.",
    buttonLabel: "Request cash review",
    defaultSituation: "as-is cash",
    proofPoints: [
      "No agent commission on a direct ACE purchase",
      "No repairs or clean-out needed to ask",
      "Title and payoff items reviewed early",
      "Written numbers before you choose",
    ],
    situationHeading: "Cash is about certainty, not just speed",
    situationBody:
      "The best cash buyer conversation compares the offer, closing date, seller costs, clean-out responsibility, and whether the buyer can actually close.",
    situationBullets: [
      "You want to avoid buyer financing or appraisal delays",
      "The house needs repairs that would slow down a listing",
      "You are coordinating family, inheritance, probate, or tenants",
      "You want a clear net number before deciding",
    ],
    comparisonHeading: "Cash offer vs other paths",
    comparisonIntro:
      "A cash offer should be compared against listing net, repair cost, holding cost, and timeline risk.",
    comparisonItems: [
      {
        title: "Cash offer",
        body: "Useful for speed, certainty, privacy, and avoiding repairs or public showings.",
      },
      {
        title: "Agent listing",
        body: "May be better for updated houses where seller has time and wants maximum retail exposure.",
      },
      {
        title: "Payment structure",
        body: "May be reviewed when payoff, loan terms, or payment pressure make a straight cash sale less useful.",
      },
    ],
    storySlug: "inherited-original-condition-house",
    relatedGuide: {
      label: "How cash buyers determine offers",
      href: "/resources/how-cash-home-buyers-determine-offer-kansas-city/",
    },
    faqs: [
      {
        question: "Will a cash buyer pay full retail value?",
        answer:
          "Usually no. Cash buyers price repairs, holding costs, risk, resale timeline, and closing certainty into the offer. The tradeoff is speed and less seller work.",
      },
      {
        question: "Do cash buyers still use a title company?",
        answer:
          "A legitimate sale should close through a title company or closing professional so ownership, liens, payoffs, and proceeds are handled correctly.",
      },
      {
        question: "Can I compare cash and creative options?",
        answer:
          "Yes. ACE can compare a cash offer with payoff-at-closing or payment-takeover questions when the situation calls for it.",
      },
    ],
  },
  {
    slug: "sell-house-as-is-kansas-city",
    title: "Sell House As-Is Kansas City | ACE Properties KC",
    description:
      "Sell a Kansas City house as-is with no repairs, clean-out, public showings, or agent listing required.",
    eyebrow: "Sell house as-is Kansas City",
    headline: "Sell Your House As-Is in Kansas City",
    lead:
      "You do not need to repair, clean out, or update the house before starting. ACE Properties KC can review the property in its current condition and explain what an as-is sale could look like.",
    formHeading: "Start an as-is offer review",
    formSubheading: "Share the address and one way to reach you. Tell us what you know about the condition later.",
    buttonLabel: "Get as-is options",
    defaultSituation: "repairs",
    proofPoints: [
      "Leave repairs, clean-out, and dated finishes for us to review",
      "No public listing or open houses required",
      "Useful for inherited, vacant, rental, and repair-heavy houses",
      "Cash and flexible terms compared when needed",
    ],
    situationHeading: "As-is means the current condition is part of the plan",
    situationBody:
      "The offer math can include repairs, contents, trees, code items, old systems, and title questions instead of asking you to fix everything first.",
    situationBullets: [
      "Roof, foundation, HVAC, plumbing, or electrical concerns",
      "Furniture, belongings, debris, or estate clean-out",
      "Original finishes, outdated kitchens, or dated bathrooms",
      "Vacant houses, rentals, or homes that are hard to show",
    ],
    comparisonHeading: "As-is sale vs repair-first listing",
    comparisonIntro:
      "The right answer depends on repair cost, time, risk, seller energy, and expected net.",
    comparisonItems: [
      {
        title: "Sell as-is",
        body: "Avoid contractor management, clean-out, showings, and buyer repair negotiations.",
      },
      {
        title: "Repair then list",
        body: "May make sense when repair costs are manageable and retail upside is worth the delay.",
      },
      {
        title: "List as-is",
        body: "Can work with the right agent and buyer pool, but may still involve showings and inspection renegotiation.",
      },
    ],
    storySlug: "inherited-original-condition-house",
    relatedGuide: {
      label: "Read the as-is guide",
      href: "/resources/sell-house-as-is-kansas-city/",
    },
    faqs: [
      {
        question: "Can I sell as-is with belongings still inside?",
        answer:
          "Yes. Contents, furniture, tools, debris, and clean-out can be discussed as part of the offer.",
      },
      {
        question: "Do I have to disclose known problems?",
        answer:
          "As-is does not mean hiding known issues. You should answer disclosure questions honestly and ask qualified legal help if unsure.",
      },
      {
        question: "Can ACE buy houses with major repairs?",
        answer:
          "Yes. Major repairs can be part of the review, including roof, foundation, mechanical systems, water damage, or long-deferred maintenance.",
      },
    ],
  },
  {
    slug: "behind-on-mortgage-kansas-city",
    title: "Behind on Mortgage Kansas City | ACE Properties KC",
    description:
      "Behind on mortgage payments in Kansas City? Compare cash sale, payoff, backup, and payment-takeover options.",
    eyebrow: "Behind on mortgage Kansas City",
    headline: "Behind on Mortgage Payments in Kansas City?",
    lead:
      "Mortgage pressure gets heavier when deadlines are unclear. ACE Properties KC can review a cash sale, payoff-at-closing, backup offer, or payment-takeover questions so you understand what may be realistic.",
    formHeading: "Review mortgage-pressure options",
    formSubheading: "Send the address, best contact, and any deadline you know. Estimates are okay.",
    buttonLabel: "Review my options",
    defaultSituation: "behind",
    proofPoints: [
      "Private review before the next deadline",
      "Cash, payoff, and payment-takeover paths compared",
      "Title, arrears, taxes, and insurance questions reviewed",
      "Written summary for co-borrowers or advisors",
    ],
    situationHeading: "Know the options before fees and deadlines grow",
    situationBody:
      "When payments are late, the right next step depends on lender status, arrears, title, equity, repairs, and whether you want to keep or sell the house.",
    situationBullets: [
      "One or more missed mortgage payments",
      "Foreclosure notices or lender deadlines",
      "A refinance or modification that may not close in time",
      "A house that needs repairs while payments keep coming due",
    ],
    comparisonHeading: "Mortgage-pressure paths",
    comparisonIntro:
      "You should compare lender help, cash sale, payoff-at-closing, payment takeover, and backup plans before choosing.",
    comparisonItems: [
      {
        title: "Lender workout",
        body: "May fit when you want to keep the house and can qualify for repayment, forbearance, or modification.",
      },
      {
        title: "Cash sale",
        body: "May fit when equity and title allow a clean payoff at closing.",
      },
      {
        title: "Payment takeover review",
        body: "May fit only in careful situations where the existing loan staying in place is worth comparing.",
      },
    ],
    storySlug: "out-of-state-creative-solution",
    relatedGuide: {
      label: "Read mortgage options guide",
      href: "/resources/behind-on-mortgage-options-kansas-city/",
    },
    faqs: [
      {
        question: "Can ACE help if I am already behind?",
        answer:
          "ACE can review sale options, payoff-at-closing, backup plans, or payment-takeover questions. You should also stay in contact with your lender or housing counselor.",
      },
      {
        question: "Can selling stop foreclosure?",
        answer:
          "A sale may help if it closes before the required deadline and title can be cleared. Timing, lender status, and legal process matter.",
      },
      {
        question: "Will payment takeover fix my credit?",
        answer:
          "No structure erases past late payments. A carefully reviewed payment plan may help avoid more missed payments, but credit questions need qualified advice.",
      },
    ],
  },
  {
    slug: "sell-inherited-house-kansas-city",
    title: "Sell Inherited House Kansas City | ACE Properties KC",
    description:
      "Sell an inherited Kansas City house as-is with help reviewing family timing, clean-out, probate, and repairs.",
    eyebrow: "Sell inherited house Kansas City",
    headline: "Sell an Inherited House in Kansas City",
    lead:
      "Inherited houses often come with family coordination, repairs, contents, taxes, and decisions nobody planned for. ACE can review an as-is sale path and help you compare next steps before spending money on repairs.",
    formHeading: "Start an inherited-house review",
    formSubheading: "Share the address and one way to reach you. You do not need every document ready before starting.",
    buttonLabel: "Review inherited-house options",
    defaultSituation: "inherited",
    proofPoints: [
      "As-is review for original-condition houses",
      "Clean-out and repair burden can be included",
      "Family timing and title questions reviewed carefully",
      "No public listing required to start",
    ],
    situationHeading: "Inherited property decisions need a clear path",
    situationBody:
      "The house may need repairs, the yard may be overgrown, contents may still be inside, and family members may need the same written numbers before deciding.",
    situationBullets: [
      "Parents passed and heirs do not want to keep the house",
      "Original-condition interior or deferred maintenance",
      "Clean-out, trees, contents, utilities, or taxes piling up",
      "Probate, estate, or title questions that need review",
    ],
    comparisonHeading: "Inherited-house options",
    comparisonIntro:
      "The best path depends on family goals, documents, condition, carrying costs, and whether the property is ready for retail buyers.",
    comparisonItems: [
      {
        title: "Sell as-is",
        body: "Useful when the family wants a simpler path without repairs, clean-out, or months of coordination.",
      },
      {
        title: "Clean up and list",
        body: "May make sense when the house is in strong condition and the family can manage the timeline.",
      },
      {
        title: "Hold or rent",
        body: "Can work for some families, but repairs, management, insurance, and family agreement matter.",
      },
    ],
    storySlug: "inherited-original-condition-house",
    relatedGuide: {
      label: "Read inherited-house checklist",
      href: "/resources/kansas-city-inherited-house-checklist/",
    },
    faqs: [
      {
        question: "Can I sell an inherited house before it is cleaned out?",
        answer:
          "Yes. Clean-out can be discussed as part of an as-is offer, especially when the family wants to avoid managing the property.",
      },
      {
        question: "What if probate is involved?",
        answer:
          "Probate can affect who has authority to sell and when closing can happen. A title company or attorney should review the documents.",
      },
      {
        question: "Can multiple heirs review the same numbers?",
        answer:
          "Yes. ACE can summarize the option in writing so family members can compare the same information.",
      },
    ],
  },
  {
    slug: "take-over-payments-kansas-city",
    title: "Take Over Payments Kansas City | ACE Properties KC",
    description:
      "Need someone to take over house payments in Kansas City? Compare cash, payoff, and subject-to options.",
    eyebrow: "Take over payments Kansas City",
    headline: "Can Someone Take Over Payments on Your Kansas City House?",
    lead:
      "If the monthly payment is the real pressure point, a simple cash offer may not be the only option to review. ACE can compare cash, payoff-at-closing, and payment-takeover structures when the numbers and risk make sense.",
    formHeading: "Compare payment options",
    formSubheading: "Send the address and one way to reach you. Add payment details later if you have them.",
    buttonLabel: "Compare payment paths",
    defaultSituation: "payment takeover",
    proofPoints: [
      "Cash and payment-takeover options compared",
      "Seller risk explained before signing",
      "Arrears, taxes, insurance, and title reviewed",
      "Advisor review encouraged for creative structures",
    ],
    situationHeading: "Payment takeover should be handled carefully",
    situationBody:
      "Subject-to and payment-takeover structures can create relief, but they also involve credit, lender, insurance, tax, and legal questions. ACE treats this as an option to compare, not a promise or shortcut.",
    situationBullets: [
      "You cannot stay but need someone else to carry payments",
      "The payoff is tight and a cash sale may not solve everything",
      "You want a documented plan before more payments are missed",
      "You need to understand seller risk before signing anything",
    ],
    comparisonHeading: "Payment takeover vs cash payoff",
    comparisonIntro:
      "A payment-takeover conversation should always be compared against simpler paths first.",
    comparisonItems: [
      {
        title: "Cash payoff",
        body: "Usually cleaner when equity is enough to pay the loan and seller wants a full break.",
      },
      {
        title: "Payment takeover",
        body: "May help when existing loan terms matter, but seller risk and documentation must be reviewed carefully.",
      },
      {
        title: "Lender help",
        body: "May be better when the seller wants to keep the house through modification, forbearance, or repayment.",
      },
    ],
    storySlug: "river-market-condo-payment-takeover",
    relatedGuide: {
      label: "Read subject-to guide",
      href: "/resources/subject-to-real-estate-kansas-city/",
    },
    faqs: [
      {
        question: "Can ACE take over my mortgage payments?",
        answer:
          "Sometimes a payment-takeover structure can be reviewed, but it depends on the loan, title, arrears, insurance, seller risk, and written terms.",
      },
      {
        question: "Is this the same as a loan assumption?",
        answer:
          "No. A formal assumption usually involves lender approval. Subject-to or payment-takeover structures are different and need careful review.",
      },
      {
        question: "Should I get legal advice?",
        answer:
          "Yes. Creative payment structures can affect credit, taxes, insurance, mortgage terms, and legal obligations. Seller advisor review is encouraged.",
      },
    ],
  },
];

export function getPaidLandingPage(slug: string): PaidLandingPage | undefined {
  return paidLandingPages.find((page) => page.slug === slug);
}
