import ArticleCard from "./ArticleCard";

import type { JournalArticle } from "@/types/journal";

type ArticleGridProps = {
  articles: JournalArticle[];
};

export default function ArticleGrid({
  articles,
}: ArticleGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >

        {articles.map((article) => (

          <ArticleCard
            key={article.id}
            article={article}
          />

        ))}

      </div>

    </section>
  );
}