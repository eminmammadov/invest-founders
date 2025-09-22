# 📋 Metadata System - Invest Founders

Bu klasör, Invest Founders projesi için profesyonel ve modüler bir metadata yönetim sistemi içerir.

## 🎯 Genel Bakış

Metadata sistemi, SEO optimizasyonu, social media paylaşımları ve arama motoru optimizasyonu için gerekli tüm meta tag'leri otomatik olarak oluşturur.

## 📁 Dosya Yapısı

```
src/metadata/
├── README.md              # Bu dosya
├── index.ts              # Ana metadata generator ve export'lar
├── types.ts              # TypeScript interface'leri
├── site.ts               # Site konfigürasyonu
├── seo.ts                # SEO optimizasyonları
└── social.ts             # Social media meta'ları
```

## 🚀 Hızlı Başlangıç

### Basit Sayfa Metadata

```typescript
// pages/about/page.tsx
import { generateMetadata, pageMetadata } from '@/metadata';

export const metadata = generateMetadata(pageMetadata.about);
```

### Özel Sayfa Metadata

```typescript
// pages/investments/page.tsx
import { generateMetadata } from '@/metadata';

export const metadata = generateMetadata({
  title: "Investment Opportunities",
  description: "Discover curated investment opportunities in startups and crypto",
  keywords: ["investment", "opportunities", "startups", "crypto"],
  url: "/investments",
  image: "/images/investments/hero.jpg"
});
```

## 📋 Dosya Detayları

### `index.ts` - Ana Metadata Generator

Ana metadata oluşturma fonksiyonu ve önceden tanımlanmış sayfa konfigürasyonları.

**Özellikler:**
- ✅ Otomatik title formatting
- ✅ Canonical URL oluşturma
- ✅ Open Graph ve Twitter Card entegrasyonu
- ✅ Favicon ve manifest yönetimi

**Kullanım:**
```typescript
import { generateMetadata, pageMetadata } from '@/metadata';

// Önceden tanımlanmış sayfa
export const metadata = generateMetadata(pageMetadata.home);

// Özel sayfa
export const metadata = generateMetadata({
  title: "Custom Page",
  description: "Custom description"
});
```

### `types.ts` - TypeScript Interface'leri

Metadata konfigürasyonu için TypeScript type tanımları.

**Ana Interface'ler:**
- `MetadataConfig` - Temel metadata konfigürasyonu
- `SiteConfig` - Site genel ayarları
- `SeoConfig` - SEO optimizasyon ayarları
- `SocialConfig` - Social media ayarları

### `site.ts` - Site Konfigürasyonu

Site genel bilgileri ve environment-specific ayarlar.

**İçerik:**
- Site adı, açıklama, URL
- Anahtar kelimeler (investment, crypto, staking)
- Environment detection (production/development)
- Analytics ve monitoring ayarları

**Özellikler:**
```typescript
export const siteConfig = {
  name: "Invest Founders",
  description: "Professional investment platform...",
  url: "https://investfounders.com",
  logo: "/logo.png",
  keywords: ["investment", "crypto", "staking", ...]
};
```

### `seo.ts` - SEO Optimizasyonları

Arama motoru optimizasyonu için meta tag'ler ve structured data.

