import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  name: "Invest Founders",
  description: "Professional investment platform for founders, crypto investors, and asset management. Discover early opportunities, manage portfolios, and track market data.",
  url: "https://investfounders.com",
  logo: "/images/logos/kriptaz-invest-full-white-logo.svg",
  favicon: "/favicon/favicon.ico",
  keywords: [
    // Core platform keywords
    "investment platform",
    "startup funding",
    "venture capital",
    "angel investors",
    "founder investment",
    "early opportunities",
    "prelist investments",
    
    // Crypto keywords
    "crypto investment",
    "cryptocurrency",
    "bitcoin investment",
    "ethereum staking",
    "crypto portfolio management",
    "digital assets",
    "blockchain investment",
    "market data",
    "real-time analysis",
    
    // Platform features
    "investment opportunities",
    "fundraising platform",
    "investor network",
    "startup ecosystem",
    "crypto trading",
    "defi investment",
    "portfolio tracking",
    "market insights",
    "investment analysis",
    
    // Asset management keywords
    "asset management",
    "portfolio management",
    "wealth management",
    "investment strategy",
    "risk management",
    "performance tracking",
    
    // Community keywords
    "investment community",
    "exclusive members",
    "networking",
    "premium access",
    "professional tools"
  ],
  author: "Invest Founders Team",
  language: "en",
  locale: "en_US",
  timezone: "UTC"
};

// Environment-specific configuration
export const getEnvironmentConfig = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    isProduction,
    isDevelopment,
    baseUrl: isProduction ? siteConfig.url : 'http://localhost:3000',
    analytics: {
      googleAnalytics: isProduction ? process.env.NEXT_PUBLIC_GA_ID : null,
      mixpanel: isProduction ? process.env.NEXT_PUBLIC_MIXPANEL_TOKEN : null,
    },
    monitoring: {
      sentry: isProduction ? process.env.NEXT_PUBLIC_SENTRY_DSN : null,
    }
  };
};
