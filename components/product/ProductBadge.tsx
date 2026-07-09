type Props = {
  badge?: string;
};

export default function ProductBadge({ badge }: Props) {
  if (!badge) return null;

  return (
    <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
      {badge}
    </span>
  );
}