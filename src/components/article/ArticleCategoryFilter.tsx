import React from "react";
import { cn } from "../../lib/utils/cn";
import { articleCategoryLabels } from "../../types/article.types";
import type { ArticleCategory } from "../../types/article.types";

interface ArticleCategoryFilterProps {
  categories: ArticleCategory[];
  activeCategory: ArticleCategory | null;
  onCategoryChange: (category: ArticleCategory | null) => void;
}

export const ArticleCategoryFilter: React.FC<ArticleCategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200",
          activeCategory === null
            ? "bg-brand-green-900 text-white shadow-md"
            : "bg-white text-neutral-600 border border-neutral-200 hover:border-brand-green-500 hover:text-brand-green-700"
        )}
      >
        Semua Kategori
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200",
            activeCategory === category
              ? "bg-brand-green-900 text-white shadow-md"
              : "bg-white text-neutral-600 border border-neutral-200 hover:border-brand-green-500 hover:text-brand-green-700"
          )}
        >
          {articleCategoryLabels[category] || category}
        </button>
      ))}
    </div>
  );
};
