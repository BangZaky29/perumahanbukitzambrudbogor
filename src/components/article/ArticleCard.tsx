import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { articleCategoryLabels } from "../../types/article.types";
import type { Article } from "../../types/article.types";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link 
      to={`/artikel/${article.slug}`}
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-neutral-100 group-hover:shadow-inner">
        <img
          src={article.coverImage || "/images/hero/hero-rumah.jpg"}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Placeholder Coming Soon Overlay — only if no content */}
        {!article.content?.trim() && (
          <div className="absolute inset-0 bg-brand-green-900/40 flex items-center justify-center backdrop-blur-[2px]">
            <span className="text-white font-display font-bold text-sm tracking-widest uppercase border border-white/80 px-3 py-1.5 rounded-lg -rotate-12 bg-black/20 shadow-sm">
              Coming Soon
            </span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-brand-green-900/80 backdrop-blur-sm text-white text-xs font-body font-medium rounded-full shadow-sm">
            {articleCategoryLabels[article.category] || article.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-semibold text-brand-green-900 mb-3 line-clamp-2 group-hover:text-brand-green-700 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-body text-neutral-500 mb-6 line-clamp-3 flex-grow leading-relaxed">
          {article.excerpt}
        </p>
        
        {/* Footer Area */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-auto">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-body">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.publishedAt}</span>
          </div>
          
          <span className="text-sm font-body font-medium text-brand-gold-500 flex items-center gap-1 group-hover:gap-2 transition-all">
            Baca Selengkapnya
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};
