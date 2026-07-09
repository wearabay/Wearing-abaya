export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        <div>
          <h3 className="text-2xl tracking-[0.3em]">
            WEARING
            <br />
            ABAYA
          </h3>
        </div>

        <div>
          <h4 className="uppercase text-sm mb-4">
            Shop
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li>Abaya</li>
            <li>Dress</li>
            <li>Mukena</li>
            <li>Kids</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase text-sm mb-4">
            Company
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li>About</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase text-sm mb-4">
            Follow
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>WhatsApp</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
        © 2026 Wearing Abaya. All Rights Reserved.
      </div>
    </footer>
  );
}