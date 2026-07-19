type RadioCardProps = {
  title: string;
  description?: string;
  price?: string;
  checked?: boolean;
  onClick?: () => void;
};

export default function RadioCard({
  title,
  description,
  price,
  checked = false,
  onClick,
}: RadioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        w-full
        items-center
        justify-between
        rounded-xl
        border
        p-5
        text-left
        transition-all
        ${
          checked
            ? "border-black bg-neutral-50"
            : "border-neutral-300 hover:border-black"
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div
          className={`
            mt-1
            h-5
            w-5
            rounded-full
            border-2
            flex
            items-center
            justify-center
            ${
              checked
                ? "border-black"
                : "border-neutral-400"
            }
          `}
        >
          {checked && (
            <div className="h-2.5 w-2.5 rounded-full bg-black" />
          )}
        </div>

        <div>
          <p className="font-medium">
            {title}
          </p>

          {description && (
            <p className="mt-1 text-sm text-neutral-500">
              {description}
            </p>
          )}
        </div>
      </div>

      {price && (
        <span className="font-medium">
          {price}
        </span>
      )}
    </button>
  );
}