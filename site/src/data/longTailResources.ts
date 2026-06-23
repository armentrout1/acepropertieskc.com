type LocalDecisionVariant = "general" | "payment" | "estate" | "repairs" | "vacant" | "fast";

type ResourceSection = {
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
};

type ComparisonItem = {
  title: string;
  body: string;
};

export type LongTailResourcePage = {
  slug: string;
  title: string;
  description: string;
  category: string;
  badge: string;
  headline: string;
  intro: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  quickAnswer: {
    title: string;
    body: string;
    bullets: string[];
  };
  sections: ResourceSection[];
  comparison?: {
    heading: string;
    intro: string;
    items: ComparisonItem[];
  };
  checklist?: {
    heading: string;
    items: string[];
  };
  storySlug?: string;
  decisionVariant: LocalDecisionVariant;
  offerBlock: {
    badge: string;
    title: string;
    body: string;
    points: string[];
    formHeading: string;
    defaultSituation: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const longTailResourcePages: LongTailResourcePage[] = [
  {
    slug: "creative-home-buyer-kansas-city",
    title: "Creative Home Buyer Kansas City | ACE Properties KC",
    description:
      "Compare cash, as-is, and creative home buyer options in Kansas City when a normal listing does not fit.",
    category: "Creative options",
    badge: "Creative home buyer",
    headline: "Creative Home Buyer in Kansas City",
    intro:
      "Some seller problems are not solved by a simple cash number. If the mortgage, payoff, repairs, timing, tenants, or family situation is the real issue, ACE Properties KC can compare cash and creative paths before you decide what fits.",
    primaryCta: {
      label: "Compare my options",
      href: "#creative-home-buyer-kansas-city-form",
    },
    secondaryCta: {
      label: "Read options overview",
      href: "/options/",
    },
    quickAnswer: {
      title: "What creative means here",
      body:
        "Creative does not mean vague. It means looking beyond one cash offer when the situation calls for it, then putting any option in plain English before anything is signed.",
      bullets: [
        "Cash offer when a clean payoff and fast close fit",
        "Payment takeover review when monthly payments or payoff are the problem",
        "Flexible closing or possession timing when life is moving faster than title",
        "As-is structure when repairs, belongings, or clean-out are blocking a listing",
      ],
    },
    sections: [
      {
        eyebrow: "Best fit",
        title: "When a creative buyer conversation makes sense",
        body:
          "Sellers usually need a creative conversation when the house itself is only part of the problem. The bigger issue may be a mortgage payment, family deadline, inherited property, condo rules, tenant situation, or a payoff that makes a normal sale hard.",
        bullets: [
          "You need to move but cannot carry the payment much longer",
          "The house needs repairs or clean-out you do not want to manage",
          "A listing fell through or never produced a workable buyer",
          "The payoff, title, or timeline needs more than a standard cash offer",
        ],
      },
      {
        eyebrow: "Seller protection",
        title: "A good creative option should be documented clearly",
        body:
          "Any flexible structure should explain who pays what, how payments are verified, what happens at closing, what the seller remains responsible for, and what advisors should review. If the terms are not clear, it is not ready.",
        bullets: [
          "Written terms before commitment",
          "Title, payoff, insurance, taxes, and HOA questions reviewed early",
          "No pressure to choose creative terms when cash or listing is cleaner",
          "Plain answer when ACE is not the right fit",
        ],
      },
      {
        eyebrow: "Local proof",
        title: "Why this lane fits ACE Properties KC",
        body:
          "ACE has helped sellers in situations where a normal sale was not enough, including creative payment structures, inherited houses, and properties that needed an as-is path. The goal is not to force a deal; it is to find the cleanest workable option.",
      },
    ],
    comparison: {
      heading: "Creative buyer vs typical cash buyer",
      intro:
        "A typical cash buyer may only give one number. A creative buyer should still be able to explain when cash, listing, or flexible terms are better.",
      items: [
        {
          title: "Cash buyer",
          body:
            "Often best when the seller has equity, wants a clean break, and needs a direct as-is closing.",
        },
        {
          title: "Creative buyer",
          body:
            "Useful when payoff, monthly payment, timing, or property condition requires more than one possible structure.",
        },
        {
          title: "Agent listing",
          body:
            "May be best when the property is updated, easy to show, and the seller has enough time for retail buyers.",
        },
      ],
    },
    checklist: {
      heading: "Bring these details to the first conversation",
      items: [
        "Property address and occupancy status",
        "Approximate mortgage balance or monthly payment if relevant",
        "Any urgent deadlines, notices, or family timing issues",
        "Known repair, clean-out, title, tax, HOA, or lien concerns",
      ],
    },
    storySlug: "river-market-condo-payment-takeover",
    decisionVariant: "payment",
    offerBlock: {
      badge: "Creative option review",
      title: "Want cash and creative options compared side by side?",
      body:
        "Send the address and what you are trying to solve. ACE can review whether a cash offer, payment takeover conversation, or another flexible path is worth considering.",
      points: [
        "Cash and flexible options compared",
        "No repairs or clean-out required to start",
        "Payment and payoff questions reviewed carefully",
        "No contract from the first conversation",
      ],
      formHeading: "Start a creative option review",
      defaultSituation: "creative options",
    },
    faqs: [
      {
        question: "Is a creative home buyer the same as a cash buyer?",
        answer:
          "Not always. A creative buyer may still buy for cash, but they can also review payment, payoff, timing, or possession structures when a standard cash offer does not solve the seller's problem.",
      },
      {
        question: "Does a creative option mean I have to leave my loan in place?",
        answer:
          "No. Leaving a loan in place is only one possible structure and it is not always the best fit. Cash payoff at closing may be cleaner when the numbers allow it.",
      },
      {
        question: "Should I talk to an attorney before signing creative terms?",
        answer:
          "Yes. Creative structures can affect credit, taxes, insurance, title, and legal obligations. Sellers should involve qualified advisors before signing.",
      },
    ],
  },
  {
    slug: "take-over-payments-house-kansas-city",
    title: "Take Over Payments on a House in Kansas City | ACE",
    description:
      "Learn when a payment takeover may help Kansas City sellers and what risks should be reviewed first.",
    category: "Payment takeover",
    badge: "Take over payments",
    headline: "Can Someone Take Over Payments on a House in Kansas City?",
    intro:
      "Payment takeover can come up when selling for cash alone does not solve the payoff or monthly payment problem. It may help in some situations, but it needs careful review because the seller may remain tied to the loan.",
    primaryCta: {
      label: "Review payment options",
      href: "#take-over-payments-house-kansas-city-form",
    },
    secondaryCta: {
      label: "Read subject-to guide",
      href: "/resources/subject-to-real-estate-kansas-city/",
    },
    quickAnswer: {
      title: "Short answer",
      body:
        "A buyer may be able to purchase a house while agreeing to make the existing payments, often discussed as subject-to. The structure, loan terms, payment verification, insurance, taxes, and seller risk all need review.",
      bullets: [
        "The existing loan may stay in the seller's name",
        "Written payment tracking matters",
        "Arrears, taxes, insurance, and HOA items must be understood",
        "Cash payoff may still be safer if there is enough equity",
      ],
    },
    sections: [
      {
        eyebrow: "Common situations",
        title: "Why sellers ask about payment takeover",
        body:
          "Most sellers ask because they cannot or do not want to keep making payments, but a standard sale is not solving the problem fast enough. The house may need repairs, the payoff may be tight, or the deadline may be approaching.",
        bullets: [
          "Behind or about to fall behind on mortgage payments",
          "Moving out but cannot keep carrying the house",
          "Repairs make listing slow or expensive",
          "A cash offer does not leave enough room after payoff and costs",
        ],
      },
      {
        eyebrow: "Risk review",
        title: "The seller needs to know what remains connected",
        body:
          "If the loan is not paid off, the seller may still have credit and loan exposure. That is why payment takeover should be compared with cash, lender options, and any legal or financial advice before choosing it.",
        bullets: [
          "Who receives proof the payment was made",
          "How taxes and insurance stay current",
          "What happens if the buyer misses a payment",
          "Whether a due-on-sale clause or lender issue exists",
        ],
      },
      {
        eyebrow: "ACE approach",
        title: "Compare it before deciding",
        body:
          "ACE can review payment takeover only as one possible path. If a cash sale, lender workout, or listing is cleaner, the conversation should say that plainly.",
      },
    ],
    comparison: {
      heading: "Payment takeover vs cash sale",
      intro:
        "The right choice depends on equity, urgency, payment status, title, and how much ongoing connection the seller is willing to carry.",
      items: [
        {
          title: "Cash sale",
          body:
            "Usually pays off the existing loan at closing and gives the seller a cleaner break.",
        },
        {
          title: "Payment takeover",
          body:
            "May create relief when the loan terms or payoff make cash difficult, but it can leave the seller connected to the loan.",
        },
        {
          title: "Lender option",
          body:
            "May be worth reviewing if the seller wants to keep the house or needs time before selling.",
        },
      ],
    },
    checklist: {
      heading: "Questions to answer before a payment takeover",
      items: [
        "Current monthly payment and loan balance",
        "Whether any payments, taxes, insurance, or HOA dues are late",
        "Whether there are notices, foreclosure dates, or lender deadlines",
        "How payments would be tracked and verified after closing",
      ],
    },
    storySlug: "river-market-condo-payment-takeover",
    decisionVariant: "payment",
    offerBlock: {
      badge: "Payment option review",
      title: "Need someone to review the payment situation?",
      body:
        "Start with the address and what you know about the payment. ACE can compare cash, payoff-at-closing, lender options, and payment takeover questions.",
      points: [
        "Payment status reviewed early",
        "Cash and creative options compared",
        "Seller risk explained plainly",
        "No repairs needed to start",
      ],
      formHeading: "Review my payment options",
      defaultSituation: "payment takeover",
    },
    faqs: [
      {
        question: "Can someone legally take over my mortgage payments?",
        answer:
          "Some structures allow a buyer to agree to make payments, but the details depend on the loan, documents, title, and state-specific legal issues. Get qualified legal and financial advice before signing.",
      },
      {
        question: "Will payment takeover remove my name from the loan?",
        answer:
          "Usually not in a subject-to structure. A formal loan assumption or refinance is different and may involve lender approval.",
      },
      {
        question: "Can this stop foreclosure?",
        answer:
          "It may help only if the timing, arrears, title, and lender situation can be handled before the deadline. Urgent foreclosure issues should also be discussed with the lender, a housing counselor, and qualified advisors.",
      },
    ],
  },
  {
    slug: "sell-house-after-parents-died-kansas-city",
    title: "Sell House After Parents Died in Kansas City | ACE",
    description:
      "A practical guide for heirs selling a Kansas City house after parents pass, including title, clean-out, repairs, and timing.",
    category: "Inherited property",
    badge: "Inherited house",
    headline: "Selling a House After Parents Died in Kansas City",
    intro:
      "When parents pass, the house can become one more heavy decision in the middle of grief, paperwork, belongings, repairs, and family conversations. ACE can help heirs compare an as-is sale with listing, clean-out, and repair decisions.",
    primaryCta: {
      label: "Review inherited options",
      href: "#sell-house-after-parents-died-kansas-city-form",
    },
    secondaryCta: {
      label: "Inherited house checklist",
      href: "/resources/kansas-city-inherited-house-checklist/",
    },
    quickAnswer: {
      title: "Start with authority, then condition",
      body:
        "Before any sale can close, the right person must have authority to sign. After that, the family can compare cleaning out, repairing, listing, or selling as-is.",
      bullets: [
        "Confirm who has legal authority to sell",
        "Gather deed, death certificate, mortgage, tax, and utility information",
        "Decide whether belongings need to be removed before sale",
        "Compare repair cost and timeline against an as-is offer",
      ],
    },
    sections: [
      {
        eyebrow: "Family timing",
        title: "The fastest path is not always the first task",
        body:
          "Many families want the house sold quickly, but the first bottleneck may be authority, probate status, title, or heir agreement. A direct buyer can still review the property early, but closing depends on the paperwork being ready.",
        bullets: [
          "Is probate required or already opened?",
          "Who is authorized to sign documents?",
          "Are all heirs aligned on selling?",
          "Are mortgage, taxes, utilities, or insurance current?",
        ],
      },
      {
        eyebrow: "House condition",
        title: "Original condition does not have to become a remodel project",
        body:
          "If the house has original finishes, old systems, overgrown trees, full rooms, or years of deferred maintenance, heirs can still ask for an as-is review before deciding to clean out or renovate.",
        bullets: [
          "Dated kitchens, baths, flooring, or paneling",
          "Belongings, furniture, tools, and garage contents",
          "Tree, yard, exterior, or code concerns",
          "Unknown repair issues discovered after vacancy",
        ],
      },
      {
        eyebrow: "Decision point",
        title: "Compare net proceeds, not just offer price",
        body:
          "A listing price may look better until repairs, commissions, concessions, holding costs, clean-out, utilities, insurance, and time are included. A simple as-is offer may be worth comparing when the family wants certainty.",
      },
    ],
    comparison: {
      heading: "As-is sale vs listing after inheritance",
      intro:
        "Neither path is automatically better. The right answer depends on authority, condition, timeline, family bandwidth, and the real net number.",
      items: [
        {
          title: "Sell as-is",
          body:
            "Useful when the family wants fewer decisions, no repairs, no clean-out, and a clearer closing path.",
        },
        {
          title: "List after prep",
          body:
            "May work when the house is updated or the family has time, money, and agreement to prepare it for retail buyers.",
        },
        {
          title: "Hold temporarily",
          body:
            "May make sense if paperwork is not ready, but carrying costs and vacancy risk should be tracked.",
        },
      ],
    },
    checklist: {
      heading: "Helpful documents for heirs",
      items: [
        "Death certificate and probate/court documents if any",
        "Mortgage payoff, tax bill, insurance, and HOA information",
        "Utility status and vacancy details",
        "Any known repair, water, foundation, roof, or code issues",
      ],
    },
    storySlug: "inherited-original-condition-house",
    decisionVariant: "estate",
    offerBlock: {
      badge: "Inherited house review",
      title: "Need a simple as-is review for an inherited house?",
      body:
        "Send the address and what you know about the estate status. ACE can review the house as-is and explain what would need to happen before closing.",
      points: [
        "Original condition and clean-out reviewed as-is",
        "Family timeline respected",
        "No repair list required to start",
        "Title and authority questions identified early",
      ],
      formHeading: "Review inherited house options",
      defaultSituation: "inherited house",
    },
    faqs: [
      {
        question: "Can heirs sell before probate is finished?",
        answer:
          "It depends on legal authority and title requirements. A buyer can review the property early, but closing usually requires the right authority to sign.",
      },
      {
        question: "Do we have to clean out the house first?",
        answer:
          "Not necessarily. ACE can review an inherited house with belongings still inside and include clean-out in the as-is conversation.",
      },
      {
        question: "Should we remodel before selling?",
        answer:
          "Only if the expected retail increase is worth the cost, time, risk, and family effort. Many heirs compare an as-is offer first.",
      },
    ],
  },
  {
    slug: "sell-dated-house-as-is-kansas-city",
    title: "Sell a Dated House As-Is in Kansas City | ACE",
    description:
      "Sell a dated Kansas City house as-is without remodeling original finishes, repairs, clean-out, or listing prep.",
    category: "As-is selling",
    badge: "Dated house as-is",
    headline: "Sell a Dated House As-Is in Kansas City",
    intro:
      "Original finishes, old carpet, paneling, wallpaper, dated kitchens, older mechanicals, and overgrown exterior work do not have to become your remodeling project. ACE can review the house in its current condition.",
    primaryCta: {
      label: "Review as-is options",
      href: "#sell-dated-house-as-is-kansas-city-form",
    },
    secondaryCta: {
      label: "As-is selling guide",
      href: "/resources/sell-house-as-is-kansas-city/",
    },
    quickAnswer: {
      title: "You can start before repairs",
      body:
        "An as-is review means the condition is part of the offer conversation. You do not need bids, new flooring, paint, a clean-out crew, or tree work before asking what the house could sell for.",
      bullets: [
        "Original condition can be priced into the offer",
        "Clean-out and contents can be discussed",
        "Major repairs do not have to be completed first",
        "The offer should explain assumptions and seller costs",
      ],
    },
    sections: [
      {
        eyebrow: "Common blockers",
        title: "Why dated homes get stuck before listing",
        body:
          "A dated house may still be solid, but buyers often want discounts, repairs, credits, inspections, and financing conditions. The seller may not want to spend months guessing which updates matter.",
        bullets: [
          "Old kitchens, baths, flooring, ceilings, and fixtures",
          "Deferred repairs that make buyers nervous",
          "Tree, yard, exterior, garage, or basement work",
          "Family members disagreeing on how much to fix",
        ],
      },
      {
        eyebrow: "Offer math",
        title: "Compare repair cost against real net",
        body:
          "The question is not whether updates would make the house prettier. The question is whether the extra retail price would exceed repairs, holding costs, commissions, concessions, utilities, taxes, and stress.",
        bullets: [
          "Estimate repair scope honestly",
          "Add the months of carrying cost",
          "Subtract commissions and likely concessions",
          "Compare that net against an as-is number",
        ],
      },
      {
        eyebrow: "ACE approach",
        title: "Original condition can be a fit for a direct review",
        body:
          "ACE is comfortable reviewing houses before they are cleaned, updated, or ready for photos. A direct as-is sale is strongest when the seller values certainty and simplicity more than squeezing every retail dollar.",
      },
    ],
    comparison: {
      heading: "Fix first or sell as-is?",
      intro:
        "A dated house can go either way. Use real numbers, not hope, to compare the two paths.",
      items: [
        {
          title: "Fix first",
          body:
            "May work when the seller has cash, time, contractor control, and confidence that updates will produce a higher net.",
        },
        {
          title: "Sell as-is",
          body:
            "May work when repairs are uncertain, the house is vacant, family bandwidth is low, or speed matters.",
        },
        {
          title: "Do selective cleanup",
          body:
            "Sometimes light cleanup helps, but major remodeling should be compared carefully before spending.",
        },
      ],
    },
    checklist: {
      heading: "Details that help an as-is review",
      items: [
        "Approximate age of roof, HVAC, electrical, and plumbing if known",
        "Rooms or areas with water, foundation, or structural concerns",
        "Whether belongings or debris will stay",
        "Vacancy status, utilities, and any code or city notices",
      ],
    },
    storySlug: "inherited-original-condition-house",
    decisionVariant: "repairs",
    offerBlock: {
      badge: "As-is review",
      title: "Want the house reviewed before you remodel?",
      body:
        "Send the address and the best way to reach you. ACE can review original condition, clean-out, repairs, and timing before you spend money on updates.",
      points: [
        "No remodel required to start",
        "Repairs and clean-out reviewed as-is",
        "Cash and flexible options compared",
        "Seller net explained plainly",
      ],
      formHeading: "Review my dated house",
      defaultSituation: "dated house",
    },
    faqs: [
      {
        question: "Can I sell a house with original finishes?",
        answer:
          "Yes. Original finishes, older systems, and dated rooms can be reviewed as part of an as-is offer.",
      },
      {
        question: "Should I paint or replace flooring before asking?",
        answer:
          "Not necessarily. Ask for an as-is review first, then compare whether updates would actually improve your net proceeds.",
      },
      {
        question: "Can trees and yard work be included?",
        answer:
          "Yes. Overgrown trees, yard cleanup, exterior issues, and clean-out can all be part of the as-is discussion.",
      },
    ],
  },
  {
    slug: "sell-condo-that-will-not-sell-kansas-city",
    title: "Sell a Condo That Will Not Sell in Kansas City | ACE",
    description:
      "Options for Kansas City condo owners when a listing stalls, HOA rules complicate financing, or payments need relief.",
    category: "Condo options",
    badge: "Condo will not sell",
    headline: "Sell a Kansas City Condo That Will Not Sell",
    intro:
      "Condos can stall for reasons that have little to do with the seller's effort: HOA documents, financing restrictions, assessments, condition, payment pressure, rental rules, or a buyer pool that is thinner than expected.",
    primaryCta: {
      label: "Review condo options",
      href: "#sell-condo-that-will-not-sell-kansas-city-form",
    },
    secondaryCta: {
      label: "Payment takeover story",
      href: "/seller-stories/river-market-condo-payment-takeover/",
    },
    quickAnswer: {
      title: "A stalled condo needs a different review",
      body:
        "When a condo will not sell conventionally, compare the listing feedback, HOA limitations, monthly payment pressure, payoff, and whether a cash or creative structure is more realistic.",
      bullets: [
        "Review HOA dues, assessments, reserves, and rental rules",
        "Confirm whether buyer financing is difficult",
        "Compare payment pressure against waiting longer",
        "Consider creative structure only with careful documentation",
      ],
    },
    sections: [
      {
        eyebrow: "Why condos stall",
        title: "The issue may be the building, not just the unit",
        body:
          "A condo can be clean and well located but still be difficult for buyers to finance or justify. HOA rules, litigation, insurance, reserves, assessments, and rental caps can all affect demand.",
        bullets: [
          "Buyer financing or warrantability problems",
          "High HOA dues or special assessments",
          "Rental caps or owner-occupancy requirements",
          "Condition updates that buyers expect but sellers do not want to fund",
        ],
      },
      {
        eyebrow: "Payment pressure",
        title: "Monthly carrying cost can change the decision",
        body:
          "If the condo is vacant or the owner cannot live there, every month of mortgage, HOA, taxes, insurance, and utilities affects the real net. A direct or creative option may be worth comparing against waiting.",
        bullets: [
          "Mortgage payment and HOA dues",
          "Special assessments or upcoming HOA increases",
          "Insurance and utility costs while vacant",
          "Listing time and buyer fallout risk",
        ],
      },
      {
        eyebrow: "Creative fit",
        title: "A payment structure may help when cash is not enough",
        body:
          "In some condo situations, a cash offer may not solve the payoff or payment problem. A carefully documented payment takeover conversation may be worth reviewing, but seller risk must be clear.",
      },
    ],
    comparison: {
      heading: "Condo sale paths to compare",
      intro:
        "The best path depends on HOA status, payment pressure, unit condition, and how long the seller can wait.",
      items: [
        {
          title: "Keep listing",
          body:
            "May work if showings are improving, financing is available, and the seller can handle carrying costs.",
        },
        {
          title: "Direct as-is sale",
          body:
            "May work if the seller wants fewer showings, a clearer timeline, and no additional updating.",
        },
        {
          title: "Creative option",
          body:
            "May be reviewed when the payment or payoff is the main obstacle, but HOA and loan issues must be understood.",
        },
      ],
    },
    checklist: {
      heading: "Condo details to gather",
      items: [
        "Monthly HOA dues and any special assessments",
        "Rental rules, owner-occupancy rules, and parking/storage details",
        "Mortgage payment, payoff, and any late payments",
        "Listing feedback, inspection issues, or buyer financing problems",
      ],
    },
    storySlug: "river-market-condo-payment-takeover",
    decisionVariant: "payment",
    offerBlock: {
      badge: "Condo option review",
      title: "Need a stalled condo reviewed with fresh eyes?",
      body:
        "Share the address, HOA basics, and what happened with the listing. ACE can compare cash, waiting, and creative options when the numbers call for it.",
      points: [
        "HOA and payment factors reviewed",
        "Cash and creative options compared",
        "No pressure to relist or remodel first",
        "Seller risk explained before any structure",
      ],
      formHeading: "Review my condo options",
      defaultSituation: "condo will not sell",
    },
    faqs: [
      {
        question: "Can ACE buy condos in Kansas City?",
        answer:
          "ACE can review condo situations, including as-is sales and creative options, but HOA rules, title, loan, and building details matter.",
      },
      {
        question: "Why would a condo not sell?",
        answer:
          "Common reasons include price, condition, HOA dues, assessments, buyer financing limits, rental rules, parking, building issues, or a narrow buyer pool.",
      },
      {
        question: "Can payment takeover work on a condo?",
        answer:
          "It may be possible in some situations, but loan terms, HOA rules, insurance, taxes, payment tracking, and seller risk need careful review.",
      },
    ],
  },
  {
    slug: "cash-offer-vs-payment-takeover-kansas-city",
    title: "Cash Offer vs Payment Takeover in Kansas City | ACE",
    description:
      "Compare a cash offer with payment takeover options for Kansas City sellers facing payoff, timing, or mortgage pressure.",
    category: "Comparison",
    badge: "Cash vs payment takeover",
    headline: "Cash Offer vs Payment Takeover in Kansas City",
    intro:
      "A cash offer and a payment takeover solve different problems. Cash is usually cleaner. Payment takeover may help when payoff, monthly pressure, or loan terms make a simple cash sale harder, but it carries different risks.",
    primaryCta: {
      label: "Compare both options",
      href: "#cash-offer-vs-payment-takeover-kansas-city-form",
    },
    secondaryCta: {
      label: "Read payment takeover guide",
      href: "/resources/subject-to-real-estate-kansas-city/",
    },
    quickAnswer: {
      title: "Cash is cleaner; payment takeover is situational",
      body:
        "If a cash sale can pay off the loan and meet your timeline, it is often simpler. If the payoff is tight or payment pressure is urgent, payment takeover may be discussed, but seller risk must be reviewed carefully.",
      bullets: [
        "Cash usually pays off the loan through closing",
        "Payment takeover may leave the seller tied to the loan",
        "Both paths should show clear seller net and responsibilities",
        "Urgent mortgage issues should also involve lender or advisor conversations",
      ],
    },
    sections: [
      {
        eyebrow: "Cash offer",
        title: "When cash is usually the better fit",
        body:
          "Cash is often the cleaner path when there is enough equity, title can close, and the seller wants a direct break from the property, loan, repairs, and showings.",
        bullets: [
          "You want the loan paid off at closing",
          "You want fewer ongoing obligations",
          "The house can close as-is through title",
          "Speed and certainty matter more than retail exposure",
        ],
      },
      {
        eyebrow: "Payment takeover",
        title: "When payment takeover may be worth discussing",
        body:
          "Payment takeover usually comes up when the loan terms or payoff make a cash offer less helpful, or when the seller needs relief from the monthly payment but the situation needs more than a standard sale.",
        bullets: [
          "Payoff is close to the as-is value",
          "The monthly payment is the urgent issue",
          "Existing loan terms may make a structure possible",
          "The seller understands the ongoing loan connection",
        ],
      },
      {
        eyebrow: "Decision rule",
        title: "Do not choose the clever option when the simple option works",
        body:
          "Creative options are useful only when they solve a real problem better than cash or listing. If cash pays off the loan, meets the timeline, and gives a clean break, there may be no reason to complicate it.",
      },
    ],
    comparison: {
      heading: "Side-by-side comparison",
      intro:
        "Use this as a plain-language starting point before reviewing actual numbers.",
      items: [
        {
          title: "Cash offer",
          body:
            "Cleaner closing, fewer ongoing ties, usually simpler for sellers, but the offer must account for repairs, risk, and resale costs.",
        },
        {
          title: "Payment takeover",
          body:
            "May create relief when payoff is tight, but the seller may remain connected to the loan and needs written protections.",
        },
        {
          title: "Hybrid conversation",
          body:
            "Sometimes both are compared so the seller can see the tradeoff between simplicity, net, timeline, and risk.",
        },
      ],
    },
    checklist: {
      heading: "Numbers to compare before choosing",
      items: [
        "Cash offer net after payoff and seller costs",
        "Monthly payment, arrears, taxes, insurance, and HOA amounts",
        "How long the seller can carry the property",
        "What happens if a payment takeover buyer misses a payment",
      ],
    },
    storySlug: "river-market-condo-payment-takeover",
    decisionVariant: "payment",
    offerBlock: {
      badge: "Option comparison",
      title: "Want the simple and creative numbers compared?",
      body:
        "Send the address and basic mortgage/payment details. ACE can compare cash, payoff, and payment takeover questions before you commit to any path.",
      points: [
        "Cash offer and creative path compared",
        "Payment risk reviewed up front",
        "Repairs and title questions included",
        "No obligation from the first review",
      ],
      formHeading: "Compare cash and payment takeover",
      defaultSituation: "cash vs payment takeover",
    },
    faqs: [
      {
        question: "Is payment takeover better than a cash offer?",
        answer:
          "Only in some situations. Cash is usually simpler. Payment takeover may help when payoff or monthly payment pressure makes a cash sale less useful, but it can carry seller risk.",
      },
      {
        question: "Can I ask ACE for both numbers?",
        answer:
          "Yes. ACE can compare a cash path with creative options when the property, payoff, and timing make that useful.",
      },
      {
        question: "Which option closes faster?",
        answer:
          "A clean cash closing may be faster when title and payoff are ready. Payment takeover can also move quickly, but only if loan, title, insurance, taxes, and documents are reviewed carefully.",
      },
    ],
  },
  {
    slug: "sell-house-with-foundation-problems-kansas-city",
    title: "Sell House With Foundation Problems Kansas City | ACE",
    description:
      "Kansas City guide to selling a house with foundation problems, cracks, water damage, bowed walls, repair bids, and as-is cash offer options.",
    category: "Repairs",
    badge: "Foundation problems",
    headline: "Sell a House With Foundation Problems in Kansas City",
    intro:
      "Foundation problems can stop a normal sale fast. Cracks, bowing walls, basement water, sloping floors, or a large repair bid can make buyers nervous and make financing harder. ACE can review the house as-is before you spend money on repairs.",
    primaryCta: {
      label: "Review foundation options",
      href: "#sell-house-with-foundation-problems-kansas-city-form",
    },
    secondaryCta: {
      label: "Compare repairs vs as-is",
      href: "/resources/major-repairs-vs-selling-as-is-kansas-city/",
    },
    quickAnswer: {
      title: "You can ask for an as-is review before fixing the foundation",
      body:
        "A foundation issue does not automatically mean you have to repair before selling. The right choice depends on repair scope, equity, time, buyer financing risk, and whether the seller wants to manage a major project.",
      bullets: [
        "Foundation bids can be compared against an as-is offer",
        "Basement water and wall movement can be part of the review",
        "A direct buyer may not require retail-ready repairs",
        "Title, payoff, and closing timeline still matter",
      ],
    },
    sections: [
      {
        eyebrow: "Common signs",
        title: "What sellers usually notice first",
        body:
          "Foundation concerns often start with visible symptoms. The exact repair scope may need a contractor or engineer, but you can still compare selling paths before hiring everyone.",
        bullets: [
          "Stair-step cracks in brick or block",
          "Bowed basement walls or wall anchors",
          "Water entering the basement after storms",
          "Sloping floors, sticking doors, or gaps around trim",
        ],
      },
      {
        eyebrow: "Offer math",
        title: "A repair bid is not the same as your selling decision",
        body:
          "A $20,000 or $40,000 bid can change the plan, but the real question is your net after repairs, commissions, holding costs, buyer concessions, and time. An as-is number gives you a comparison point.",
        bullets: [
          "Repair cost and uncertainty",
          "Months of holding costs while work is scheduled",
          "Buyer inspection and appraisal risk",
          "Whether repairs actually increase your final net",
        ],
      },
      {
        eyebrow: "As-is path",
        title: "Selling as-is may be cleaner when the project is too big",
        body:
          "If the property is vacant, inherited, behind on maintenance, or already has other repairs, foundation work may be one more project you do not want to manage. A direct sale can shift that repair responsibility to the buyer after closing.",
      },
    ],
    comparison: {
      heading: "Foundation repair vs selling as-is",
      intro:
        "Both paths can be reasonable. Use real numbers and timing, not just the highest possible retail price.",
      items: [
        {
          title: "Repair first",
          body:
            "May fit when you have cash, contractor confidence, time, and a realistic chance that repairs will raise your net more than they cost.",
        },
        {
          title: "Sell as-is",
          body:
            "May fit when the repair scope is uncertain, the house has other issues, the seller wants certainty, or the property is hard to show.",
        },
        {
          title: "Get both numbers",
          body:
            "A repair bid and an as-is offer give you a clearer comparison than guessing what a future buyer might do.",
        },
      ],
    },
    checklist: {
      heading: "Helpful details for a foundation review",
      items: [
        "Photos of cracks, basement walls, water entry, or floor slope",
        "Any contractor, engineer, waterproofing, or piering bids",
        "Whether the basement is finished, wet, vacant, or full of belongings",
        "Mortgage payoff, taxes, insurance, and timing pressure if known",
      ],
    },
    storySlug: "inherited-original-condition-house",
    decisionVariant: "repairs",
    offerBlock: {
      badge: "Foundation issue review",
      title: "Want the foundation issue reviewed before you repair it?",
      body:
        "Send the address and what you know about the foundation. ACE can compare an as-is option against repairing and listing so you have a real decision point.",
      points: [
        "No foundation repair required to start",
        "Repair bids and photos can be reviewed",
        "As-is cash and flexible options compared",
        "Closing through title with payoff review",
      ],
      formHeading: "Review my foundation issue",
      defaultSituation: "needs repairs",
    },
    faqs: [
      {
        question: "Can I sell a house with foundation problems in Kansas City?",
        answer:
          "Yes, many houses with foundation issues can still be sold. A direct as-is buyer can review cracks, wall movement, water entry, and repair bids before making an offer.",
      },
      {
        question: "Do I need an engineer report before asking for an offer?",
        answer:
          "No. If you already have one, it helps. If not, you can still start with photos, known symptoms, and any repair bids you have.",
      },
      {
        question: "Will a foundation problem stop buyer financing?",
        answer:
          "It can. Some retail buyers, lenders, or insurers may have concerns. That is one reason sellers compare an as-is cash path against repairing before listing.",
      },
    ],
  },
  {
    slug: "sell-house-with-water-damage-kansas-city",
    title: "Sell House With Water Damage Kansas City | ACE",
    description:
      "Kansas City guide to selling a house with water damage, leaks, frozen pipes, mold concerns, insurance claims, and as-is offer options.",
    category: "Repairs",
    badge: "Water damage",
    headline: "Sell a House With Water Damage in Kansas City",
    intro:
      "Water damage can turn a normal sale into a repair project fast. Roof leaks, frozen pipes, failed sump pumps, basement water, plumbing breaks, or mold concerns can make buyers nervous and slow down financing. ACE can review the house as-is before you spend money on cleanup.",
    primaryCta: {
      label: "Review water damage options",
      href: "#sell-house-with-water-damage-kansas-city-form",
    },
    secondaryCta: {
      label: "Compare repairs vs as-is",
      href: "/resources/major-repairs-vs-selling-as-is-kansas-city/",
    },
    quickAnswer: {
      title: "You can compare an as-is offer before paying for remediation",
      body:
        "Water damage does not always mean you need to fully repair before selling. The right choice depends on the source, whether the home is vacant, insurance status, mold concerns, repair bids, buyer financing risk, and your timeline.",
      bullets: [
        "Leaks, frozen pipes, and basement water can be reviewed as-is",
        "Insurance claim timing can be part of the conversation",
        "Mold or cleanup bids can be compared against a direct sale",
        "Vacant-house risk and carrying costs should be included",
      ],
    },
    sections: [
      {
        eyebrow: "Source matters",
        title: "The cause of the water damage changes the decision",
        body:
          "A one-time plumbing leak is different from ongoing roof leaks, grading problems, basement seepage, or a vacant house with utilities left on. Sellers should understand the source before spending money on repairs that may not improve their final net.",
        bullets: [
          "Roof leak, storm damage, or missing shingles",
          "Frozen pipe or plumbing supply break",
          "Basement water, failed sump pump, or grading issue",
          "Vacant property damage discovered late",
        ],
      },
      {
        eyebrow: "Insurance",
        title: "Insurance claims can help, but they can also slow the sale",
        body:
          "If there is an open claim, deductible, denied claim, or incomplete repair scope, the sale path needs to account for paperwork and timing. A direct as-is offer gives you a comparison point while you decide whether to finish the claim or move on.",
        bullets: [
          "Claim status and deductible",
          "Contractor estimate or adjuster scope",
          "Whether repairs are complete or unfinished",
          "Whether the house is occupied, vacant, or unsafe to show",
        ],
      },
      {
        eyebrow: "As-is path",
        title: "Selling as-is may be cleaner when the cleanup is uncertain",
        body:
          "When water damage overlaps with mold concerns, clean-out, foundation issues, code notices, or a vacant property, the project can become bigger than the seller wants to manage. Selling as-is can shift cleanup, repair coordination, and resale risk to the buyer after closing.",
      },
    ],
    comparison: {
      heading: "Repair water damage vs selling as-is",
      intro:
        "The best decision is usually the one that gives you the clearest net number, timeline, and risk level.",
      items: [
        {
          title: "Repair first",
          body:
            "May fit when the damage is contained, insurance is paying, contractors are available, and repairs are likely to raise your net more than they cost.",
        },
        {
          title: "Sell as-is",
          body:
            "May fit when the scope is uncertain, mold is possible, the house is vacant, you need speed, or you do not want to manage remediation.",
        },
        {
          title: "Compare both",
          body:
            "A cleanup bid, insurance scope, and as-is offer let you compare the real choices instead of guessing what a retail buyer might accept later.",
        },
      ],
    },
    checklist: {
      heading: "Helpful details for a water damage review",
      items: [
        "Photos or video of the damaged rooms, ceilings, basement, or flooring",
        "What caused the leak or water entry if known",
        "Any insurance claim, adjuster scope, denial, or contractor bid",
        "Whether utilities are on and whether the home is vacant",
        "Mortgage payoff, taxes, insurance, and timing pressure if known",
      ],
    },
    storySlug: "inherited-original-condition-house",
    decisionVariant: "repairs",
    offerBlock: {
      badge: "Water damage review",
      title: "Want the water damage reviewed before you repair it?",
      body:
        "Send the address and what happened. ACE can compare an as-is option against cleanup, insurance timing, and listing so you can make a practical decision.",
      points: [
        "No cleanup required to start",
        "Insurance and repair details can be reviewed",
        "As-is cash and flexible options compared",
        "Closing through title with payoff review",
      ],
      formHeading: "Review my water damage issue",
      defaultSituation: "needs repairs",
    },
    faqs: [
      {
        question: "Can I sell a house with water damage in Kansas City?",
        answer:
          "Yes. Many water-damaged houses can be sold as-is. A direct buyer can review leaks, basement water, mold concerns, insurance details, and repair bids before making an offer.",
      },
      {
        question: "Do I need to fix mold or water damage before asking for an offer?",
        answer:
          "No. If you already have remediation bids or insurance documents, those help. If not, you can still start with photos, the address, and what you know about the damage.",
      },
      {
        question: "What if I have an open insurance claim?",
        answer:
          "An open claim does not automatically stop a sale, but it needs to be reviewed carefully. Claim status, deductible, repair scope, and title timing can all affect the best path.",
      },
      {
        question: "Can ACE buy a vacant house with frozen-pipe damage?",
        answer:
          "Yes. Frozen-pipe damage is common in vacant Kansas City houses. ACE can review the property as-is and help compare cleanup costs against selling directly.",
      },
    ],
  },
  {
    slug: "sell-house-full-of-stuff-kansas-city",
    title: "Sell House Full of Stuff Kansas City | ACE",
    description:
      "Kansas City guide to selling a house full of belongings, furniture, trash, garage items, inherited contents, or heavy clean-out needs.",
    category: "Clean-out",
    badge: "Heavy clean-out",
    headline: "Sell a House Full of Stuff in Kansas City",
    intro:
      "A house full of belongings can make a normal sale feel impossible. Furniture, garage items, basement storage, old appliances, debris, or inherited contents can delay showings and overwhelm families. ACE can review the property as-is before you rent dumpsters or spend weekends cleaning it out.",
    primaryCta: {
      label: "Review a clean-out offer",
      href: "#sell-house-full-of-stuff-kansas-city-form",
    },
    secondaryCta: {
      label: "Read the clean-out guide",
      href: "/resources/clean-out-house-before-selling-kansas-city/",
    },
    quickAnswer: {
      title: "You may not need to empty the house before selling",
      body:
        "If you sell directly as-is, belongings and clean-out can be included in the offer conversation. You should still remove valuables, personal documents, family photos, medications, firearms, and anything private or sentimental before closing.",
      bullets: [
        "Furniture, garage contents, tools, and storage items can be reviewed",
        "Inherited contents can be handled without rushing the family",
        "Clean-out cost can be compared against an as-is offer",
        "No public showings or staged listing prep required to start",
      ],
    },
    sections: [
      {
        eyebrow: "Common situations",
        title: "Why sellers get stuck before even asking for an offer",
        body:
          "Many sellers think they have to make the house empty before anyone will look at it. That delay can keep taxes, insurance, utilities, lawn care, mortgage payments, and family stress running longer than necessary.",
        bullets: [
          "Inherited house with decades of belongings",
          "Vacant house with furniture, tools, or garage items left behind",
          "Rental property with abandoned items after move-out",
          "Seller is out of town and cannot manage repeated clean-out trips",
        ],
      },
      {
        eyebrow: "Offer math",
        title: "Clean-out has a cost, but so does waiting",
        body:
          "A direct buyer will account for labor, dumpsters, donation runs, disposal, and time. But the seller should compare that against the cost of doing it alone, delaying the sale, and possibly still needing repairs before listing.",
        bullets: [
          "Dumpster, labor, hauling, and disposal cost",
          "Utilities, insurance, taxes, and lawn care while cleaning",
          "Time spent sorting belongings and coordinating helpers",
          "Whether the clean-out will actually raise the final net",
        ],
      },
      {
        eyebrow: "Respectful process",
        title: "Keep what matters and leave what does not",
        body:
          "A practical as-is sale does not mean losing control. The seller can remove personal, private, and sentimental items first, then discuss what can remain after closing as part of the written offer.",
      },
    ],
    comparison: {
      heading: "Clean out first vs sell with contents",
      intro:
        "The best choice depends on the value of the items, family bandwidth, timing, and whether a cleaner house will really improve the seller's net.",
      items: [
        {
          title: "Clean out first",
          body:
            "May fit when the items have clear value, the seller has local help, and the house is otherwise ready enough to list or show.",
        },
        {
          title: "Sell with contents",
          body:
            "May fit when the clean-out is too large, the seller is out of town, the house also needs repairs, or family coordination is slowing everything down.",
        },
        {
          title: "Compare both",
          body:
            "A clean-out quote and an as-is offer help show whether emptying the house is worth the cost, time, and stress.",
        },
      ],
    },
    checklist: {
      heading: "Helpful details for a clean-out review",
      items: [
        "Photos or video of main rooms, basement, garage, attic, and yard",
        "Whether anything valuable, private, or sentimental still needs removed",
        "Whether the house is inherited, vacant, tenant-left, or owner-occupied",
        "Known repairs, code notices, utilities, water damage, or access issues",
        "Mortgage payoff, taxes, insurance, and timeline pressure if known",
      ],
    },
    storySlug: "inherited-original-condition-house",
    decisionVariant: "estate",
    offerBlock: {
      badge: "Clean-out included",
      title: "Want an offer before cleaning everything out?",
      body:
        "Send the address and describe what is inside. ACE can review a clean-out-inclusive as-is option so you can compare it against emptying the house first.",
      points: [
        "No full clean-out required to start",
        "Belongings, furniture, garage, and basement items reviewed",
        "Repairs and contents can be discussed together",
        "Written closing path through title",
      ],
      formHeading: "Review my clean-out situation",
      defaultSituation: "clean-out needed",
    },
    faqs: [
      {
        question: "Can I sell a house full of belongings in Kansas City?",
        answer:
          "Yes. Many as-is sales include furniture, garage items, basement storage, tools, debris, or inherited contents. The buyer should explain clean-out responsibility in writing.",
      },
      {
        question: "Will leaving everything lower the offer?",
        answer:
          "Usually the buyer accounts for clean-out cost, labor, dumpsters, disposal, and time. It can still make sense if cleaning everything out would delay the sale or cost more than it helps.",
      },
      {
        question: "What should I remove before selling?",
        answer:
          "Remove valuables, legal documents, financial records, medications, firearms, jewelry, family photos, keepsakes, and anything private or sentimental.",
      },
      {
        question: "Can ACE help with an inherited house full of stuff?",
        answer:
          "Yes. Inherited houses often need time for family keepsakes and personal items. ACE can review what can stay, what should be removed, and how clean-out affects the as-is offer.",
      },
    ],
  },
  {
    slug: "sell-fire-damaged-house-kansas-city",
    title: "Sell Fire Damaged House Kansas City | ACE",
    description:
      "Kansas City guide to selling a fire-damaged house with smoke damage, insurance claims, code issues, repairs, and as-is offer options.",
    category: "Repairs",
    badge: "Fire damage",
    headline: "Sell a Fire-Damaged House in Kansas City",
    intro:
      "Fire damage can make a normal sale feel overwhelming. Smoke odor, water from firefighting, boarded windows, electrical concerns, insurance claims, and city code questions can all slow a traditional listing. ACE can review the property as-is before you spend money on cleanup or repairs.",
    primaryCta: {
      label: "Review fire damage options",
      href: "#sell-fire-damaged-house-kansas-city-form",
    },
    secondaryCta: {
      label: "Compare repairs vs as-is",
      href: "/resources/major-repairs-vs-selling-as-is-kansas-city/",
    },
    quickAnswer: {
      title: "You can ask for an as-is review before repairing fire damage",
      body:
        "A fire-damaged house may still be sellable as-is. The best path depends on insurance status, repair scope, safety concerns, whether the house is vacant, city requirements, payoff, taxes, and how quickly the seller needs a clean next step.",
      bullets: [
        "Smoke, soot, water, and boarded openings can be reviewed",
        "Open or denied insurance claims can be discussed",
        "Code, safety, and utility issues can affect timing",
        "A direct offer gives you a comparison before repairs",
      ],
    },
    sections: [
      {
        eyebrow: "Scope",
        title: "Fire damage is rarely just one repair item",
        body:
          "Even a contained fire can create smoke, odor, electrical, drywall, flooring, roof, window, plumbing, and water concerns. That is why sellers should compare the full project, not just the first contractor estimate.",
        bullets: [
          "Smoke odor, soot, and interior cleanup",
          "Water damage from fire response",
          "Electrical, HVAC, roof, or structural concerns",
          "Board-up, security, and vacant-house risk",
        ],
      },
      {
        eyebrow: "Insurance",
        title: "Insurance may help, but the claim can control the timeline",
        body:
          "Some sellers have an active claim, some have a denial, and some are unsure whether coverage applies. Claim documents, deductibles, repair scopes, and unfinished work should be reviewed before deciding whether to repair, list, or sell as-is.",
        bullets: [
          "Claim number, adjuster scope, and payment status",
          "Deductible, depreciation, or supplement questions",
          "Whether repairs have started or stalled",
          "Title, payoff, and seller net after claim questions",
        ],
      },
      {
        eyebrow: "As-is path",
        title: "Selling as-is may be cleaner when the project keeps growing",
        body:
          "If the house is vacant, boarded, unsafe to show, full of belongings, or tied to code notices, repairing first may become a larger commitment than the seller wants. A direct sale can move repair responsibility to the buyer after closing.",
      },
    ],
    comparison: {
      heading: "Repair fire damage vs selling as-is",
      intro:
        "Both options can make sense. The key is comparing real cost, time, risk, and seller net instead of guessing.",
      items: [
        {
          title: "Repair first",
          body:
            "May fit when insurance is paying, the scope is clear, the seller can manage contractors, and the finished house is likely to sell for enough to justify the work.",
        },
        {
          title: "Sell as-is",
          body:
            "May fit when the claim is uncertain, the house is vacant or unsafe to show, repairs are extensive, or the seller wants a simpler closing path.",
        },
        {
          title: "Compare both",
          body:
            "An as-is offer beside the insurance scope and repair estimates gives the seller a practical decision point.",
        },
      ],
    },
    checklist: {
      heading: "Helpful details for a fire damage review",
      items: [
        "Photos or video of damaged rooms, exterior, roof, windows, and utilities",
        "Insurance claim documents, adjuster scope, or denial if available",
        "Any board-up, code, fire department, or city notice documents",
        "Whether utilities are on and whether the house is occupied or vacant",
        "Mortgage payoff, taxes, insurance, and timeline pressure if known",
      ],
    },
    storySlug: "inherited-original-condition-house",
    decisionVariant: "repairs",
    offerBlock: {
      badge: "Fire damage review",
      title: "Want the fire damage reviewed before you repair it?",
      body:
        "Send the address and what happened. ACE can compare an as-is option against insurance timing, cleanup, repairs, and listing so you can decide with clearer numbers.",
      points: [
        "No cleanup required to start",
        "Smoke, water, and repair scope reviewed",
        "Insurance and code details can be included",
        "Closing through title with payoff review",
      ],
      formHeading: "Review my fire-damaged house",
      defaultSituation: "needs repairs",
    },
    faqs: [
      {
        question: "Can I sell a fire-damaged house in Kansas City?",
        answer:
          "Yes. A fire-damaged house may be sold as-is if the buyer understands the condition and title can close. Smoke, water, board-up, code, and insurance details should be reviewed early.",
      },
      {
        question: "Do I need to finish the insurance claim before asking for an offer?",
        answer:
          "No. If you have claim documents, they help. If the claim is still open or uncertain, an as-is offer can give you another option to compare.",
      },
      {
        question: "Will fire damage stop a normal buyer from getting financing?",
        answer:
          "It can. Safety, habitability, appraisal, and insurance concerns may make traditional financing harder. That is one reason sellers compare an as-is direct sale before repairing.",
      },
      {
        question: "Can ACE buy a boarded or vacant fire-damaged house?",
        answer:
          "Yes. ACE can review boarded, vacant, inherited, or repair-heavy properties and explain whether a direct as-is option fits the situation.",
      },
    ],
  },
];

export const longTailResourceCards = longTailResourcePages.map((page) => ({
  title: page.headline,
  description: page.description,
  href: `/resources/${page.slug}/`,
  category: page.category,
}));

export function getLongTailResource(slug: string): LongTailResourcePage | undefined {
  return longTailResourcePages.find((page) => page.slug === slug);
}
