export type JournalCategory =
  | "Style Guide"
  | "Care Guide"
  | "Lifestyle"
  | "Ramadan"
  | "Behind The Brand"
  | "New Collection";

export type JournalArticle = {
  id: string;

  slug: string;

  title: string;

  excerpt: string;

  content: string;

  coverImage: string;

  author: string;

  authorRole: string;

  category: JournalCategory;

  featured: boolean;

  publishedAt: string;

  readTime: string;

  tags: string[];
};