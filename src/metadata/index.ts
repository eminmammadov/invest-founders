import { Metadata } from 'next';
import { MetadataConfig } from './types';
import { siteConfig } from './site';
import { generateSeoMeta } from './seo';
import { generateTwitterCard, generateOpenGraph } from './social';

// Main metadata generator function
export function generateMetadata(config: MetadataConfig): Metadata {
  const fullTitle = config.title.includes(siteConfig.name) 
    ? config.title 
    : `${config.title} | ${siteConfig.name}`;
    
  const fullUrl = config.url ? `${siteConfig.url}${config.url}` : siteConfig.url;
  
  return {
    // Basic metadata
    title: fullTitle,
    description: config.description,
    keywords: config.keywords?.join(', ') || siteConfig.keywords.join(', '),
    
    // SEO metadata
    ...generateSeoMeta({
      ...config,
      canonical: fullUrl
    }),
    
    // Open Graph metadata
    openGraph: generateOpenGraph({
      ...config,
      url: fullUrl,
      image: config.image ? `${siteConfig.url}${config.image}` : undefined
    }),
    
    // Twitter Card metadata
    twitter: generateTwitterCard({
      ...config,
      url: fullUrl,
      images: config.image ? [`${siteConfig.url}${config.image}`] : undefined
    }),
    
    // Additional metadata
    alternates: {
      canonical: fullUrl
    },
    
    // Icons
    icons: {
      icon: [
        { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon/favicon.ico', sizes: 'any' }
      ],
      apple: [
        { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ]
    },
    
    // Manifest
    manifest: '/manifest/site.webmanifest'
  };
}

// Predefined metadata configurations for common pages
export const pageMetadata = {
  home: {
    title: "Invest Founders - Professional Investment Platform",
    description: "Invest in startups, manage crypto portfolios, and discover early opportunities. Professional investment platform for founders and investors.",
    keywords: ["investment platform", "startup funding", "crypto investment", "early opportunities", "asset management"],
    url: "/"
  },
  
  about: {
    title: "About Us - Invest Founders",
    description: "Learn about Invest Founders' mission to democratize investment opportunities and support innovative founders worldwide.",
    keywords: ["about invest founders", "company mission", "investment philosophy", "team"],
    url: "/about"
  },
  
  members: {
    title: "Members - Invest Founders",
    description: "Join our exclusive community of investors and founders. Access to premium investment opportunities and networking.",
    keywords: ["investment community", "exclusive members", "networking", "premium access"],
    url: "/members"
  },
  
  insights: {
    title: "Insights & Analysis - Invest Founders",
    description: "Stay informed with our latest market insights, investment analysis, and industry trends.",
    keywords: ["market insights", "investment analysis", "industry trends", "research"],
    url: "/insights"
  },
  
  prelist: {
    title: "Prelist - Early Investment Opportunities",
    description: "Discover upcoming projects and early investment opportunities before they hit the mainstream market.",
    keywords: ["early investments", "prelist", "upcoming projects", "early opportunities"],
    url: "/prelist"
  },
  
  portfolio: {
    title: "Portfolio Management - Invest Founders Pro",
    description: "Track your investments and portfolio performance with our professional portfolio management tools.",
    keywords: ["portfolio management", "investment tracking", "performance analysis", "pro tools"],
    url: "/portfolio"
  },
  
  market: {
    title: "Market Data & Analysis - Invest Founders",
    description: "Real-time market data, analysis tools, and comprehensive market insights for informed investment decisions.",
    keywords: ["market data", "real-time analysis", "market insights", "trading tools"],
    url: "/market"
  },
  
  contact: {
    title: "Contact Us - Invest Founders",
    description: "Get in touch with our investment team. We're here to help you with your investment journey.",
    keywords: ["contact invest founders", "investment support", "customer service", "help"],
    url: "/contact"
  }
};

// Export all configurations
export { siteConfig } from './site';
export { seoConfig } from './seo';
export { socialConfig } from './social';

// Export types
export type { 
  MetadataConfig, 
  SiteConfig, 
  SeoConfig, 
  SocialConfig 
} from './types';
