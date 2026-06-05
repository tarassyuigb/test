import type { Metadata } from "next"
import Link from "next/link"
import { BUSINESS, CREDENTIALS } from "@/lib/site-content"
import FadeIn from "@/components/ui/FadeIn"
import FAQGrid from "@/components/ui/FAQGrid"
import RelatedServices from "@/components/ui/RelatedServices"
import LocationsGrid from "@/components/ui/LocationsGrid"
import PhotoShowcase from "@/components/ui/PhotoShowcase"

const MF_FAQ = [
  {
    q: "Can you coordinate with strata councils and property managers?",
    a: "Yes. Streamline Exteriors is experienced working within strata governance structures — presenting scope proposals to strata councils, providing documentation for special levy approvals, and coordinating day-to-day communication through designated property managers. We understand the layers of approval that multi-family exterior work requires.",
  },
  {
    q: "What insurance and WCB documentation do you carry for strata work?",
    a: "We carry $15M commercial liability insurance and maintain continuous WCB (WorkSafeBC) coverage. These meet the documentation threshold required by strata corporations and property management companies before exterior work can begin. COI and WCB clearance letters are available on request.",
  },
  {
    q: "How do you handle Step Code compliance on multi-family projects?",
    a: "Streamline Exteriors is a certified Step Code compliant installer. For new construction and renovation projects, we specify exterior insulation and vapour barrier systems that meet the relevant Step Code requirements — including thermal bridge detailing and envelope performance documentation needed for permit submissions.",
  },
  {
    q: "Can you work in phases around occupied units?",
    a: "Yes. Phased installation around occupied buildings is standard practice for us. We develop a detailed sequencing plan with property managers before mobilization — scheduling trades to minimize disruption to residents, maintaining safe pedestrian access, and notifying affected units in advance of each phase.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MF_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export const metadata: Metadata = {
  title: "Multifamily Exterior Contractor BC & Alberta | Streamline Exteriors",
  description:
    "Exterior siding, gutters, and building envelope systems for multi-family residential developments across BC and Alberta. Step Code compliant. Streamline Exteriors since 1994.",
  keywords: [
    "multifamily exterior contractor BC",
    "strata siding contractor",
    "townhouse exterior renovation BC",
    "apartment building siding BC",
    "multifamily gutters BC",
    "Step Code exterior insulation BC",
  ],
  alternates: { canonical: "https://www.streamlineexteriors.ca/multifamily" },
  openGraph: {
    title: "Multifamily Exterior Contractor BC & Alberta | Streamline Exteriors",
    description:
      "Building envelope systems for multi-family developments across BC and Alberta. Step Code compliant. Strata coordination. $15M insured. Streamline Exteriors since 1994.",
    type: "website",
    url: "https://www.streamlineexteriors.ca/multifamily",
  },
}

const MULTIFAMILY_SCOPE = [
  { name: "Strata Exterior Renovation", body: "Complete re-cladding of strata complexes and townhouse developments. We work within strata approval processes, coordinate with property managers, and schedule around occupied units to minimize disruption." },
  { name: "Low-Rise Apartment Envelopes", body: "4–6 storey wood-frame apartment buildings are a core Streamline specialty. Full scope: vapour barrier, exterior insulation, cladding, soffits, gutters, and downspouts — with Step Code compliance documentation." },
  { name: "New Construction Packages", body: "Early involvement on new multi-family construction projects. We work with developers and general contractors from specification through to installation — keeping envelope scope on time and on budget." },
  { name: "Building Envelope Assessment", body: "Independent assessment of existing multi-family envelopes for remediation planning or pre-purchase due diligence. We identify moisture ingress points, failed details, and envelope vulnerabilities before scope definition." },
]

export default function MultifamilyPage() {
  return (
    <main className="bg-black min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 border-b border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/heroes/multifamily.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-black/72" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 68%, rgba(20,0,139,0.16) 0%, rgba(0,0,0,0) 52%), radial-gradient(ellipse at 82% 20%, rgba(26,16,84,0.10) 0%, rgba(0,0,0,0) 48%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
              Multifamily Exteriors · BC & Alberta
            </span>
          </div>
          <h1
            className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(48px, 7.5vw, 124px)" }}
          >
            Strata.
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                color: "rgba(0,0,0,0)",
              }}
            >
              Fully Managed.
            </span>
          </h1>
          <p className="text-white/45 text-[15px] font-light leading-[1.72] tracking-wide max-w-[560px] mb-10">
            Large-scale building envelope systems for strata complexes, low-rise apartments, and multi-family developments across BC and Alberta. Step Code compliant. Phased delivery around occupied buildings.
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 mb-10 border-t border-white/[0.05] pt-8">
            {[
              { v: "$15M", l: "Liability Coverage" },
              { v: "6", l: "BC & Alberta Locations" },
              { v: "Step Code", l: "Certified Installer" },
              { v: "1994", l: "Multi-Family Experience" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display font-black text-white uppercase leading-none tracking-[-0.02em] mb-1" style={{ fontSize: "clamp(16px, 2vw, 28px)" }}>
                  {s.v}
                </p>
                <p className="text-white/32 text-[10px] font-medium uppercase tracking-[0.26em]">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-5 overflow-hidden border border-[#14008B] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Discuss Your Development</span>
              <span className="relative w-9 h-9 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <a
              href={BUSINESS.phone.primaryHref}
              className="inline-flex items-center gap-3 border border-white/[0.1] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white/50 hover:text-white hover:border-white/25 transition-all duration-300"
            >
              {BUSINESS.phone.primary}
            </a>
          </div>
        </div>
      </section>

      {/* ── Scope ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
          <FadeIn>
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px w-10 bg-[#14008B]" />
            <h2 className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
              Scope of Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.05]">
            {MULTIFAMILY_SCOPE.map((ms, i) => (
              <div key={i} className="bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white/14">0{i + 1}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3 className="font-display font-bold text-white uppercase text-[14px] tracking-[0.06em] mb-4">
                  {ms.name}
                </h3>
                <p className="text-white/38 text-[12.5px] font-light leading-relaxed tracking-wide">
                  {ms.body}
                </p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      <PhotoShowcase photos={[
        { src: "/images/heroes/multifamily.jpg", label: "Multifamily", caption: "Strata complex · Vernon, BC" },
        { src: "/images/projects/siding-metal-3.jpg", label: "Mixed Cladding · Low-Rise" },
        { src: "/images/projects/siding-fibre-cement-4.jpg", label: "Multi-Unit · Kelowna" },
      ]} />

      {/* ── Why Streamline ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
                  Why Streamline
                </span>
              </div>
              <p className="text-white/42 text-[14.5px] font-light leading-[1.78] tracking-wide mb-6">
                Streamline Exteriors has built its commercial reputation on consistency — the same product quality, installation standard, and accountability across every unit on a complex. We understand the coordination demands of multi-family work: strata councils, property managers, occupied buildings, and general contractors all require a level of professionalism that goes beyond typical residential installation.
              </p>
              <p className="text-white/32 text-[13.5px] font-light leading-[1.78] tracking-wide">
                Our large installation teams allow us to work efficiently on larger projects without sacrificing quality. We carry $15M liability insurance and maintain continuous WCB coverage — the documentation that property managers and developers require before work begins.
              </p>
            </div>
            <div className="border border-white/[0.06] p-8">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white/26 mb-6">
                Credentials & Coverage
              </p>
              <ul className="space-y-4">
                {CREDENTIALS.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-[3px] h-[3px] rounded-full bg-[#14008B] mt-[7px] shrink-0" />
                    <span className="text-white/40 text-[12.5px] font-light leading-relaxed tracking-wide">{c}</span>
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
                Ready to discuss your development?
              </p>
              <p className="text-white/35 text-[11.5px] font-light tracking-wide">
                Step Code certified · $15M insured · Strata-experienced · Free estimate
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
                className="inline-flex items-center justify-center border border-white/[0.1] px-7 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white/50 hover:text-white hover:border-white/25 transition-all duration-300"
              >
                {BUSINESS.phone.primary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQGrid items={MF_FAQ} label="Strata Questions" />

      <LocationsGrid />

      <RelatedServices serviceIds={["renovation", "gutters"]} />

      {/* ── CTA ── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
        <FadeIn className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-[540px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
                Multi-Family Projects
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.9] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 72px)" }}
            >
              Scope Your
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
                Development.
              </span>
            </h2>
            <p className="text-white/40 text-[14px] font-light leading-[1.72] tracking-wide">
              Early contractor involvement on multi-family exterior scopes keeps envelope budgets accurate and reduces re-work. Contact us to discuss your project.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:min-w-[260px]">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Start a Conversation</span>
              <span className="relative w-9 h-9 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <div className="pt-2 border-t border-white/[0.06]">
              <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] mb-2">Direct line</p>
              <a href={BUSINESS.phone.primaryHref} className="text-white/45 text-[13px] tracking-wide hover:text-white transition-colors duration-300">
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
