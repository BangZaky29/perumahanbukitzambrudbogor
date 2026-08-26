import React, { useState, useEffect, useMemo } from "react";
import { BookOpen } from "lucide-react";
import { SEO } from "../components/shared/SEO";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ArticleCategoryFilter } from "../components/article/ArticleCategoryFilter";
import { ArticleGrid } from "../components/article/ArticleGrid";
import { CtaBanner } from "../components/home/CtaBanner";
import { AnimatedReveal } from "../components/shared/AnimatedReveal";
import { articles } from "../data/articles.data";
import type { ArticleCategory } from "../types/article.types";

const ArticleListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const allCategories = articles.map((article) => article.category);
    return Array.from(new Set(allCategories)).sort() as ArticleCategory[];
  }, []);

  // Filter articles based on active category
  const filteredArticles = useMemo(() => {
    if (!activeCategory) return articles;
    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen pt-24 bg-cream-50 flex flex-col">
      <SEO title="Artikel & Panduan Properti" />
      {/* Header Section */}
      <section className="section-container pb-8 md:pb-12">
        <AnimatedReveal>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-brand-green-100 rounded-2xl text-brand-green-900">
              <BookOpen className="w-8 h-8" />
            </div>
          </div>
          <SectionHeading
            label="Pusat Informasi"
            title="Artikel & Panduan Properti"
            description="Temukan berbagai tips, trik, dan informasi penting seputar investasi properti, proses KPR, hingga panduan merawat hunian idaman Anda."
          />
        </AnimatedReveal>
      </section>

      {/* Content Section */}
      <section className="section-container pb-20 flex-grow">
        <AnimatedReveal delay={0.2}>
          <div className="flex justify-center">
            <ArticleCategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          
          <div className="mt-8">
            <ArticleGrid articles={filteredArticles} />
          </div>
        </AnimatedReveal>
      </section>

      {/* CTA Banner */}
      <div className="mt-auto">
        <CtaBanner />
      </div>
    </div>
  );
};

export default ArticleListPage;
