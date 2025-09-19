// TypeScript interfaces for metadata configuration

// Base metadata configuration interface
export interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
}

// Site configuration interface
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: string;
  favicon: string;
  keywords: string[];
  author: string;
  language: string;
  locale: string;
  timezone: string;
}

// SEO configuration interface
export interface SeoConfig {
  robots: string;
  canonical: string;
  language: string;
  author: string;
  publisher: string;
  copyright: string;
  rating: string;
  distribution: string;
  revisit: string;
}

// Social media configuration interface
export interface SocialConfig {
  twitter: {
    site: string;
    creator: string;
    card: 'summary' | 'summary_large_image';
  };
  facebook: {
    appId: string;
    pageId: string;
  };
  linkedin: {
    companyId: string;
  };
}
