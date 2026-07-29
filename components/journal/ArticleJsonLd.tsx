type Props = {
  title: string;
  description: string;
  image: string;
  author: string;
  publishedAt: string;
  url: string;
};

export default function ArticleJsonLd({
  title,
  description,
  image,
  author,
  publishedAt,
  url,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: title,

    description,

    image: [image],

    author: {
      "@type": "Person",
      name: author,
    },

    publisher: {
      "@type": "Organization",
      name: "Wearing.abaya",
    },

    datePublished: publishedAt,

    mainEntityOfPage: url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}