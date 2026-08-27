import React, { useMemo } from "react";
import { Clock, Tag, ArrowLeft, User } from "lucide-react";
import { Link } from "react-router-dom";
import { articleCategoryLabels } from "../../types/article.types";
import type { Article } from "../../types/article.types";
import { ContentRenderer, extractHeadings } from "../../lib/contentParser";
import { TableOfContents } from "./TableOfContents";
import { ArticleShareButtons } from "./ArticleShareButtons";
import { ReadingProgressBar } from "./ReadingProgressBar";

interface ArticleDetailContentProps {
  article: Article;
}

/**
 * Full article detail view with rich text content rendering,
 * TOC sidebar, reading progress bar, and share buttons.
 */
export const ArticleDetailContent: React.FC<ArticleDetailContentProps> = ({
  article,
}) => {
  const headings = useMemo(() => extractHeadings(article.content), [article.content]);
  const hasContent = article.content.trim().length > 0;

  // Format date to Indonesian locale
  const formattedDate = useMemo(() => {
    try {
      return new Date(article.publishedAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return article.publishedAt;
    }
  }, [article.publishedAt]);

  return (
    <>
      <ReadingProgressBar />

      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Table of Contents — Desktop Left Sidebar */}
        {hasContent && headings.length > 0 && (
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <TableOfContents headings={headings} />
          </aside>
        )}

        {/* Main Article Content */}
        <article className="flex-1 max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-[240px] md:h-[400px] lg:h-[500px] w-full bg-neutral-100 overflow-hidden">
            <img
              src={article.coverImage || "/images/hero/hero-rumah.jpg"}
              alt={article.title}
              className="w-full h-full object-cover"
            />

            {/* Coming Soon Overlay — ONLY if no content */}
            {!hasContent && (
              <div className="absolute inset-0 bg-brand-green-900/40 flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
                <span className="text-white font-display font-bold text-xl md:text-2xl tracking-widest uppercase border-4 border-white/80 px-6 py-3 rounded-xl -rotate-12 bg-black/20 shadow-sm">
                  Coming Soon
                </span>
              </div>
            )}

            {/* Gradient overlay at bottom for readability */}
            {hasContent && (
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            )}

            {/* Back Button Overlay */}
            <Link
              to="/artikel"
              className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-brand-green-900 font-body text-sm font-medium hover:bg-white transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Link>
          </div>

          <div className="p-4 sm:p-6 md:p-10 lg:p-12">
            {/* Meta Info Bar */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-5 md:mb-6">
              <span className="px-3 py-1.5 bg-brand-green-50 text-brand-green-700 text-xs font-body font-semibold rounded-full uppercase tracking-wider">
                {articleCategoryLabels[article.category] || article.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-neutral-500 font-body">
                <Clock className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-500 font-body">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-500 font-body">
                <Tag className="w-4 h-4" />
                <span>{article.readingTimeMinutes} menit baca</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-brand-green-900 mb-6 md:mb-8 leading-tight">
              {article.title}
            </h1>

            {/* Share Buttons — Top */}
            {hasContent && (
              <div className="mb-8 pb-6 border-b border-neutral-100">
                <ArticleShareButtons title={article.title} />
              </div>
            )}

            {/* Content — Rich text rendering */}
            {hasContent ? (
              <ContentRenderer content={article.content} />
            ) : (
              <div className="py-16 text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-8 h-8 text-neutral-300" />
                </div>
                <p className="text-neutral-400 font-body text-lg">
                  Artikel ini sedang dalam proses penulisan.
                </p>
                <p className="text-neutral-400 font-body text-sm mt-2">
                  Nantikan kontennya segera!
                </p>
              </div>
            )}

            {/* Share Buttons — Bottom */}
            {hasContent && (
              <div className="mt-12 pt-8 border-t border-neutral-100">
                <ArticleShareButtons title={article.title} />
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
};
