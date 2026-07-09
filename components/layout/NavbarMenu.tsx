import Link from "next/link";
import { navigation } from "@/data/navigation";

type Props = {
  dark?: boolean;
};

export default function NavbarMenu({
  dark = false,
}: Props) {
  return (
    <nav className="hidden items-center gap-10 lg:flex">

      {navigation.map((item) => (

        <Link
          key={item.name}
          href={item.href}
          className={`
            relative
            text-[12px]
            uppercase
            tracking-[0.22em]
            transition-colors
            duration-300
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-px
            after:w-0
            after:bg-current
            after:transition-all
            after:duration-300
            hover:after:w-full
            ${
              dark
                ? "text-neutral-900"
                : "text-white"
            }
          `}
        >
          {item.name}
        </Link>

      ))}

    </nav>
  );
}