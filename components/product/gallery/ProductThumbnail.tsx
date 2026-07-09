import Image from "next/image";

type ProductThumbnailProps = {
  images: string[];
  activeImage: string;
  onSelect: (image: string) => void;
};

export default function ProductThumbnail({
  images,
  activeImage,
  onSelect,
}: ProductThumbnailProps) {
  return (
    <div className="flex flex-col gap-4">

      {images.map((image) => (

        <button
  key={image}
  type="button"
  aria-label="Select product image"
  onClick={() => onSelect(image)}
  className={`relative aspect-[3/4] overflow-hidden rounded-sm border transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
    activeImage === image
      ? "border-black ring-1 ring-black"
      : "border-neutral-200 hover:border-neutral-500"
  }`}
>

          <Image
  src={image}
  alt=""
  fill
  sizes="90px"
  className={`object-cover transition-opacity duration-300 ${
    activeImage === image
      ? "opacity-100"
      : "opacity-70 hover:opacity-100"
  }`}
/>

        </button>

      ))}

    </div>
  );
}