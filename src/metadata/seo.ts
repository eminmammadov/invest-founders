import { SeoConfig } from './types';
import { siteConfig } from './site';

export const seoConfig: SeoConfig = {
  robots: "index, follow",
  canonical: siteConfig.url,
  language: siteConfig.language,
  author: siteConfig.author,
  publisher: siteConfig.name,
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
  rating: "general",
  distribution: "global",
  revisit: "7 days"
};

// SEO-specific meta tags
export const generateSeoMeta = (config: { robots?: string; canonical?: string; author?: string }) => ({
  robots: config.robots || seoConfig.robots,
  canonical: config.canonical || seoConfig.canonical,
  language: seoConfig.language,
  author: config.author || seoConfig.author,
  publisher: seoConfig.publisher,
  copyright: seoConfig.copyright,
  rating: seoConfig.rating,
  distribution: seoConfig.distribution,
  revisit: seoConfig.revisit,
  
  // Additional SEO meta tags
  'application-name': siteConfig.name,
  'apple-mobile-web-app-title': siteConfig.name,
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'default',
  'format-detection': 'telephone=no',
  'mobile-web-app-capable': 'yes',
  'msapplication-TileColor': '#0f0f0f',
  'msapplication-config': '/browserconfig.xml',
  'theme-color': '#0f0f0f',
  
  // Structured data for SEO
  'application/ld+json': JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}${siteConfig.logo}`,
    "sameAs": [
      "https://twitter.com/investfounders",
      "https://linkedin.com/company/investfounders",
      "https://facebook.com/investfounders"
    ],
    "serviceType": [
      "Investment Platform",
      "Cryptocurrency Investment",
      "Asset Management",
      "Staking Services"
    ],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Investment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Startup Investment",
            "description": "Invest in early-stage startups and founders"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Crypto Investment",
            "description": "Cryptocurrency investment and portfolio management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Staking Services",
            "description": "Earn passive income through crypto staking"
          }
        }
      ]
    }
  })
});
