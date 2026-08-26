import React from "react";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../config/site.config";

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.brand.description,
  type = "website",
  image = "/logo/logo-bukit-zamrud.png",
  url = "https://bukitzamrud.id", // Placeholder production URL
}) => {
  const fullTitle = title 
    ? `${title} — ${siteConfig.brand.name}` 
    : `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};
