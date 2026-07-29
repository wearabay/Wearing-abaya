import Image from "next/image";
import Link from "next/link";

import type { JournalArticle } from "@/types/journal";

type FeaturedArticleProps = {
  article: JournalArticle;
};

export default function FeaturedArticle({
  article,
}: FeaturedArticleProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <Link
        href={`/journal/${article.slug}`}
        className="
          group
          block
          overflow-hidden
          rounded-3xl
          border
          border-neutral-200
          bg-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >

        <div className="relative aspect-[16/9] overflow-hidden">

          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

        </div>

        <div className="space-y-6 p-8">

          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">

            <span className="font-medium uppercase tracking-[0.2em]">
              {article.category}
            </span>

            <span>•</span>

            <span>{article.readTime}</span>

          </div>

          <h2
            className="
              text-3xl
              font-semibold
              leading-tight
              text-black
            "
          >
            {article.title}
          </h2>

          <p
            className="
              max-w-3xl
              text-lg
              leading-8
              text-neutral-600
            "
          >
            {article.excerpt}
          </p>

          <div
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              tracking-[0.15em]
              uppercase
            "
          >
            Read Article
            <span>→</span>
          </div>

        </div>

      </Link>

    </section>
  );
}