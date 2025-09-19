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
    description: "Invest in startups, manage crypto portfolios, and earn through staking. Professional investment platform for founders and investors.",
    keywords: ["investment platform", "startup funding", "crypto investment", "staking", "asset management"],
    url: "/"
  },
  
  about: {
    title: "About Us - Invest Founders",
    description: "Learn about Invest Founders' mission to democratize investment opportunities and support innovative founders worldwide.",
    keywords: ["about invest founders", "company mission", "investment philosophy"],
    url: "/about"
  },
  
  investments: {
    title: "Investment Opportunities - Invest Founders",
    description: "Discover curated investment opportunities in startups, cryptocurrencies, and digital assets.",
    keywords: ["investment opportunities", "startup investments", "crypto investments"],
    url: "/investments"
  },
  
  staking: {
    title: "Crypto Staking - Earn Passive Income",
    description: "Earn passive income through cryptocurrency staking. Secure, reliable, and profitable staking services.",
    keywords: ["crypto staking", "staking rewards", "passive income", "yield farming"],
    url: "/staking"
  },
  
  portfolio: {
    title: "Portfolio Management - Invest Founders",
    description: "Professional portfolio management services for crypto and traditional investments.",
    keywords: ["portfolio management", "asset management", "wealth management"],
    url: "/portfolio"
  },
  
  contact: {
    title: "Contact Us - Invest Founders",
    description: "Get in touch with our investment team. We're here to help you with your investment journey.",
    keywords: ["contact invest founders", "investment support", "customer service"],
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