**Özellikler:**
- ✅ Robots meta tags
- ✅ Canonical URLs
- ✅ Structured data (Schema.org)
- ✅ Apple meta tags
- ✅ Microsoft meta tags

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Invest Founders",
  "serviceType": [
    "Investment Platform",
    "Cryptocurrency Investment",
    "Asset Management",
    "Staking Services"
  ]
}
```

### `social.ts` - Social Media Meta'ları

Social media platformları için Open Graph ve Twitter Card optimizasyonu.

**Desteklenen Platformlar:**
- ✅ Facebook (Open Graph)
- ✅ Twitter (Twitter Cards)
- ✅ LinkedIn (Professional sharing)
- ✅ WhatsApp, Discord, Slack (Link previews)

**Özellikler:**
- Unified image system (`og-image.jpg`)
- Platform-specific optimizations
- Article metadata support
- Image dimension optimization

## 🎨 Görsel Gereksinimleri

### Gerekli Dosyalar

#### Yüksek Öncelik
1. **`/logo.png`** - Site logo (200x60px, PNG, şeffaf arka plan)
2. **`/og-image.jpg`** - Social media görsel (1200x630px, JPG)

#### Orta Öncelik
3. **`/images/hero-bg.jpg`** - Ana sayfa arka plan
4. **`/images/investments/`** - Investment sayfa görselleri
5. **`/images/staking/`** - Staking sayfa görselleri

### Görsel Özellikleri

#### Logo (`logo.png`)
- **Boyut**: 200x60px
- **Format**: PNG (şeffaf arka plan)
- **Stil**: Minimalist, IBM Plex Mono font ile uyumlu
- **Renkler**: Siyah-beyaz veya renkli versiyonlar

#### Social Media Görsel (`og-image.jpg`)
- **Boyut**: 1200x630px (Open Graph standart)
- **Format**: JPG (optimize edilmiş)
- **İçerik**: Logo + "Invest Founders" + "Professional Investment Platform"
- **Renkler**: Sitenin renk paletinden

## 🔧 Konfigürasyon

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_token
NEXT_PUBLIC_FACEBOOK_APP_ID=your_facebook_app_id
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### Social Media Accounts

```typescript
// social.ts içinde güncelleyin
export const socialConfig = {
  twitter: {
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle"
  },
  facebook: {
    appId: "your_facebook_app_id",
    pageId: "your_facebook_page_id"
  },
  linkedin: {
    companyId: "your_linkedin_company_id"
  }
};
```

## 📊 SEO Özellikleri

### Anahtar Kelimeler

**Core Platform:**
- investment platform, startup funding, venture capital
- angel investors, founder investment, fundraising platform

**Crypto & Staking:**
- crypto investment, cryptocurrency, bitcoin investment
- ethereum staking, crypto staking, yield farming
- passive income crypto, delegated staking

**Asset Management:**
- portfolio management, wealth management, asset management
- investment strategy, risk management, diversification

### Structured Data

- **FinancialService** - Ana hizmet tanımı
- **Organization** - Şirket bilgileri
- **OfferCatalog** - Hizmet kataloğu
- **Service** - Her hizmet için ayrı tanım

## 🚀 Gelişmiş Kullanım

### Dinamik Metadata

```typescript
// pages/investments/[id]/page.tsx
import { generateMetadata } from '@/metadata';

export async function generateMetadata({ params }): Promise<Metadata> {
  const investment = await getInvestment(params.id);
  
  return generateMetadata({
    title: `${investment.title} - Investment Opportunity`,
    description: investment.description,
    url: `/investments/${investment.id}`,
    image: investment.image,
    type: 'article',
    author: investment.author
  });
}
```

### Conditional Metadata

```typescript
// pages/blog/[slug]/page.tsx
import { generateMetadata } from '@/metadata';

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    image: post.featuredImage,
    type: 'article',
    publishedTime: post.publishedAt,
    author: post.author.name,
    section: post.category,
    tags: post.tags
  });
}
```

## 🧪 Test ve Doğrulama

### Meta Tag Test Araçları

- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Google Rich Results Test**: https://search.google.com/test/rich-results

### SEO Audit Araçları

- **Google Search Console**: https://search.google.com/search-console
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: Chrome DevTools içinde
- **SEMrush**: https://www.semrush.com/

## 🔄 Güncelleme ve Bakım

### Düzenli Güncellemeler

1. **Keywords** - Yeni trend anahtar kelimeler ekleyin
2. **Social Media** - Platform değişikliklerini takip edin
3. **Structured Data** - Schema.org güncellemelerini kontrol edin
4. **Images** - Görsel kalitesini ve boyutlarını optimize edin

### Performance Monitoring

- **Core Web Vitals** - Google Search Console'da takip edin
- **Social Media Engagement** - Paylaşım performansını izleyin
- **Search Rankings** - Anahtar kelime sıralamalarını takip edin

## 📚 Kaynaklar

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview)
- [Schema.org](https://schema.org/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

## 🤝 Katkıda Bulunma

Metadata sistemi güncellemeleri için:

1. Yeni özellik eklerken `types.ts`'i güncelleyin
2. Test dosyalarını çalıştırın
3. Social media test araçlarını kullanın
4. Documentation'ı güncelleyin

---

**Invest Founders Metadata System** - Profesyonel SEO ve Social Media optimizasyonu için tasarlanmış modüler sistem.
