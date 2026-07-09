"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarIcons from "./NavbarIcons";

import CartDrawer from "@/components/cart/CartDrawer";
import SearchDrawer from "@/components/search/SearchDrawer";
import { openCart } from "@/lib/cart-drawer";


export default function Navbar() {

  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>

      <header className="sticky top-0 z-50 border-b bg-white text-neutral-900">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Logo />

          <NavbarMenu />

          <NavbarIcons
  onSearchClick={() => setSearchOpen(true)}
  onCartClick={() => openCart()}
/>
        </div>

      </header>

      <CartDrawer/>

      <SearchDrawer
  open={searchOpen}
  onClose={() => setSearchOpen(false)}
/>

    </>
  );
}