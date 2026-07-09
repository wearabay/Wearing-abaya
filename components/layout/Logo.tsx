import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none"
    >
      <span className="text-2xl font-semibold tracking-[0.15em]">
        WEARING
      </span>

      <span className="text-xs uppercase tracking-[0.6em]">
        ABAYA
      </span>
    </Link>
  );
}