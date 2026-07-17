type Props = {
  ratings: number[];
};

export default function RatingBreakdown({
  ratings,
}: Props) {
  const total = ratings.length;

  const count = (star: number) =>
    ratings.filter((rating) => rating === star).length;

  return (
    <div className="mt-8 space-y-3">

      {[5, 4, 3, 2, 1].map((star) => {
        const value = count(star);

        const width =
          total === 0
            ? 0
            : (value / total) * 100;

        return (
          <div
            key={star}
            className="flex items-center gap-3"
          >
            <span className="w-8 text-sm">
              {star} ★
            </span>

            <div className="h-2 flex-1 rounded-full bg-neutral-200">

              <div
                className="h-2 rounded-full bg-black transition-all"
                style={{
                  width: `${width}%`,
                }}
              />

            </div>

            <span className="w-6 text-right text-sm text-neutral-500">
              {value}
            </span>
          </div>
        );
      })}

    </div>
  );
}