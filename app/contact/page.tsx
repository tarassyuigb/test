import type { Metadata } from "next"
import { BUSINESS, CITIES, CREDENTIALS } from "@/lib/site-content"
import ContactForm from "@/components/contact/ContactForm"
import FadeIn from "@/components/ui/FadeIn"
import FAQGrid from "@/components/ui/FAQGrid"

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas does Streamline Exteriors serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve six markets across BC and Alberta: Kelowna, Vernon, Salmon Arm, Revelstoke, and Calgary. For projects near these areas, contact us — we assess feasibility on a project-by-project basis.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can Streamline Exteriors provide an estimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most estimates are completed within three to five business days of the initial site assessment. For commercial and multi-family projects, the timeline depends on scope and documentation requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Does Streamline Exteriors provide design visualization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For renovation projects, we photograph your property and produce computer-rendered visualizations in your chosen materials and colours — included at no charge before any commitment is made.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications does Streamline Exteriors carry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are Gentek-certified premium renovators, LePage Quad Max seal certified, Step Code compliant installers, and We carry $10M liability insurance and continuous WCB coverage.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Contact Streamline Exteriors | Free Exterior Estimate — BC & Alberta",
  description:
    "Get a free exterior estimate from Streamline Exteriors. Serving Kelowna, Vernon, Salmon Arm, Revelstoke, Enderby, and Calgary. Call (250) 832-0610 or send us a message.",
  keywords: [
    "contact Streamline Exteriors",
    "exterior estimate BC",
    "free siding estimate Kelowna",
    "exterior contractor estimate BC",
    "gutters estimate BC",
    "exterior renovation quote BC",
  ],
  alternates: { canonical: "https://www.streamlineexteriors.ca/contact" },
  openGraph: {
    title: "Contact Streamline Exteriors | Free Exterior Estimate — BC & Alberta",
    description:
      "Get a free exterior estimate. Serving Kelowna, Vernon, Salmon Arm, Revelstoke, Enderby, and Calgary. Call (250) 832-0610.",
    type: "website",
    url: "https://www.streamlineexteriors.ca/contact",
  },
}

const OFFICES = [
  {
    city: "Salmon Arm",
    province: "BC",
    label: "Primary Office",
    phone: BUSINESS.phone.primary,
    href: BUSINESS.phone.primaryHref,
    note: "Serving Salmon Arm, Revelstoke, and the Shuswap",
  },
  {
    city: "Vernon",
    province: "BC",
    label: "Vernon Office",
    phone: BUSINESS.phone.vernon,
    href: BUSINESS.phone.vernonHref,
    note: "Serving Vernon, Coldstream, Armstrong, and Enderby",
  },
]

const FAQ = [
  {
    q: "What areas do you serve?",
    a: "We serve six markets across BC and Alberta: Kelowna, Vernon, Salmon Arm, Revelstoke, and Calgary. For projects near these areas, contact us — we assess feasibility on a project-by-project basis.",
  },
  {
    q: "How quickly can you provide an estimate?",
    a: "Most estimates are completed within three to five business days of the initial site assessment. For commercial and multi-family projects, the timeline depends on scope and documentation requirements.",
  },
  {
    q: "Do you provide design visualization?",
    a: "Yes. For renovation projects, we photograph your property and produce computer-rendered visualizations in your chosen materials and colours — included at no charge before any commitment is made.",
  },
  {
    q: "What certifications do you carry?",
    a: "We are Gentek-certified premium renovators, LePage Quad Max seal certified, Step Code compliant installers, and We carry $10M liability insurance and continuous WCB coverage.",
  },
]

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-20 border-b border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 18% 70%, rgba(20,0,139,0.14) 0%, rgba(0,0,0,0) 52%), radial-gradient(ellipse at 82% 20%, rgba(26,16,84,0.08) 0%, rgba(0,0,0,0) 48%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Free Estimates · BC & Alberta
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <h1
                className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-6"
                style={{ fontSize: "clamp(48px, 7vw, 112px)" }}
              >
                Get in
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                    color: "rgba(0,0,0,0)",
                  }}
                >
                  Touch.
                </span>
              </h1>
              <p className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[500px] mb-8 lg:mb-0">
                Tell us about your project — scope, location, and timeline. We'll be in touch within one business day to discuss next steps.
              </p>
              {/* Mobile quick-call links */}
              <div className="flex flex-col gap-2 lg:hidden">
                {OFFICES.map((o) => (
                  <a key={o.city} href={o.href} className="flex items-center gap-3 text-white text-[13px] font-light tracking-wide hover:text-white transition-colors duration-200">
                    <div className="w-[3px] h-[3px] rounded-full bg-[#14008B] shrink-0" />
                    <span>{o.phone}</span>
                    <span className="text-white text-[11px]">· {o.city}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-1">
              {OFFICES.map((o) => (
                <a
                  key={o.city}
                  href={o.href}
                  className="group flex items-center gap-5 border border-white/[0.06] px-7 py-5 hover:border-white/[0.14] transition-colors duration-300"
                >
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.36em] text-white mb-1">{o.label}</p>
                    <p className="text-white text-[14px] font-light tracking-wide group-hover:text-white transition-colors duration-200">{o.phone}</p>
                    <p className="text-white text-[11px] font-light tracking-wide mt-0.5">{o.city}, {o.province}</p>
                  </div>
                  <svg width="10" height="10" viewBox="0 0 13 13" fill="none" className="text-white group-hover:text-[#14008B] transition-colors duration-200 ml-auto shrink-0">
                    <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-white/[0.05]">
            {CREDENTIALS.map((cred) => (
              <div key={cred} className="py-5 px-4 first:pl-0 last:pr-0">
                <div className="w-[3px] h-[3px] rounded-full bg-[#14008B] mb-3" />
                <p className="text-white text-[11px] font-light leading-snug tracking-wide">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Details ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">

            {/* Form */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                  Project Enquiry
                </span>
              </div>
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="space-y-6">

              {/* Offices */}
              <div className="border border-white/[0.06] p-7">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-6">
                  Offices
                </p>
                <div className="space-y-6">
                  {OFFICES.map((o) => (
                    <div key={o.city}>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white mb-2">{o.label}</p>
                      <a href={o.href} className="text-white text-[13.5px] font-light tracking-wide hover:text-white transition-colors duration-200 block mb-1">
                        {o.phone}
                      </a>
                      <p className="text-white text-[11px] font-light tracking-wide">{o.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="border border-white/[0.06] p-7">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-4">
                  Email
                </p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-white text-[13px] font-light tracking-wide hover:text-white transition-colors duration-200"
                >
                  {BUSINESS.email}
                </a>
              </div>

              {/* Service area */}
              <div className="border border-white/[0.06] p-7">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-5">
                  Service Area
                </p>
                <div className="space-y-2">
                  {CITIES.map((city) => (
                    <div key={city.id} className="flex items-center justify-between">
                      <span className="text-white text-[12px] font-light tracking-wide">{city.name}</span>
                      <span className="text-white text-[10px] uppercase tracking-[0.24em]">{city.province}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      <FAQGrid items={FAQ} label="Frequently Asked" bordered={false} />

    </main>
  )
}
