import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "inline-flex h-14 items-center justify-center rounded-full bg-black px-10 text-xs font-medium uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      : variant === "outline"
      ? "inline-flex h-14 items-center justify-center rounded-full border border-black px-10 text-xs font-medium uppercase tracking-[0.28em] transition-all duration-300 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      : "inline-flex h-14 items-center justify-center rounded-full px-10 text-xs font-medium uppercase tracking-[0.28em] transition-all duration-300 hover:text-[#B99143] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";

  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";
  
  const widthClass = fullWidth ? "w-full" : "";

  if (href) {
    if (external) {
      return (
        <a
          href={disabled ? undefined : href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${className} ${disabledClass} ${widthClass}`}
          aria-disabled={disabled}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={disabled ? "#" : href}
        className={`${className} ${disabledClass} ${widthClass}`}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${className} ${disabledClass} ${widthClass}`}
    >
      {children}
    </button>
  );
}