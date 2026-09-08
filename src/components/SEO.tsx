import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schemaJson?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'FB SEVEN TRAINING | Gimnasio de Alto Rendimiento en Bella Vista & Muñiz';
const DEFAULT_DESCRIPTION = 'Centro de alto rendimiento con 3 sedes en Zona Oeste (Pacífico, Ricchieri y Muñiz). Musculación, Biomecánica, Pilates Reformer, Boxeo y Funcional.';
const DEFAULT_OG_IMAGE = 'https://fbsevengym.com/images/logo-favicon.png';
const SITE_NAME = 'FB SEVEN TRAINING';

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = 'https://fbsevengym.com',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  schemaJson,
  noindex = false,
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
      let meta = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, value);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 2. Standard Meta
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

    // 3. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // 4. Open Graph Tags
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:locale', 'es_AR');

    // 5. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Schema injection
    const scriptId = 'fbseven-seo-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schemaJson) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schemaJson);
    } else if (script) {
      script.remove();
    }
  }, [title, description, canonicalUrl, ogImage, ogType, schemaJson, noindex]);

  return null;
};

export default SEO;
