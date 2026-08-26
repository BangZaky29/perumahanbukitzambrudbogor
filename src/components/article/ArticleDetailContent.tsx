import React from "react";
import { Clock, Tag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { articleCategoryLabels } from "../../types/article.types";
import type { Article } from "../../types/article.types";

interface ArticleDetailContentProps {
  article: Article;
}

export const ArticleDetailContent: React.FC<ArticleDetailContentProps> = ({
  article,
}) => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full bg-neutral-100 overflow-hidden">
        <img
          src={article.coverImage || "/images/hero/hero-rumah.jpg"}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        
        {/* Placeholder Coming Soon Overlay */}
        <div className="absolute inset-0 bg-brand-green-900/40 flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
          <span className="text-white font-display font-bold text-xl md:text-2xl tracking-widest uppercase border-4 border-white/80 px-6 py-3 rounded-xl -rotate-12 bg-black/20 shadow-sm">
            Coming Soon
          </span>
        </div>
        
        {/* Back Button Overlay */}
        <Link 
          to="/artikel"
          className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-brand-green-900 font-body text-sm font-medium hover:bg-white transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Link>
      </div>

      <div className="p-6 md:p-10 lg:p-12">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-brand-green-50 text-brand-green-700 text-xs font-body font-semibold rounded-full uppercase tracking-wider">
            {articleCategoryLabels[article.category] || article.category}
          </span>
          <div className="flex items-center gap-2 text-sm text-neutral-500 font-body">
            <Clock className="w-4 h-4" />
            <span>{article.publishedAt}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500 font-body">
            <Tag className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-green-900 mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Content - Prose styling for the markdown/HTML content */}
        {/* For now, since we only have plain text string in data, we just render it with whitespace preservation */}
        <div className="prose prose-lg prose-neutral max-w-none font-body prose-headings:font-display prose-headings:text-brand-green-900 prose-a:text-brand-gold-500 hover:prose-a:text-brand-gold-600">
          {/* Note: if the content contains HTML, use dangerouslySetInnerHTML. 
              Since it's just text for now, we split by newlines. */}
          {article.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="mb-6 leading-relaxed text-neutral-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};
