export interface ArticleTocItem {
  id: string;
  title: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: ArticleCategory;
  author: string;
  publishedAt: string; // ISO date
  readingTimeMinutes: number;
  content: string; // structured text with markers: ## for h2, ### for h3, - for list items, > for blockquotes, **bold**
  tableOfContents?: ArticleTocItem[];
}

export type ArticleCategory =
  | "tips-kpr"
  | "panduan-subsidi"
  | "gaya-hidup"
  | "berita-properti";

export const articleCategoryLabels: Record<ArticleCategory, string> = {
  "tips-kpr": "Tips KPR",
  "panduan-subsidi": "Panduan Subsidi",
  "gaya-hidup": "Gaya Hidup",
  "berita-properti": "Berita Properti",
};
