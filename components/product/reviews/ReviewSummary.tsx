import RatingStars from "./RatingStars";

type Props = {
  rating: number;
  total: number;
};

export default function ReviewSummary({
  rating,
  total,
}: Props) {
  return (
    <div className="border-b border-neutral-200 pb-8">

      <h2 className="text-3xl font-light">
        Customer Reviews
      </h2>

      <div className="mt-5 flex items-center gap-4">

        <RatingStars rating={rating} />

        <div>

          <p className="text-lg font-medium">
            {rating.toFixed(1)} out of 5
          </p>

          <p className="text-sm text-neutral-500">
            Based on {total} reviews
          </p>

        </div>

      </div>

    </div>
  );
}