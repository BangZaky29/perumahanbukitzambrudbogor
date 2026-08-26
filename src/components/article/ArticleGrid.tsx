import React from "react";
import { ArticleCard } from "./ArticleCard";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import type { Article } from "../../types/article.types";

interface ArticleGridProps {
  articles: Article[];
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-body text-neutral-500 font-body">
          Belum ada artikel yang tersedia untuk kategori ini.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {articles.map((article, index) => (
        <AnimatedReveal key={article.id} delay={index * 0.1}>
          <ArticleCard article={article} />
        </AnimatedReveal>
      ))}
    </div>
  );
};
