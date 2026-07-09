type ProductSpecificationProps = {
  specifications: {
    label: string;
    value: string;
  }[];
};

export default function ProductSpecification({
  specifications,
}: ProductSpecificationProps) {
  return (
    <div className="space-y-4">

      {specifications.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between border-b border-stone-200 pb-3"
        >
          <span className="text-neutral-500">
            {item.label}
          </span>

          <span className="font-medium text-neutral-900">
            {item.value}
          </span>
        </div>
      ))}

    </div>
  );
}