export default function NewsletterBanner() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">

      <div className="mx-auto max-w-5xl px-6 py-24 text-center">

        <span
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-neutral-500
          "
        >
          Newsletter
        </span>

        <h2 className="mt-6 text-4xl font-semibold">
          Stay Inspired
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-neutral-600
            leading-8
          "
        >
          Receive our latest journal stories,
          styling inspiration,
          and exclusive collection launches.
        </p>

        <form
          className="
            mx-auto
            mt-10
            flex
            max-w-xl
            flex-col
            gap-4
            md:flex-row
          "
        >

          <input
            type="email"
            placeholder="Email address"
            className="
              h-14
              flex-1
              rounded-full
              border
              border-neutral-300
              bg-white
              px-6
              outline-none
              focus:border-black
            "
          />

          <button
            className="
              h-14
              rounded-full
              bg-black
              px-10
              text-white
              transition
              hover:bg-neutral-800
            "
          >
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}