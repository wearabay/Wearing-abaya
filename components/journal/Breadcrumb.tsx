import Link from "next/link";

type Props = {
  title: string;
};

export default function Breadcrumb({ title }: Props) {
  return (
    <nav className="mb-8 text-sm text-neutral-500">
      <Link href="/" className="hover:text-black">
        Home
      </Link>

      <span className="mx-2">/</span>

      <Link href="/journal" className="hover:text-black">
        Journal
      </Link>

      <span className="mx-2">/</span>

      <span className="text-black">{title}</span>
    </nav>
  );
}