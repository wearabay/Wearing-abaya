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
      className={align === "center" ? "text-center" : "text-left"}
    >
      {eyebrow && (
        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.30em]
            text-neutral-700

            lg:text-sm
            lg:tracking-[0.35em]
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          mt-4
          text-3xl
          font-normal
          leading-tight
          text-neutral-700

          sm:text-4xl
          lg:text-5xl
          lg:font-light
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-8
            text-neutral-600
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}