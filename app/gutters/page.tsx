import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, BUSINESS } from "@/lib/site-content"
import FadeIn from "@/components/ui/FadeIn"
import FAQGrid from "@/components/ui/FAQGrid"
import RelatedServices from "@/components/ui/RelatedServices"
import LocationsGrid from "@/components/ui/LocationsGrid"
import PhotoShowcase from "@/components/ui/PhotoShowcase"

const service = SERVICES.find((s) => s.id === "gutters")!

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  keywords: service.seo.keywords,
  alternates: { canonical: "https://www.streamlineexteriors.ca/gutters" },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    type: "website",
    url: "https://www.streamlineexteriors.ca/gutters",
  },
}

const GUTTER_FAQ = [
  {
    q: "What is the difference between seamless and sectional gutters?",
    a: "Sectional gutters are joined at multiple seams along the eave — every joint is a future leak point. Seamless continuous gutters are formed on-site to the exact length of your roofline, with no joints between corners. This eliminates the primary failure point in traditional eavestrough systems. All Streamline gutter installations are continuous seamless.",
  },
  {
    q: "What is GutterGlove and how does it prevent clogs?",
    a: "GutterGlove is a stainless-steel micro-mesh leaf guard rated #1 by Consumer Reports. The mesh is fine enough to block pine needles, seeds, and roof granules while allowing water to pass through. Streamline Exteriors is  — the 25-year clog-free guarantee is backed by our installation volume and experience.",
  },
  {
    q: "Do you offer gutter maintenance, repair, and seasonal cleaning?",
    a: "Yes. We offer seasonal cleaning programs, gutter re-sloping, joint re-sealing, and full gutter replacement. We can also guarantee your existing gutter system against snow and ice damage — contact us to assess your current installation.",
  },
  {
    q: "How do IceBreaker heated gutters prevent ice damming?",
    a: "IceBreaker uses a GutterGlove guard frame with an embedded Nu-Heat cable system that creates a micro-climate inside the gutter — keeping it above freezing during cold snaps. Unlike roof cables, IceBreaker protects the gutter and downspout specifically, preventing ice dam formation at the most vulnerable point of the roofline.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GUTTER_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seamless Gutter Installation & GutterGlove Guard",
  provider: {
    "@type": "LocalBusiness",
    name: "Streamline Exteriors Ltd.",
    telephone: "+12508320610",
    url: "https://www.streamlineexteriors.ca",
  },
  areaServed: ["Kelowna", "Vernon", "Salmon Arm", "Revelstoke", "Calgary"],
  description:
    "Seamless continuous gutters, GutterGlove micro-mesh guards, IceBreaker heated systems, and Euro gutters across BC and Alberta. Over 1 million linear feet installed since 1994.",
  serviceType: "Seamless Gutter Installation",
  url: "https://www.streamlineexteriors.ca/gutters",
}

const GUTTER_SYSTEMS = [
  {
    name: "Continuous Seamless",
    sub: "Alu-Rex DoublePro® & T-Rex®",
    body: "No joints between corners means no future leak points. Continuous seamless gutters are formed on-site to the exact length of your eave. We install with Alu-Rex continuous hanger systems — no spikes, no sag.",
  },
  {
    name: "GutterGlove Guard",
    sub: "Stainless micro-mesh · 25-yr guarantee",
    body: "Canada's #1 distributor of GutterGlove — the top-rated gutter guard by Consumer Reports. Anodized aluminum frame with stainless-steel micro-mesh. Eliminates cleaning. Rated for heavy debris and high-snowload environments.",
  },
  {
    name: "IceBreaker Heated",
    sub: "Nu-Heat cable system",
    body: "The permanent solution for ice damming. GutterGlove IceBreaker creates a micro-climate inside the gutter using a Nu-Heat cable system — keeps gutters open through freeze cycles and eliminates ice dam formation at the roofline.",
  },
  {
    name: "Euro Gutter",
    sub: "Copper · Zinc · Steel",
    body: "European-style non-continuous gutter systems with exterior hanger brackets for architectural residential and heritage applications. Available in copper, zinc, powder-coated steel, and galvanized steel.",
  },
  {
    name: "Snow Stops",
    sub: "Roof-mounted snow guards",
    body: "Colour-matched snow bars and roof clamps — non-penetrating options available — that hold snow on susceptible roof pitches, preventing damage to gutters, railings, lower roofs, and people below.",
  },
  {
    name: "Repair & Maintenance",
    sub: "Seasonal programs available",
    body: "Gutter evaluation, re-sloping, leak repair, and seasonal cleaning. We can guarantee your gutter system against snow and ice damage. Standard 5-year warranty; lifetime warranty available on new installations.",
  },
]

export default function GuttersPage() {
  return (
    <main className="bg-black min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 border-b border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/projects/gutters-euro-chalet-snow.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />
        <div className="absolute inset-0 bg-black/72" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 65%, rgba(20,0,139,0.16) 0%, rgba(0,0,0,0) 52%), radial-gradient(ellipse at 84% 22%, rgba(26,16,84,0.10) 0%, rgba(0,0,0,0) 48%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Gutter Systems · All 6 Locations
            </span>
          </div>
          <h1
            className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(52px, 8vw, 130px)" }}
          >
            No Leaks.
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                color: "rgba(0,0,0,0)",
              }}
            >
              Ever.
            </span>
          </h1>
          <p className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[560px] mb-10">
            {service.summary}
          </p>

          {/* Proof stats */}
          <div className="flex flex-wrap gap-8 mb-10 border-t border-white/[0.05] pt-8">
            {[
              { v: "1M+", l: "Linear Feet Installed" },
              { v: "30+", l: "Years in the Shuswap & Okanagan" },
              { v: "#1", l: "GutterGlove Distributor in Canada" },
              { v: "25yr", l: "Clog-Free Guarantee on GutterGlove" },
            ].map((s) => (
              <div key={s.l}>
                <p
                  className="font-display font-black text-white uppercase leading-none tracking-[-0.02em] mb-1"
                  style={{ fontSize: "clamp(20px, 2.4vw, 34px)" }}
                >
                  {s.v}
                </p>
                <p className="text-white text-[10px] font-medium uppercase tracking-[0.26em]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-5 overflow-hidden border border-[#14008B] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Get a Gutter Quote</span>
              <span className="relative w-9 h-9 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <a
              href={BUSINESS.phone.primaryHref}
              className="inline-flex items-center gap-3 border border-white/[0.1] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/25 transition-all duration-300"
            >
              {BUSINESS.phone.primary}
            </a>
          </div>
        </div>
      </section>

      {/* ── Systems grid ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
          <FadeIn>
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px w-10 bg-[#14008B]" />
            <h2 className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Gutter Systems & Products
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {/* Featured first card — Continuous Seamless is the core product */}
            <div className="sm:col-span-2 bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[9px] tracking-[0.28em] text-white">01</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#14008B] opacity-60">Core System</span>
              </div>
              <h3 className="font-display font-bold text-white uppercase text-[18px] tracking-[0.05em] mb-1.5">
                {GUTTER_SYSTEMS[0].name}
              </h3>
              <p className="text-[#14008B] text-[9px] font-semibold uppercase tracking-[0.32em] mb-5 opacity-70">
                {GUTTER_SYSTEMS[0].sub}
              </p>
              <p className="text-white text-[13px] font-light leading-relaxed tracking-wide max-w-[660px]">
                {GUTTER_SYSTEMS[0].body}
              </p>
            </div>

            {/* Remaining 5 systems */}
            {GUTTER_SYSTEMS.slice(1).map((gs, i) => (
              <div key={i} className="bg-black p-8 lg:p-9 hover:bg-[#030018] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white">0{i + 2}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3 className="font-display font-bold text-white uppercase text-[14px] tracking-[0.06em] mb-1.5">
                  {gs.name}
                </h3>
                <p className="text-[#14008B] text-[9px] font-semibold uppercase tracking-[0.32em] mb-4 opacity-70">
                  {gs.sub}
                </p>
                <p className="text-white text-[12.5px] font-light leading-relaxed tracking-wide">
                  {gs.body}
                </p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      <PhotoShowcase photos={[
        { src: "/images/projects/gutters-copper-crown-closeup.jpg", label: "Copper Crown Mould", caption: "Crown mould profile · Copper" },
        { src: "/images/projects/gutters-colonial-farmhouse.jpg", label: "White Farmhouse Estate", caption: "Seamless system · Okanagan" },
        { src: "/images/projects/gutters-euro-chalet-snow.jpg", label: "Euro Round · Mountain Chalet", caption: "Black euro · Cedar chalet" },
      ]} />

      {/* ── Full description ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                  Our Approach
                </span>
              </div>
              {service.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-white text-[14px] font-light leading-[1.78] tracking-wide mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
            <div className="border border-white/[0.06] p-8">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-7">
                Every Installation Includes
              </p>
              <ul className="space-y-5">
                {service.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <div className="w-[3px] h-[3px] rounded-full bg-[#14008B] mt-[7px] shrink-0" />
                    <span className="text-white text-[13px] font-light leading-relaxed tracking-wide">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="bg-[#030018] border-y border-[#14008B]/15">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-display font-black text-white uppercase tracking-[-0.01em] mb-1.5" style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}>
                
              </p>
              <p className="text-white text-[11.5px] font-light tracking-wide">
                25-year clog-free guarantee · Seamless installation · All 6 locations
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-7 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Get a Free Estimate</span>
                <span className="relative w-7 h-7 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <svg width="10" height="10" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <a
                href={BUSINESS.phone.primaryHref}
                className="inline-flex items-center justify-center border border-white/[0.1] px-7 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/25 transition-all duration-300"
              >
                {BUSINESS.phone.primary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQGrid items={GUTTER_FAQ} label="Gutter Questions" />

      <LocationsGrid />

      <RelatedServices serviceIds={["residential", "renovation"]} />

      {/* ── CTA ── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
        <FadeIn className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Free Estimates
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.9] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 72px)" }}
            >
              Gutters That
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
                Last Decades.
              </span>
            </h2>
            <p className="text-white text-[14px] font-light leading-[1.72] tracking-wide">
              Over one million linear feet installed since 1994. We know what works — and we back it with a standard 5-year warranty.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:min-w-[260px]">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Get Gutter Quote</span>
              <span className="relative w-9 h-9 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <div className="pt-2 border-t border-white/[0.06]">
              <p className="text-white text-[10px] uppercase tracking-[0.3em] mb-2">Or call directly</p>
              <a href={BUSINESS.phone.primaryHref} className="text-white text-[13px] tracking-wide hover:text-white transition-colors duration-300">
                {BUSINESS.phone.primary}
              </a>
            </div>
          </div>
        </FadeIn>
        </div>
      </section>

    </main>
  )
}
