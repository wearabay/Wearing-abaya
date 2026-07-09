type GalleryNavigationProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export default function GalleryNavigation({
  onPrevious,
  onNext,
}: GalleryNavigationProps) {
  return (
    <>
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous image"
        className="
          absolute
          left-4
          top-1/4
          -translate-y-1/2
          z-30
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white/90
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
        "
      >
        ←
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next image"
        className="
          absolute
          right-4
          top-1/4
          -translate-y-1/2
          z-30
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white/90
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
        "
      >
        →
      </button>
    </>
  );
}