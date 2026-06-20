export type SellerStory = {
  slug: string;
  title: string;
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
    slug: "river-market-condo-payment-takeover",
    title: "River Market Condo With a Payment-Takeover Structure",
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
    eyebrow: "Inherited as-is property",
    location: "Kansas City metro",
    summary:
      "A family inherited a house after the parents passed away. The home was dated, the yard needed work, and the heirs did not want to remodel or manage a long repair process.",
    challenge:
      "The property had original finishes, deferred exterior work, and overgrown trees. The family wanted a simple path without coordinating contractors, clean-out, staging, or a public listing.",
    approach: [
      "Looked at the home as-is instead of asking the family to make repairs first.",
      "Discussed clean-out, exterior work, and repair costs as part of the offer math.",
      "Helped the sellers compare certainty and simplicity against a longer retail listing process.",
      "Kept the conversation focused on net proceeds and the family's timeline.",
    ],
    outcome:
      "The family had a clearer path to sell without remodeling the house or taking on the full burden of preparing it for the open market.",
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
