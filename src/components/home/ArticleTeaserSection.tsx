import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { articles } from "../../data/articles.data";
import { articleCategoryLabels } from "../../types/article.types";

export const ArticleTeaserSection: React.FC = () => {
  // Get only the latest 3 articles
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="section-padding section-y-padding bg-white border-t border-neutral-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <AnimatedReveal className="flex-1">
            <SectionHeading
              label="Artikel & Panduan"
              title="Informasi Seputar Properti"
              description="Dapatkan tips bermanfaat seputar KPR, perawatan rumah, dan investasi properti."
              align="left"
              className="mb-0"
            />
          </AnimatedReveal>
          
          <AnimatedReveal delay={0.2} direction="left" className="hidden md:block">
            <Button variant="outline" asLink href="/artikel">
              Lihat Semua Artikel
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {latestArticles.map((article, index) => (
            <AnimatedReveal key={article.id} delay={index * 0.1}>
              <Link 
                to={`/artikel/${article.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={article.coverImage || "/images/hero/hero-rumah.jpg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-green-900/80 backdrop-blur-sm text-white text-xs font-body font-medium rounded-full">
                      {articleCategoryLabels[article.category] || article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-semibold text-brand-green-900 mb-3 line-clamp-2 group-hover:text-brand-green-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-body text-neutral-500 mb-6 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-body">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.publishedAt}</span>
                    </div>
                    <span className="text-sm font-body font-medium text-brand-gold-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Baca
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden flex justify-center">
          <Button variant="outline" asLink href="/artikel" className="w-full">
            Lihat Semua Artikel
          </Button>
        </div>
      </div>
    </section>
  );
};
