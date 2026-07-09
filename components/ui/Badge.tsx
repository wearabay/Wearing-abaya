type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="bg-black text-white px-3 py-1 text-xs tracking-wider uppercase">
      {children}
    </span>
  );
}