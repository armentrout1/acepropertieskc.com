export type SellerReview = {
  id: string;
  reviewer: string;
  location: string;
  situation: string;
  text: string;
  sourceLabel?: string;
  sourceUrl?: string;
  permissionStatus: "approved" | "pending" | "needs_permission";
  visible: boolean;
};

export const sellerReviews: SellerReview[] = [
  {
    id: "google-creative-financing-2024",
    reviewer: "Melissa H.",
    location: "Google review",
    situation: "Creative financing after relocation",
    text:
      "ACE Property Solutions came to the rescue... allowing us to receive some cash upfront, monthly payments, and still retain equity in the house.",
    sourceLabel: "Read on Google",
    sourceUrl: "https://share.google/TOdN8UQfdu6N7gW5d",
    permissionStatus: "approved",
    visible: true,
  },
];

export const approvedSellerReviews = sellerReviews.filter(
  (review) => review.visible && review.permissionStatus === "approved" && review.text.trim().length > 0,
);

export const reviewCollectionFields = [
  "Reviewer first name or initials",
  "City/state or general location",
  "Seller situation",
  "Review text",
  "Source link",
  "Permission status",
  "Google review posted",
  "Website testimonial approved",
];
