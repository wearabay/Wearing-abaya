import Image from "next/image";
import Link from "next/link";

import type { JournalArticle } from "@/types/journal";


type ArticleCardProps = {
  article: JournalArticle;
};

export default function ArticleCard({
  article,
}: ArticleCardProps) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-neutral-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden">

        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      <div className="flex flex-1 flex-col p-6">

        <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">

          <span>{article.category}</span>

          <span>•</span>

          <span>{article.readTime}</span>

        </div>

        <h3
          className="
            text-xl
            font-semibold
            leading-snug
            text-black
            transition-colors
            duration-300
            group-hover:text-neutral-700
          "
        >
          {article.title}
        </h3>

        <p
          className="
            mt-4
            flex-1
            text-sm
            leading-7
            text-neutral-600
          "
        >
          {article.excerpt}
        </p>

        <div
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            uppercase
            tracking-[0.15em]
          "
        >
          Read Article
          <span>→</span>
        </div>

      </div>

    </Link>
  );
}