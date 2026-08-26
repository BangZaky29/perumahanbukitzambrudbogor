import React, { useEffect } from "react";
import { SEO } from "../components/shared/SEO";
import { HeroSection } from "../components/home/HeroSection";
import { TrustStatsSection } from "../components/home/TrustStatsSection";
import { WhyUsSection } from "../components/home/WhyUsSection";
import { VideoTourSection } from "../components/home/VideoTourSection";
import { UnitShowcaseSection } from "../components/home/UnitShowcaseSection";
import { SpecListSection } from "../components/home/SpecListSection";
import { GallerySection } from "../components/home/GallerySection";
import { TestimonialSection } from "../components/home/TestimonialSection";
import { ArticleTeaserSection } from "../components/home/ArticleTeaserSection";
import { PartnershipSection } from "../components/home/PartnershipSection";
import { CtaBanner } from "../components/home/CtaBanner";

const HomePage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO title="Beranda" />
      <HeroSection />
      <TrustStatsSection />
      <WhyUsSection />
      <VideoTourSection />
      <UnitShowcaseSection />
      <SpecListSection />
      <GallerySection />
      <TestimonialSection />
      <ArticleTeaserSection />
      <PartnershipSection />
      <CtaBanner />
    </div>
  );
};

export default HomePage;
