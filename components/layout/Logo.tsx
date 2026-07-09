import Link from "next/link";

type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex flex-col leading-none transition-colors duration-500 ${
        dark ? "text-neutral-900" : "text-white"
      }`}
    >
      <span className="text-2xl font-light tracking-[0.18em]">
        WEARING
      </span>

      <span className="text-[11px] uppercase tracking-[0.65em]">
        ABAYA
      </span>
    </Link>
  );
}