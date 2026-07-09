"use client";

import Link from "next/link";

export default function AccountOverview() {

  return (

    <section>

      <div
        className="
          rounded-3xl
          bg-stone-100
          p-10
        "
      >

        <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">

          Wearing Abaya

        </p>

        <h1 className="mt-3 text-4xl font-light">

          Welcome back.

        </h1>

        <p className="mt-4 max-w-xl leading-7 text-neutral-600">

          Access your orders, wishlist and saved
          addresses in one elegant place.

        </p>

        <Link
          href="/shop"
          className="
            mt-8
            inline-flex
            rounded-full
            bg-black
            px-7
            py-3
            text-xs
            uppercase
            tracking-[0.22em]
            text-white
          "
        >
          Continue Shopping
        </Link>

      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        <StatCard
          title="Orders"
          value="0"
        />

        <StatCard
          title="Wishlist"
          value="0"
        />

        <StatCard
          title="Addresses"
          value="0"
        />

      </div>

    </section>

  );

}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (

    <div
      className="
        rounded-3xl
        border
        border-stone-200
        p-8
      "
    >

      <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">

        {title}

      </p>

      <h2 className="mt-5 text-5xl font-light">

        {value}

      </h2>

    </div>

  );

}