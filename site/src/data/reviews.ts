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

export const sellerReviews: SellerReview[] = [];

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
