import type { Metadata } from "next"
import Hero from "@/components/hero/Hero"
import ServicesGrid from "@/components/services/ServicesGrid"
import RegionGrid from "@/components/region-grid/RegionGrid"
import Suppliers from "@/components/suppliers/Suppliers"
import Locations from "@/components/locations/Locations"

import CTA from "@/components/cta/CTA"

export const metadata: Metadata = {
  title: "Streamline Exteriors | Premium Exterior Systems — BC & Alberta",
  description:
    "Family owned since 1994. Streamline Exteriors is BC and Alberta's premier exterior contractor — siding, gutters, windows, commercial facades, and renovation. Gentek certified. $10M insured. Serving Kelowna, Vernon, Salmon Arm, Revelstoke, and Calgary.",
  keywords: [
    "exterior contractor BC",
    "exterior contractor Alberta",
    "siding contractor Kelowna",
    "siding contractor Vernon",
    "siding contractor Salmon Arm",
    "gutters BC",
    "James Hardie installer BC",
    "Gentek certified renovator",
    "GutterGlove leaf guards",
    "commercial exterior contractor BC",
    "multifamily siding BC",
  ],
  openGraph: {
    title: "Streamline Exteriors | Premium Exterior Systems — BC & Alberta",
    description:
      "Family owned since 1994. Gentek certified. From residential estates to 50-unit strata complexes — one standard across BC and Alberta.",
    type: "website",
    url: "https://www.streamlineexteriors.ca",
    siteName: "Streamline Exteriors",
  },
  alternates: {
    canonical: "https://www.streamlineexteriors.ca",
  },
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Streamline Exteriors Ltd.",
  url: "https://www.streamlineexteriors.ca",
  logo: "https://www.streamlineexteriors.ca/logo.png",
  telephone: "+12508320610",
  email: "sales@streamlineexteriors.ca",
  foundingDate: "1994",
  description:
    "Premium exterior systems for residential and commercial projects across British Columbia and Alberta. Family owned since 1994.",
  address: [
    { "@type": "PostalAddress", addressLocality: "Salmon Arm", addressRegion: "BC", addressCountry: "CA" },
    { "@type": "PostalAddress", addressLocality: "Vernon", addressRegion: "BC", addressCountry: "CA" },
  ],
  areaServed: [
    { "@type": "City", name: "Kelowna", containedInPlace: { "@type": "Province", name: "British Columbia" } },
    { "@type": "City", name: "Vernon", containedInPlace: { "@type": "Province", name: "British Columbia" } },
    { "@type": "City", name: "Salmon Arm", containedInPlace: { "@type": "Province", name: "British Columbia" } },
    { "@type": "City", name: "Revelstoke", containedInPlace: { "@type": "Province", name: "British Columbia" } },
    { "@type": "City", name: "Calgary", containedInPlace: { "@type": "Province", name: "Alberta" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior Construction Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Siding & Cladding", url: "https://www.streamlineexteriors.ca/residential" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial & Multifamily Building Envelopes", url: "https://www.streamlineexteriors.ca/commercial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Installation & Guards", url: "https://www.streamlineexteriors.ca/gutters" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Renovation", url: "https://www.streamlineexteriors.ca/renovation" } },
    ],
  },
  sameAs: [
    "https://www.facebook.com/streamlineexteriorscanada/",
    "https://www.instagram.com/streamline.exteriors/",
    "https://www.linkedin.com/company/streamline-exteriors/",
  ],
}

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Streamline Exteriors",
  url: "https://www.streamlineexteriors.ca",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.streamlineexteriors.ca/projects?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <main className="bg-black">
        {/* 1 · Full-screen cinematic hero */}
        <Hero slides={[
          "/images/projects/real-residential-modern.jpg",
          "/images/projects/real-multifamily.jpg",
          "/images/projects/real-metal-siding.jpg",
          "/images/projects/real-residential-siding.jpg",
          "/images/projects/residential-lakehouse.jpg",
          "/images/projects/commercial-lakeside.jpg",
          "/images/projects/residential-cedar-snow.jpg",
          "/images/projects/residential-farmhouse.jpg",
          "/images/projects/residential-mixed-cladding.jpg",
        ]} />

        {/* 2 · Alternating full-bleed service cards */}
        <ServicesGrid />

        {/* 3 · Photo grid — real project photography */}
        <RegionGrid />

        {/* 5 · Regional locations map */}
        <Locations />

        {/* 6 · Partner / supplier marquee */}
        <Suppliers />

        {/* 7 · Final CTA with stats */}
        <CTA />
      </main>
    </>
  )
}
