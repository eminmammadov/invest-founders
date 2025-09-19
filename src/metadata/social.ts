import { SocialConfig } from './types';
import { siteConfig } from './site';

export const socialConfig: SocialConfig = {
  twitter: {
    site: "@investfounders",
    creator: "@investfounders",
    card: "summary_large_image"
  },
  facebook: {
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "",
    pageId: "investfounders"
  },
  linkedin: {
    companyId: "invest-founders"
  },
};

// Generate Twitter Card metadata
export const generateTwitterCard = (config: { title: string; description: string; url?: string; images?: string[] }) => ({
  card: socialConfig.twitter.card,
  site: socialConfig.twitter.site,
  creator: socialConfig.twitter.creator,
  title: config.title,
  description: config.description,
  images: config.images || [`${siteConfig.url}/og-image.jpg`],
  domain: siteConfig.url,
  url: config.url || siteConfig.url
});

// Generate Facebook/Open Graph metadata
export const generateOpenGraph = (config: { 
  title: string; 
  description: string; 
  url?: string; 
  image?: string; 
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}) => ({
  title: config.title,
  description: config.description,
  url: config.url || siteConfig.url,
  siteName: siteConfig.name,
  images: [
    {
      url: config.image || `${siteConfig.url}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: config.title,
    },
  ],
  locale: siteConfig.locale,
  type: config.type || 'website',
  
  // Additional Open Graph properties
  'og:image:width': '1200',
  'og:image:height': '630',
  'og:image:type': 'image/jpeg',
  'og:site_name': siteConfig.name,
  'og:updated_time': new Date().toISOString(),
  
  // Facebook specific
  'fb:app_id': socialConfig.facebook.appId,
  
  // Article specific (if type is article)
  ...(config.type === 'article' && {
    'article:author': config.author || siteConfig.author,
    'article:published_time': config.publishedTime,
    'article:modified_time': config.modifiedTime,
    'article:section': config.section,
    'article:tag': config.tags?.join(', ')
  })
});

