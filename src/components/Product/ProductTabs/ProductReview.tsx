import { Stars } from "@/components/Rating/Stars";
import { ProductWithMarkdown } from "@/graphql/products/types";

type ProductReviewProps = {
  review: ProductWithMarkdown["reviews"][number];
};

export const ProductReview = ({ review }: ProductReviewProps) => {
  return (
    <li
      key={review.id}
      className="grid grid-cols-1 gap-2 p-2 border-2 rounded-lg shadow"
    >
      <div className="font-bold">{review.name}</div>
      <div className="flex gap-2 items-center">
        <div>{review.headline}</div>
        <Stars
          displayMode="scale"
          rating={review.rating}
          className="w-4 h-4"
          interactionMode="static"
        />
      </div>
      <div className="text-sm">{review.content}</div>
    </li>
  );
};
