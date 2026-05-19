import { site, services } from "@/lib/site";

const BASE_URL = "https://www.speedmax.my";

/**
 * Renders Organization + LocalBusiness JSON-LD into the document head.
 * Used by the root layout — present on every page so crawlers always
 * have the business identity to attach to whatever page they're indexing.
 */
export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    foundingDate: String(site.foundedYear),
    email: site.email,
    telephone: site.phoneRaw,
    faxNumber: site.fax,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.city.replace(/[^\d]/g, ""),
      addressCountry: "MY",
    },
    sameAs: [site.social.facebook, site.social.linkedin].filter(
      (u) => u && u !== "#",
    ),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: site.legalName,
    image: `${BASE_URL}/logo.png`,
    url: BASE_URL,
    telephone: site.phoneRaw,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.5535,
      longitude: 103.7521,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Malaysia" },
      { "@type": "Country", name: "Singapore" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Capabilities",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: `${BASE_URL}/products/${s.slug}`,
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: site.name,
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-MY",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
