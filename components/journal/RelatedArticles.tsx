import ArticleGrid from "./ArticleGrid";

import type { JournalArticle } from "@/types/journal";

type RelatedArticlesProps = {
  currentSlug: string;
  articles: JournalArticle[];
};

export default function RelatedArticles({
  currentSlug,
  articles,
}: RelatedArticlesProps) {

  const related =
    articles
      .filter(
        (article) =>
          article.slug !== currentSlug
      )
      .slice(0, 3);

  return (
    <section className="border-t border-neutral-200 pt-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-3xl font-semibold">
          Related Articles
        </h2>

      </div>

      <ArticleGrid articles={related} />

    </section>
  );
}