import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const UnitDetailPage = lazy(() => import("../pages/UnitDetailPage"));
const KprCalculatorPage = lazy(() => import("../pages/KprCalculatorPage"));
const ArticleListPage = lazy(() => import("../pages/ArticleListPage"));
const ArticleDetailPage = lazy(() => import("../pages/ArticleDetailPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-cream-50">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-brand-green-700/20 border-t-brand-green-700 rounded-full animate-spin mx-auto mb-4" />
      <p className="text-sm text-neutral-500 font-body">Memuat halaman...</p>
    </div>
  </div>
);

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/unit/:unitId" element={<UnitDetailPage />} />
        <Route path="/kalkulator-kpr" element={<KprCalculatorPage />} />
        <Route path="/artikel" element={<ArticleListPage />} />
        <Route path="/artikel/:slug" element={<ArticleDetailPage />} />
        <Route path="/kontak" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
