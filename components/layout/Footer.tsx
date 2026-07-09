import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-[#FAF8F5] text-neutral-900">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-4">

        {/* Brand */}

        <div>

          <h3 className="text-2xl font-light tracking-[0.18em]">
            WEARING
          </h3>

          <p className="mt-1 text-xs uppercase tracking-[0.60em]">
            ABAYA
          </p>

          <p className="mt-8 leading-8 text-neutral-500">
            Timeless modest fashion crafted with premium fabrics,
            elegant silhouettes and refined craftsmanship.
          </p>

        </div>

        {/* Shop */}

        <div>

          <h4 className="mb-6 uppercase tracking-[0.25em] text-sm">
            Shop
          </h4>

          <ul className="space-y-4 text-neutral-500">

            <li>
              <Link href="/shop">
                All Products
              </Link>
            </li>

            <li>
              <Link href="/shop?category=abaya">
                Abaya
              </Link>
            </li>

            <li>
              <Link href="/shop?category=dress">
                Dress
              </Link>
            </li>

            <li>
              <Link href="/shop?category=mukena">
                Mukena
              </Link>
            </li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h4 className="mb-6 uppercase tracking-[0.25em] text-sm">
            Company
          </h4>

          <ul className="space-y-4 text-neutral-500">

            <li>
              <Link href="/about">
                About
              </Link>
            </li>

            <li>
              <Link href="/journal">
                Journal
              </Link>
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Social */}

        <div>

          <h4 className="mb-6 uppercase tracking-[0.25em] text-sm">
            Follow
          </h4>

          <ul className="space-y-4 text-neutral-500">

            <li>
              <a
                href="https://instagram.com/wearing.abaya"
                target="_blank"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://tiktok.com/@wearabay"
                target="_blank"
              >
                TikTok
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/"
                target="_blank"
              >
                WhatsApp
              </a>
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-500 md:flex-row">

          <p>
            © 2026 Wearing Abaya. All rights reserved.
          </p>

          <div className="flex gap-8">

            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}