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
  deepDiveHeading?: string;
  deepDiveIntro?: string;
  deepDiveItems?: Array<{
    title: string;
    body: string;
  }>;
  localProofHeading?: string;
  localProofIntro?: string;
  localProofItems?: string[];
  localGuideLinks?: Array<{
    label: string;
    href: string;
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
    lead: "When timing matters, start with the address. ACE Properties KC can review the property, repairs, title questions, and your deadline so you can see a practical path without repairs, showings, or a long listing process.",
    formHeading: "Start a fast-sale review",
    formSubheading:
      "Share the address and one way to reach you. We will review what can realistically happen quickly.",
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
    lead: "ACE Properties KC buys houses across the Kansas City metro when sellers need a direct as-is path. Start with the address and one way to reach you, then we can review cash, timing, repairs, and flexible options.",
    formHeading: "See if ACE can buy your house",
    formSubheading:
      "Send the address and best contact. We will review the property and your timeline.",
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
    lead: "A cash buyer can make sense when you want fewer delays, fewer contingencies, and an as-is closing. ACE Properties KC can review the property and explain how a cash offer compares with other options.",
    formHeading: "Request a cash offer review",
    formSubheading:
      "Start with the address and one way to reach you. We will review the basics first.",
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
    title: "Sell House As-Is Kansas City | No Repairs or Clean-Out",
    description:
      "Sell a Kansas City house as-is. Compare a local cash offer before repairs, clean-out, code issues, tenants, inherited property, or listing.",
    eyebrow: "Sell house as-is Kansas City",
    headline:
      "Sell Your Kansas City House As-Is Without Repairs, Clean-Out, or Showings",
    lead: "If the house needs repairs, has belongings inside, is vacant, has tenants, carries code issues, or simply feels like too much to prepare for the market, you can start with an as-is offer review. ACE Properties KC looks at the property in its current condition and explains the cash, timing, and flexible options before you decide.",
    formHeading: "Start an as-is offer review",
    formSubheading:
      "Share the address and one way to reach you. Repairs, clean-out, tenants, title, and timing can be discussed after we know the property.",
    buttonLabel: "Compare as-is options",
    defaultSituation: "repairs",
    proofPoints: [
      "No repairs required before asking",
      "Clean-out and belongings can be reviewed",
      "Private sale path without public showings",
      "Cash and flexible terms compared when needed",
    ],
    situationHeading: "As-is means the condition becomes part of the plan",
    situationBody:
      "A useful as-is offer should account for repairs, contents, code items, old systems, title questions, occupancy, and the real cost of waiting. You should not have to guess whether contractors, cleaning, listing prep, or another month of carrying costs are worth it.",
    situationBullets: [
      "Roof, foundation, HVAC, sewer, plumbing, electrical, or water-damage concerns",
      "Furniture, tools, trash, estate belongings, garage items, or full clean-out needs",
      "Vacant houses, inherited homes, rental properties, or tenant-occupied houses",
      "Code notices, mowing issues, utilities, back taxes, liens, or title questions",
    ],
    comparisonHeading: "Compare selling as-is against repairing first",
    comparisonIntro:
      "The best choice depends on equity, repair cost, timeline, buyer demand, title, and how much work you want to carry before closing.",
    comparisonItems: [
      {
        title: "Sell as-is directly",
        body: "Best when you want a private sale, clear closing path, fewer inspections, no repair project, and no need to clean everything out before an offer review.",
      },
      {
        title: "Repair then list",
        body: "May be better when the house is easy to show, repairs are manageable, the title is simple, and the extra retail price is worth the time and risk.",
      },
      {
        title: "List as-is",
        body: "Can work with the right agent and buyer pool, but public showings, inspection renegotiation, buyer financing, and repair credits may still come up.",
      },
    ],
    deepDiveHeading: "What an as-is Kansas City offer should actually explain",
    deepDiveIntro:
      "A real as-is conversation is not just a low number. It should explain what the buyer is taking on, what could delay closing, and how the net compares with a normal listing.",
    deepDiveItems: [
      {
        title: "Repair assumptions",
        body: "Roof age, foundation movement, sewer lines, HVAC, electrical, plumbing, water damage, flooring, paint, kitchens, bathrooms, decks, and clean-out all affect the offer math.",
      },
      {
        title: "Seller net",
        body: "Compare the offer against commissions, repair checks, buyer concessions, seller-paid closing costs, utilities, insurance, taxes, lawn care, and another month of ownership.",
      },
      {
        title: "Closing certainty",
        body: "The buyer should explain title timing, payoffs, liens, estate documents, tenant possession, clean-out responsibility, proof of funds, and whether they are the direct buyer.",
      },
    ],
    localProofHeading: "Kansas City as-is sale situations we review",
    localProofIntro:
      "The location matters, but the real decision usually comes down to condition, title, occupancy, and timeline pressure. These are the details we look at first.",
    localProofItems: [
      "Older Kansas City houses with original finishes, old systems, roof issues, foundation concerns, or unfinished projects",
      "Inherited houses where heirs need one written number, clean-out help, title clarity, and a simple decision path",
      "Vacant houses where insurance, utilities, lawn care, break-in risk, code notices, and carrying costs keep stacking up",
      "Rental or tenant-occupied houses where showings, deposits, access, lease timing, and repairs make listing harder",
      "Code, tax, lien, or payment-pressure situations where a clean title plan matters as much as the offer price",
      "Houses that may still be good listings, where the seller wants a direct offer to compare before spending money",
    ],
    localGuideLinks: [
      {
        label: "Major repairs vs selling as-is",
        href: "/resources/major-repairs-vs-selling-as-is-kansas-city/",
        body: "Compare repair bids, delay, inspection risk, and as-is net proceeds before starting a project.",
      },
      {
        label: "House full of stuff",
        href: "/resources/sell-house-full-of-stuff-kansas-city/",
        body: "Use this when belongings, trash, garage items, furniture, or estate clean-out are blocking the sale.",
      },
      {
        label: "Vacant house carrying costs",
        href: "/resources/vacant-house-carrying-cost-calculator/",
        body: "Estimate mortgage, taxes, utilities, insurance, lawn care, security, and the monthly cost of waiting.",
      },
      {
        label: "Sell with code violations",
        href: "/resources/sell-house-with-code-violations-kansas-city/",
        body: "Review city notices, repair orders, mowing issues, dangerous building items, and as-is timing.",
      },
      {
        label: "Sell with tenants",
        href: "/resources/sell-house-with-tenants-kansas-city/",
        body: "Compare waiting for vacancy against selling with leases, deposits, access, and possession handled in writing.",
      },
      {
        label: "As-is sale net sheet",
        href: "/resources/as-is-sale-net-sheet-template/",
        body: "Put cash offer, listing costs, repairs, concessions, and holding time into one comparison.",
      },
    ],
    storySlug: "inherited-original-condition-house",
    relatedGuide: {
      label: "Read the as-is guide",
      href: "/resources/sell-house-as-is-kansas-city/",
    },
    faqs: [
      {
        question:
          "Can I sell a Kansas City house as-is with belongings still inside?",
        answer:
          "Yes. Contents, furniture, tools, debris, garage items, and clean-out can be discussed as part of the offer. You do not need to empty the house before asking for a review.",
      },
      {
        question: "Do I need to repair the house before requesting an offer?",
        answer:
          "No. ACE reviews houses in their current condition, including roof, foundation, HVAC, plumbing, electrical, water damage, outdated finishes, code items, and deferred maintenance.",
      },
      {
        question: "Is selling as-is always better than listing?",
        answer:
          "No. Listing may be better when the house is updated, easy to show, and you have time. Selling as-is may be better when repairs, clean-out, tenants, title, privacy, or certainty matter more.",
      },
      {
        question: "Do I still have to disclose known problems?",
        answer:
          "As-is does not mean hiding known issues. You should answer disclosure questions honestly and ask qualified legal help if you are unsure about a requirement.",
      },
      {
        question: "Can ACE buy houses with code violations or back taxes?",
        answer:
          "Often, yes. Code items, taxes, liens, payoffs, and title questions need to be reviewed before closing, but they do not automatically stop an as-is sale.",
      },
      {
        question: "How fast can an as-is sale close in Kansas City?",
        answer:
          "A cash sale can often close quickly once title, payoffs, seller authority, occupancy, and any lien or estate documents are clear. We explain the realistic timeline before you sign.",
      },
    ],
  },
  {
    slug: "behind-on-mortgage-kansas-city",
    title: "Behind on Payments Kansas City | Sell Before Deadlines",
    description:
      "Behind on house payments in Kansas City? Compare a local cash sale, payoff-at-closing, lender workout, backup offer, or payment-takeover review.",
    eyebrow: "Behind on payments Kansas City",
    headline:
      "Behind on House Payments in Kansas City? Compare Your Exit Before the Deadline Gets Tighter",
    lead: "Missed payments can turn confusing fast: lender letters, late fees, payoff numbers, tax balances, repairs, family stress, and deadlines that do not wait. ACE Properties KC can review a direct as-is sale, payoff-at-closing path, backup offer, or carefully documented payment-takeover question so you can see what may actually work.",
    formHeading: "Review my payment-pressure options",
    formSubheading:
      "Send the address, best contact, and any deadline or lender notice you know about. Estimates are okay.",
    buttonLabel: "Compare my options",
    defaultSituation: "behind",
    proofPoints: [
      "Private review before the next payment or lender deadline",
      "Cash sale, payoff-at-closing, and backup paths compared",
      "Arrears, taxes, liens, repairs, and title timing organized early",
      "Payment-takeover questions reviewed carefully when relevant",
    ],
    situationHeading:
      "Know the realistic options before late fees, repairs, and deadlines stack up",
    situationBody:
      "When payments are late, the best next step depends on lender status, arrears, equity, payoff, repairs, title, tax balances, and whether your real goal is to keep the house or sell it cleanly.",
    situationBullets: [
      "One or more missed mortgage payments and growing late fees",
      "Foreclosure notices, reinstatement letters, or lender deadlines",
      "A refinance, modification, or listing plan that may not close in time",
      "A repair-heavy house where more monthly payments reduce your net",
      "Back taxes, HOA balances, liens, utilities, or insurance pressure",
    ],
    comparisonHeading: "Behind-on-payments paths to compare",
    comparisonIntro:
      "You should compare lender help, selling as-is, payoff-at-closing, payment-takeover review, and backup plans before choosing.",
    comparisonItems: [
      {
        title: "Lender workout",
        body: "May fit when you want to keep the house and can qualify for repayment, forbearance, reinstatement, or modification before the deadline.",
      },
      {
        title: "Direct cash sale",
        body: "May fit when equity and title allow the mortgage, arrears, taxes, and recorded liens to be paid through closing without repairs or showings.",
      },
      {
        title: "Payment takeover review",
        body: "May fit only in careful situations where the existing loan staying in place is worth comparing and the seller understands the credit, legal, insurance, and payment-tracking risk.",
      },
    ],
    deepDiveHeading: "What matters most when payments are already late",
    deepDiveIntro:
      "A high offer number is not enough if it cannot close before the pressure point. The decision should be built around payoff math, deadline risk, and what the seller actually needs after closing.",
    deepDiveItems: [
      {
        title: "Payoff and arrears math",
        body: "The real question is not just what the house is worth. It is whether sale proceeds can cover the mortgage payoff, late payments, taxes, liens, closing costs, and still leave enough for the seller's next step.",
      },
      {
        title: "Deadline certainty",
        body: "If there is a court date, sale date, reinstatement deadline, or lender checkpoint, the offer needs to be judged by whether title can close in time. Waiting for a retail buyer can be risky when every week matters.",
      },
      {
        title: "Repair and showing burden",
        body: "A house can have equity and still be hard to list if it needs roof work, foundation work, clean-out, utilities, code repairs, tenant coordination, or privacy. An as-is review shows the tradeoff before spending money you may not want to spend.",
      },
    ],
    localProofHeading: "Kansas City payment-pressure situations we can review",
    localProofIntro:
      "Behind-on-payments calls usually involve more than the loan. The house condition, county, title file, occupancy, and seller timeline all affect which option makes sense.",
    localProofItems: [
      "Jackson County, Wyandotte County, Johnson County, Clay County, and Cass County payoff or tax timing",
      "Vacant houses where mortgage, insurance, utilities, mowing, and security keep adding up",
      "Inherited houses where heirs need one written number before deciding",
      "Rental houses with tenants, damage, nonpayment, or access problems",
      "Repair-heavy houses where listing could require money before closing",
      "Sellers who want to compare a lender workout against selling before the timeline tightens",
    ],
    localGuideLinks: [
      {
        label: "Sell when behind on payments",
        href: "/resources/sell-house-behind-on-payments-kansas-city/",
        body: "A deeper guide to payoff statements, arrears, title timing, sale proceeds, and lender conversations.",
      },
      {
        label: "Mortgage options guide",
        href: "/resources/behind-on-mortgage-options-kansas-city/",
        body: "Compare lender workouts, repayment, modification, direct sale, payoff-at-closing, and payment-takeover questions.",
      },
      {
        label: "Subject-to payment takeover",
        href: "/resources/subject-to-real-estate-kansas-city/",
        body: "Understand how payment-takeover conversations differ from a normal cash sale and why seller risk must be clear.",
      },
      {
        label: "Sell as-is in Kansas City",
        href: "/sell-house-as-is-kansas-city/",
        body: "Review a no-repair, no-clean-out path when house condition is part of the payment pressure.",
      },
      {
        label: "Vacant carrying cost calculator",
        href: "/resources/vacant-house-carrying-cost-calculator/",
        body: "Estimate how much another month of mortgage, taxes, utilities, insurance, lawn care, and repairs may cost.",
      },
      {
        label: "Pre-foreclosure options",
        href: "/solutions/pre-foreclosure/",
        body: "Review what to organize quickly if lender notices or a formal foreclosure timeline has already started.",
      },
    ],
    storySlug: "out-of-state-creative-solution",
    relatedGuide: {
      label: "Read behind-on-payments guide",
      href: "/resources/sell-house-behind-on-payments-kansas-city/",
    },
    faqs: [
      {
        question: "Can ACE help if I am already behind?",
        answer:
          "ACE can review sale options, payoff-at-closing, backup plans, or payment-takeover questions. You should also stay in contact with your lender, housing counselor, attorney, or other qualified advisor.",
      },
      {
        question: "Can selling help stop a foreclosure timeline?",
        answer:
          "A sale may help if it closes before the required deadline and title can be cleared. Timing, lender status, county process, payoff numbers, and legal requirements matter.",
      },
      {
        question: "Will a payment takeover fix my credit?",
        answer:
          "No structure erases past late payments. A carefully reviewed payment plan may help avoid more missed payments, but credit questions need qualified advice and the seller should understand any ongoing loan risk.",
      },
      {
        question: "Can late payments be paid from closing?",
        answer:
          "Often, yes. In a sale, the title company usually requests payoff information and uses sale proceeds to pay the mortgage, arrears, taxes, and recorded liens before any seller net is released.",
      },
      {
        question: "Should I talk to my lender before requesting an offer?",
        answer:
          "Yes. Ask your lender about reinstatement, repayment, forbearance, modification, or payoff options. A written offer can be compared against those choices, especially if you are unsure whether you can keep the house.",
      },
      {
        question: "What if the house also needs major repairs?",
        answer:
          "That is common. ACE can review the property as-is and compare whether a direct sale may make more sense than catching up payments while also paying for repairs, clean-out, utilities, or listing prep.",
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
    lead: "Inherited houses often come with family coordination, repairs, contents, taxes, and decisions nobody planned for. ACE can review an as-is sale path and help you compare next steps before spending money on repairs.",
    formHeading: "Start an inherited-house review",
    formSubheading:
      "Share the address and one way to reach you. You do not need every document ready before starting.",
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
    lead: "If the monthly payment is the real pressure point, a simple cash offer may not be the only option to review. ACE can compare cash, payoff-at-closing, and payment-takeover structures when the numbers and risk make sense.",
    formHeading: "Compare payment options",
    formSubheading:
      "Send the address and one way to reach you. Add payment details later if you have them.",
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
