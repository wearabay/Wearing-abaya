import type { Review } from "@/types/review";
import RatingStars from "./RatingStars";

type Props = {
  review: Review;
};

export default function ReviewCard({
  review,
}: Props) {
  return (
    <article className="border-b border-neutral-200 py-8">

      <RatingStars rating={review.rating} />

      <h3 className="mt-4 text-lg font-medium">
        {review.title}
      </h3>

      <p className="mt-3 leading-7 text-neutral-600">
        {review.comment}
      </p>

      <div className="mt-5 flex items-center gap-3 text-sm text-neutral-500">

        <span>{review.name}</span>

        {review.verified && (
          <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs">
            Verified Buyer
          </span>
        )}

        <span>{review.date}</span>

      </div>

    </article>
  );
}