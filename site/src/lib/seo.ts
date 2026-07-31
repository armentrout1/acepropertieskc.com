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
    logo: `${SITE.baseUrl}/brand/ace-logo.svg`,
    image: `${SITE.baseUrl}/og-default.svg`,
    sameAs: [SITE.googleBusinessProfileUrl],
    priceRange: "$$",
    foundingDate: SITE.buyerSince,
    description: SITE.defaultDescription,
    areaServed: [
      { "@type": "City", name: "Kansas City", addressRegion: "MO" },
      { "@type": "City", name: "Kansas City", addressRegion: "KS" },
      { "@type": "City", name: "Overland Park", addressRegion: "KS" },
      { "@type": "City", name: "Olathe", addressRegion: "KS" },
      { "@type": "City", name: "Shawnee", addressRegion: "KS" },
      { "@type": "City", name: "Lenexa", addressRegion: "KS" },
      { "@type": "City", name: "Independence", addressRegion: "MO" },
      { "@type": "City", name: "Lee's Summit", addressRegion: "MO" },
      { "@type": "City", name: "Blue Springs", addressRegion: "MO" },
      { "@type": "City", name: "Liberty", addressRegion: "MO" },
      {
        "@type": "PostalAddress",
        postalCode: "64131",
        addressLocality: "Kansas City",
        addressRegion: "MO",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneTel,
      contactType: "sales",
      areaServed: "Kansas City metro",
      availableLanguage: "English",
    },
  };

  if (SITE.phoneTel) {
    schema.telephone = SITE.phoneTel;
  }
  if (SITE.email) {
    schema.email = SITE.email;
  }

  return schema;
}

type FaqEntry = {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
};

function normalizeFaq(faq: FaqEntry): { question: string; answer: string } {
  return {
    question: faq.question ?? faq.q ?? "",
    answer: faq.answer ?? faq.a ?? "",
  };
}

/**
 * FAQPage JSON-LD schema
 */
export function faqJsonLd(faqs: FaqEntry[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => normalizeFaq(faq)).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Build FAQPage JSON-LD schema (alias for faqJsonLd)
 */
export function buildFaqPageJsonLd(faqs: FaqEntry[]): object {
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

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified = datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.baseUrl}/brand/ace-logo.svg`,
      },
    },
    mainEntityOfPage: buildCanonicalUrl(path),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType = "Real estate home buying service",
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: buildCanonicalUrl(path),
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.baseUrl,
      telephone: SITE.phoneTel,
    },
    areaServed: [
      { "@type": "City", name: "Kansas City", addressRegion: "MO" },
      { "@type": "City", name: "Kansas City", addressRegion: "KS" },
      { "@type": "City", name: "Overland Park", addressRegion: "KS" },
      { "@type": "City", name: "Olathe", addressRegion: "KS" },
      { "@type": "City", name: "Shawnee", addressRegion: "KS" },
      { "@type": "AdministrativeArea", name: "Johnson County", addressRegion: "KS" },
      { "@type": "AdministrativeArea", name: "Jackson County", addressRegion: "MO" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: "Kansas City metro",
      priceCurrency: "USD",
      url: buildCanonicalUrl(path),
    },
  };
}
