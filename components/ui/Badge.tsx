type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  const text = String(children).toUpperCase();

  const variants: Record<string, string> = {
    "NEW ARRIVAL":
      "bg-black text-white",

    "BEST SELLER":
      "bg-amber-600 text-white",

    LIMITED:
      "bg-red-700 text-white",

    EXCLUSIVE:
      "bg-emerald-700 text-white",

    SIGNATURE:
      "bg-neutral-900 text-white",

    RESTOCKED:
      "bg-sky-700 text-white",

    "ONLINE ONLY":
      "bg-stone-700 text-white",

    "COMING SOON":
      "bg-neutral-300 text-neutral-900",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3.5
        py-1.5
        text-[10px]
        font-medium
        uppercase
        tracking-[0.22em]
        whitespace-nowrap
        ${variants[text] ?? "bg-black text-white"}
      `}
    >
      {children}
    </span>
  );
}