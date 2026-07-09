type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`${
        align === "center" ? "text-center mx-auto" : "text-left"
      } max-w-3xl`}
    >
      {eyebrow && (
        <p
          className="
            text-[11px]
            font-medium
            uppercase
            tracking-[0.38em]
            text-neutral-500
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          mt-5
          text-4xl
          font-light
          leading-tight
          tracking-[0.02em]
          text-neutral-900
          md:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-base
            leading-8
            text-neutral-500
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}