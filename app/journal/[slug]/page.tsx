import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import RelatedArticles from "@/components/journal/RelatedArticles";
import ReadingProgress from "@/components/journal/ReadingProgress";
import Breadcrumb from "@/components/journal/Breadcrumb";
import AuthorCard from "@/components/journal/AuthorCard";
import ShareButtons from "@/components/journal/ShareButtons";
import ArticleJsonLd from "@/components/journal/ArticleJsonLd";

import { journalArticles } from "@/data/journal";

type Props = {
  params: {
    slug: string;
  };
};

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const article = journalArticles.find(
    (item) => item.slug === params.slug
  );

  if (!article) {
    return {
      title: "Article Not Found | Wearing.abaya",
    };
  }

  return {
    title: `${article.title} | Wearing.abaya Journal`,

    description: article.excerpt,

    openGraph: {
  title: article.title,

  description: article.excerpt,

  url: `${baseUrl}/journal/${article.slug}`,

  siteName: "Wearing.abaya",

  type: "article",

  publishedTime: article.publishedAt,

  images: [
    {
      url: `${baseUrl}${article.coverImage}`,
      width: 1200,
      height: 630,
      alt: article.title,
    },
  ],
},

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`${baseUrl}${article.coverImage}`],
    },
  };
}

export default function JournalDetailPage({
  params,
}: Props) {
  const article = journalArticles.find(
    (item) => item.slug === params.slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-white">
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        image={`${baseUrl}${article.coverImage}`}
        author={article.author}
        publishedAt={article.publishedAt}
        url={`${baseUrl}/journal/${article.slug}`}
      />

      <ReadingProgress />

      <section
        className="
        mx-auto
        max-w-5xl
        px-6
        py-20
        "
      >
        <Breadcrumb title={article.title} />

        {/* HEADER */}

        <div
          className="
          mb-8
          flex
          flex-wrap
          items-center
          gap-3
          text-sm
          uppercase
          tracking-[0.15em]
          text-neutral-500
          "
        >
          <span>{article.category}</span>

          <span>•</span>

          <span>{article.readTime}</span>

          <span>•</span>

          <span>{article.publishedAt}</span>
        </div>

        <h1
          className="
          max-w-4xl
          text-5xl
          font-semibold
          leading-tight
          tracking-tight
          "
        >
          {article.title}
        </h1>

        <p
          className="
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-neutral-600
          "
        >
          {article.excerpt}
        </p>
      </section>

      {/* COVER IMAGE */}

      <section
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >
        <div
          className="
          relative
          aspect-[16/9]
          overflow-hidden
          rounded-3xl
          "
        >
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="
            object-cover
            "
          />
        </div>
      </section>

      {/* ARTICLE CONTENT */}

      <section
        className="
        mx-auto
        max-w-3xl
        px-6
        py-20
        "
      >
        <div
          className="
          prose
          prose-neutral
          max-w-none
          "
        >
          {article.content
            .split("\n")
            .filter(Boolean)
            .map((paragraph: string, index: number) => (
              <p
                key={index}
                className="
                mb-8
                leading-8
                text-neutral-700
                "
              >
                {paragraph}
              </p>
            ))}
        </div>
      </section>

      {/* AUTHOR */}

      <section
        className="
        mx-auto
        max-w-3xl
        px-6
        pb-16
        "
      >
        <ShareButtons title={article.title} />

        <AuthorCard
          author={article.author}
          role={article.authorRole}
        />
      </section>

      {/* RELATED */}

      <RelatedArticles
        currentSlug={article.slug}
        articles={journalArticles}
      />
    </main>
  );
}