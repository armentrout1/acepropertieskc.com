export type SellerStory = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  location: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  privacyNote: string;
  tags: string[];
  relatedLinks: Array<{
    label: string;
    href: string;
  }>;
};

export const sellerStories: SellerStory[] = [
  {
    slug: "rental-house-cash-purchase",
    title: "Rental House Sold Directly for Cash",
    seoTitle: "Rental House Cash Purchase Story | ACE Properties KC",
    seoDescription:
      "See how ACE Properties KC helps landlords sell rental houses directly for cash without repairing or preparing the property for a public listing.",
    eyebrow: "Direct cash purchase",
    location: "Kansas City metro",
    summary:
      "A rental-house owner wanted a simple sale without making improvements, coordinating a public listing, or turning the property into another project. ACE reviewed the house as-is and purchased directly for cash.",
    challenge:
      "The seller had been renting the property and did not want to put more time or money into repairs, showings, clean-up, or a long retail listing process.",
    approach: [
      "Reviewed the rental-house condition, tenant or occupancy considerations, and the seller's preferred timeline.",
      "Made the conversation about direct cash purchase terms instead of asking the seller to prepare the house for the market.",
      "Accounted for as-is condition, timing, and closing needs in the offer math.",
      "Worked toward a direct close without the seller needing to find a retail buyer or investor buyer.",
    ],
    outcome:
      "The seller was able to move on from the rental property with a direct cash sale and without turning the property into another repair project.",
    privacyNote:
      "Details are summarized for privacy. This story reflects the type of rental-house cash purchase ACE has handled since 2016.",
    tags: ["Rental house", "Cash purchase", "As-is sale"],
    relatedLinks: [
      { label: "Sell a house with tenants", href: "/resources/sell-house-with-tenants-kansas-city/" },
      { label: "Sell as-is in Kansas City", href: "/resources/sell-house-as-is-kansas-city/" },
      { label: "Direct buyer vs wholesaler", href: "/direct-buyer-vs-wholesaler/" },
    ],
  },
  {
    slug: "subject-to-payment-help-2017",
    title: "Payment-Takeover Help Dating Back to 2017",
    seoTitle: "2017 Payment Takeover Help Story | ACE Properties KC",
    seoDescription:
      "See how ACE has experience reviewing creative payment-takeover paths for sellers who need relief from monthly house payments.",
    eyebrow: "Creative payment help",
    location: "Kansas City area",
    summary:
      "A homeowner needed help with a house payment situation where a standard sale was not the only path to review. ACE helped structure a creative payment solution so the seller could move forward.",
    challenge:
      "The monthly payment and timing were the real pressure points. The seller needed a practical path that addressed the payment burden instead of only talking about a one-time cash price.",
    approach: [
      "Reviewed the house, loan pressure, seller timeline, and what outcome would actually solve the problem.",
      "Compared a straightforward sale against a creative payment-takeover structure.",
      "Focused on clear expectations, payment responsibility, and written terms before moving forward.",
      "Kept the seller's practical relief at the center of the conversation.",
    ],
    outcome:
      "The seller had a path that addressed the payment problem directly and gave them a way to move forward without being stuck in a one-option conversation.",
    privacyNote:
      "Details are intentionally broad. This story should be expanded only with seller permission and any legally appropriate documentation.",
    tags: ["Subject-to", "Payment takeover", "Creative options"],
    relatedLinks: [
      { label: "Cash or payment takeover options", href: "/options/" },
      { label: "Subject-to guide", href: "/resources/subject-to-real-estate-kansas-city/" },
      { label: "Behind on mortgage options", href: "/resources/behind-on-mortgage-options-kansas-city/" },
    ],
  },
  {
    slug: "river-market-condo-payment-takeover",
    title: "River Market Condo With a Payment-Takeover Structure",
    seoTitle: "Payment Takeover Seller Story | ACE Properties KC",
    seoDescription:
      "See how ACE helped a River Market condo seller compare a creative payment-takeover structure when a standard sale did not fit.",
    eyebrow: "Creative sale structure",
    location: "River Market / Downtown Kansas City",
    summary:
      "A condo owner needed a way out when a normal sale was not solving the problem quickly enough. ACE reviewed a creative structure that let the seller move forward while keeping the deal documented and clear.",
    challenge:
      "The seller needed relief, but a simple listing or standard cash offer did not fully fit the situation. Timing, remaining payments, and seller protection all mattered.",
    approach: [
      "Reviewed the property, payment situation, timeline, and what the seller needed to receive.",
      "Compared a direct sale against a creative payment-takeover structure.",
      "Kept the seller structurally protected inside the agreement while ACE handled the ongoing plan.",
      "Paid the seller according to the agreement after the structure had time to work.",
    ],
    outcome:
      "The seller was able to move forward, receive money from the property, and avoid staying stuck in a sale path that was not working.",
    privacyNote:
      "Details are summarized for privacy. This story is intended to show the type of problem-solving conversation ACE can have, not to describe a public transaction record.",
    tags: ["Payment takeover", "Condo", "Creative options"],
    relatedLinks: [
      { label: "Cash vs creative options", href: "/options/" },
      { label: "Subject-to explained", href: "/resources/subject-to-real-estate-kansas-city/" },
      { label: "Behind on mortgage options", href: "/resources/behind-on-mortgage-options-kansas-city/" },
    ],
  },
  {
    slug: "inherited-original-condition-house",
    title: "Inherited House in Original Condition",
    seoTitle: "Inherited As-Is House Story | ACE Properties KC",
    seoDescription:
      "See how ACE helps heirs compare a simple as-is sale for an inherited Kansas City house needing repairs, clean-out, or yard work.",
    eyebrow: "Inherited as-is property",
    location: "Kansas City metro",
    summary:
      "A family inherited a house after the parents passed away. The home was dated, the yard needed work, and the heirs did not want to remodel or manage a long repair process. ACE reviewed the property as-is and helped create a direct purchase path.",
    challenge:
      "The property had original finishes, deferred exterior work, and overgrown trees. The family wanted a simple path without coordinating contractors, clean-out, staging, or a public listing.",
    approach: [
      "Looked at the home as-is instead of asking the family to make repairs first.",
      "Discussed clean-out, exterior work, and repair costs as part of the offer math.",
      "Helped the sellers compare a direct purchase against a longer retail listing process.",
      "Kept the conversation focused on net proceeds and the family's timeline.",
    ],
    outcome:
      "The family had a clearer path to sell directly without remodeling the house or taking on the full burden of preparing it for the open market.",
    privacyNote:
      "This is a privacy-safe story draft based on a common inherited-house situation ACE has handled. Exact identifying details should be added only with permission.",
    tags: ["Inherited house", "As-is sale", "Needs repairs"],
    relatedLinks: [
      { label: "Inherited house options", href: "/solutions/inherited-house/" },
      { label: "Inherited house checklist", href: "/resources/kansas-city-inherited-house-checklist/" },
      { label: "Major repairs vs selling as-is", href: "/resources/major-repairs-vs-selling-as-is-kansas-city/" },
    ],
  },
  {
    slug: "out-of-state-creative-solution",
    title: "Helping an Owner Who Needed Someone Else to Carry the Payments",
    seoTitle: "Creative Payment Help Story | ACE Properties KC",
    seoDescription:
      "See how ACE reviewed a creative payment path for an owner who needed relief from carrying a house she could not stay in.",
    eyebrow: "Out-of-state creative help",
    location: "Outside Missouri",
    summary:
      "A homeowner did not want to simply walk away from the property, but could not stay there and needed help with the ongoing payment burden.",
    challenge:
      "The owner needed a practical solution that respected the fact that she did not want a rushed conventional sale, while still addressing the payments that could not continue unchanged.",
    approach: [
      "Talked through what the owner wanted to keep, what she needed relief from, and what timing mattered.",
      "Reviewed whether a creative structure could solve the payment issue better than a standard sale.",
      "Focused on clear terms, expectations, and communication before moving forward.",
    ],
    outcome:
      "The owner got a more flexible path than a one-size-fits-all sale, with the payment problem addressed directly.",
    privacyNote:
      "Details are intentionally broad because the situation involved a personal relationship and an out-of-state property.",
    tags: ["Creative options", "Payment relief", "Flexible sale"],
    relatedLinks: [
      { label: "Creative home buyer options", href: "/options/" },
      { label: "Payment takeover questions", href: "/resources/subject-to-real-estate-kansas-city/" },
      { label: "What happens after contact", href: "/resources/what-happens-after-contact-ace-properties-kc/" },
    ],
  },
];

export function getSellerStory(slug: string): SellerStory | undefined {
  return sellerStories.find((story) => story.slug === slug);
}
