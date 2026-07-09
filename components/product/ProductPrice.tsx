import { formatPrice } from "@/lib/currency";

type Props = {
  price: number;
};

export default function ProductPrice({
  price,
}: Props) {
  return (
    <p className="mt-2 text-neutral-500">
      {formatPrice(price)}
    </p>
  );
}