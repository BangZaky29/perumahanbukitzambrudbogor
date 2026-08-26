import React, { useEffect, useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SEO } from "../components/shared/SEO";
import { ArticleDetailContent } from "../components/article/ArticleDetailContent";
import { ArticleCard } from "../components/article/ArticleCard";
import { CtaBanner } from "../components/home/CtaBanner";
import { Button } from "../components/ui/Button";
import { AnimatedReveal } from "../components/shared/AnimatedReveal";
import { articles } from "../data/articles.data";
import { siteConfig } from "../config/site.config";

const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the requested article
  const article = useMemo(() => {
    return articles.find((a) => a.slug === slug);
  }, [slug]);

  // Find related articles (same category, excluding current)
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => a.category === article.category && a.id !== article.id)
      .slice(0, 3);
  }, [article]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen pt-20 bg-cream-50 flex flex-col">
      <SEO 
        title={article.title} 
        description={article.excerpt} 
        image={article.coverImage} 
        type="article"
      />
      <div className="section-container py-12">
        <AnimatedReveal>
          <ArticleDetailContent article={article} />
        </AnimatedReveal>

        {/* Share / Consult Action */}
        <AnimatedReveal delay={0.2} className="max-w-4xl mx-auto mt-12">
          <div className="p-8 bg-brand-green-900 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold-500/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="relative z-10 text-center sm:text-left">
              <h3 className="text-xl font-display font-semibold mb-2">
                Punya Pertanyaan Seputar Properti?
              </h3>
              <p className="text-brand-green-100 font-body text-sm max-w-md">
                Tim marketing kami siap membantu Anda mulai dari konsultasi awal hingga pengajuan KPR.
              </p>
            </div>
            
            <div className="relative z-10 w-full sm:w-auto">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto bg-brand-gold-500 text-brand-green-900 hover:bg-brand-gold-400 border-none"
                asLink
                href={siteConfig.contact.whatsappUrl(siteConfig.whatsappMessages.artikel)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </AnimatedReveal>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <AnimatedReveal delay={0.3} className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-green-900">
                Artikel Terkait
              </h2>
              <Link 
                to="/artikel" 
                className="text-brand-gold-500 font-body font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Lihat Semua
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </AnimatedReveal>
        )}
      </div>

      <div className="mt-auto">
        <CtaBanner />
      </div>
    </div>
  );
};

export default ArticleDetailPage;
