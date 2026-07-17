export default function ImageSkeleton() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-sm bg-neutral-100">

      <div
        className="
          absolute
          inset-0
          -translate-x-full
          animate-[shimmer_1.5s_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/70
          to-transparent
        "
      />

    </div>
  );
}