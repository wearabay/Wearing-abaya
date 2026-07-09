"use client";

import Link from "next/link";

const menus = [

  {
    title: "Overview",
    href: "/account",
  },

  {
    title: "Orders",
    href: "/account/orders",
  },

  {
    title: "Wishlist",
    href: "/wishlist",
  },

  {
    title: "Addresses",
    href: "/account/addresses",
  },

  {
    title: "Profile",
    href: "/account/profile",
  },

];

export default function AccountSidebar() {

  return (

    <aside
      className="
        rounded-3xl
        border
        border-stone-200
        p-8
        h-fit
      "
    >

      <h2 className="text-2xl font-light">

        My Account

      </h2>

      <nav className="mt-10 space-y-6">

        {menus.map((menu) => (

          <Link
            key={menu.title}
            href={menu.href}
            className="
              block
              text-neutral-500
              transition
              hover:translate-x-1
              hover:text-black
            "
          >
            {menu.title}
          </Link>

        ))}

      </nav>

    </aside>

  );

}