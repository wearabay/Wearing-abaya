const menu = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function NavbarMenu() {
  return (
    <nav className="hidden lg:flex gap-10 text-sm tracking-widest uppercase">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="hover:opacity-70 transition"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}