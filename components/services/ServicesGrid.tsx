import Link from "next/link"

const SERVICES = [
  {
    id: "commercial",
    num: "01",
    href: "/commercial",
    label: "Commercial & Multifamily",
    headline: "Building Envelopes",
    sub: "Metal Panel · Rainscreen · ACM · Longboard · Strata · Low-Rise",
    body: "Full building envelope systems for commercial, institutional, strata, and multi-family developments. Longboard aluminum, ACM panel, metal rainscreen, and fibre cement — Step Code compliant, on schedule.",
    photo: "/images/projects/commercial-hotel.jpg",
    photoPos: "center 30%",
  },
  {
    id: "residential",
    num: "02",
    href: "/residential",
    label: "Residential",
    headline: "Siding & Cladding",
    sub: "James Hardie · LP SmartSide · Metal · Cedar · Vinyl",
    body: "Full exterior systems for single-family and custom homes. Fibre cement, engineered wood, metal cladding, and cedar — installed across the Okanagan, Shuswap, and Alberta since 1994.",
    photo: "/images/projects/residential-night.jpg",
    photoPos: "center 40%",
  },
  {
    id: "gutters",
    num: "03",
    href: "/gutters",
    label: "Gutters",
    headline: "Seamless Systems",
    sub: "GutterGlove · IceBreaker · Euro · Seamless",
    body: "Continuous seamless eavestroughs, GutterGlove micro-mesh guards, IceBreaker heated systems, and Euro-style architectural gutters. Canada's #1 GutterGlove distributor.",
    photo: "/images/projects/gutters-copper.jpg",
    photoPos: "center 50%",
  },
  {
    id: "renovation",
    num: "04",
    href: "/renovation",
    label: "Full Renovation",
    headline: "Complete Exterior",
    sub: "Gentek · Windows · Doors · Soffits · Siding",
    body: "Complete exterior transformations — siding replacement, window and door packages, soffits, fascia, and trim. Free computer-rendered visualization included before any commitment.",
    photo: "/images/projects/residential-farmhouse.jpg",
    photoPos: "center 35%",
  },
]

export default function ServicesGrid() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="pt-40 pb-16 px-6 sm:px-10 lg:px-20 xl:px-28 border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.44em] text-white/50">
                What We Do
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(56px, 8vw, 118px)" }}
            >
              Built For
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)", color: "rgba(0,0,0,0)" }}>
                Permanence.
              </span>
            </h2>
          </div>
          <p className="text-white/45 text-[14px] font-light leading-[1.78] tracking-wide max-w-[360px] sm:pb-2">
            Five services. One standard.<br />
            BC and Alberta since 1994.
          </p>
        </div>
      </section>

      {/* ── Services — full-bleed alternating split ── */}
      <section
        className="flex flex-col"
        style={{ gap: "1px", background: "rgba(255,255,255,0.05)" }}
      >
        {SERVICES.map((s, i) => {
          const photoRight = i % 2 === 1

          return (
            <Link
              key={s.id}
              href={s.href}
              className="group flex flex-col lg:flex-row bg-black overflow-hidden"
              style={{ minHeight: "clamp(440px, 72vh, 860px)" }}
            >
              {/* ── Photo ── */}
              <div
                className={`relative h-[62vw] max-h-[520px] lg:max-h-none lg:h-auto lg:w-1/2 shrink-0 overflow-hidden${photoRight ? " lg:order-2" : ""}`}
              >
                <img
                  src={s.photo}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  style={{ objectPosition: s.photoPos }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/08 transition-colors duration-700" />

                {/* Blue edge accent */}
                <div
                  className="absolute inset-y-0 w-[2px] bg-[#14008B] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={photoRight ? { right: 0 } : { left: 0 }}
                />

                {/* Index */}
                <span className="absolute bottom-6 left-6 font-mono text-[9px] tracking-[0.32em] text-white/22">
                  {s.num}
                </span>
              </div>

              {/* ── Content ── */}
              <div
                className={`relative flex flex-col justify-center flex-1 lg:w-1/2 overflow-hidden${photoRight ? " lg:order-1" : ""}`}
              >
                {/* Large watermark number */}
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-white/[0.028] leading-none tracking-[-0.04em] select-none pointer-events-none"
                  style={{ fontSize: "clamp(140px, 22vw, 320px)" }}
                  aria-hidden
                >
                  {s.num}
                </span>

                <div className="relative z-10 px-10 py-14 sm:px-14 lg:px-16 xl:px-20 2xl:px-24">

                  {/* Eyebrow */}
                  <div className="flex items-center gap-3 mb-7">
                    <div className="h-px w-5 shrink-0 bg-[#14008B]" />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.44em] text-[#14008B]">
                      {s.headline}
                    </span>
                  </div>

                  {/* Service name */}
                  <h3
                    className="font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-white mb-6"
                    style={{ fontSize: "clamp(52px, 6vw, 96px)" }}
                  >
                    {s.label}
                  </h3>

                  {/* Sub */}
                  <p className="text-white/25 text-[9px] font-medium uppercase tracking-[0.3em] mb-8">
                    {s.sub}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-white/[0.08] mb-8" />

                  {/* Body */}
                  <p className="text-white/50 text-[14px] font-light leading-[1.86] tracking-wide max-w-[400px] mb-10">
                    {s.body}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-white/25 group-hover:text-white/60 transition-colors duration-300">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.38em]">
                      Learn More
                    </span>
                    <span className="w-0 group-hover:w-7 h-px bg-white/30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 13 13"
                      fill="none"
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    >
                      <path
                        d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                </div>
              </div>

            </Link>
          )
        })}
      </section>
    </>
  )
}
