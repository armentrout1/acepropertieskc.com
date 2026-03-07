import { SITE } from "./siteConfig";

/**
 * Build a canonical URL from a path, respecting trailingSlash="always"
 */
export function buildCanonicalUrl(path: string): string {
  const base = SITE.baseUrl.replace(/\/$/, "");
  let normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (!normalizedPath.endsWith("/")) {
    normalizedPath += "/";
  }
  if (normalizedPath === "/") {
    return `${base}/`;
  }
  return `${base}${normalizedPath}`;
}

/**
 * WebSite JSON-LD schema
 */
export function webSiteJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.baseUrl,
  };
}

/**
 * LocalBusiness JSON-LD schema (service-area business, no physical address)
 */
export function localBusinessJsonLd(): object {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.baseUrl,
    areaServed: [
      {
        "@type": "City",
        name: "Kansas City",
        addressRegion: "MO",
      },
      {
        "@type": "PostalAddress",
        postalCode: "64131",
        addressLocality: "Kansas City",
        addressRegion: "MO",
      },
    ],
  };

  if (SITE.phoneTel) {
    schema.telephone = SITE.phoneTel;
  }
  if (SITE.email) {
    schema.email = SITE.email;
  }

  return schema;
}

/**
 * FAQPage JSON-LD schema
 */
export function faqJsonLd(faqs: { q: string; a: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * Build FAQPage JSON-LD schema (alias for faqJsonLd)
 */
export function buildFaqPageJsonLd(faqs: { q: string; a: string }[]): object {
  return faqJsonLd(faqs);
}

export function buildBreadcrumbList(items: { name: string; item: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: buildCanonicalUrl(entry.item),
    })),
  };
}
