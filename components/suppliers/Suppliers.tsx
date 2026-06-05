"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

const LOGOS = [
  { id: "longboard",    src: "/images/logos/longboard.png",    alt: "Longboard" },
  { id: "allura",       src: "/images/logos/allura.png",        alt: "Allura" },
  { id: "fisher",       src: "/images/logos/fisher.svg",        alt: "Fisher" },
  { id: "convoy",       src: "/images/logos/convoy.svg",        alt: "Convoy Supply" },
  { id: "james-hardie", src: "/images/logos/james-hardie.svg",  alt: "James Hardie" },
  { id: "lp-smartside", src: "/images/logos/lp-smartside.svg",  alt: "LP SmartSide" },
]

// ─── Infinite logo marquee row ─────────────────────────────────────────────────

function LogoRow({ reverse = false, speed = 38 }: { reverse?: boolean; speed?: number }) {
  // Triple the items so the seam never shows at any viewport width
  const items = [...LOGOS, ...LOGOS, ...LOGOS]
  const from = reverse ? "-66.66%" : "0%"
  const to   = reverse ? "-33.33%" : "-33.33%"

  return (
    <div className="overflow-hidden border-b border-white/[0.04]">
      <motion.div
        className="flex items-center"
        style={{ willChange: "transform" }}
        animate={{ x: [from, to] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center px-14 py-7 border-r border-white/[0.04] group"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-7 w-auto object-contain transition-all duration-500 group-hover:opacity-90"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.38 }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Suppliers() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerInView = useInView(sectionRef, { once: true, margin: "-12%" })

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden border-t border-white/[0.04]">

      {/* ── Section header ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pt-24 pb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-5"
              initial={{ opacity: 0, x: -14 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.72, ease: EASE }}
            >
              <div className="h-px w-10 shrink-0 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
                Trusted Partners
              </span>
            </motion.div>

            <motion.h2
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(44px, 5.2vw, 84px)" }}
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.82, ease: EASE }}
            >
              Built With<br className="hidden sm:block" /> The Best
            </motion.h2>
          </div>

          <motion.p
            className="text-white/40 text-[14px] font-light leading-[1.74] tracking-wide max-w-[340px] lg:text-right"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.82, ease: EASE }}
          >
            We don't compromise on materials. Every product we specify is chosen for performance,
            longevity, and architectural integrity.
          </motion.p>
        </div>
      </div>

      {/* ── Infinite logo marquee — two rows ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.28, duration: 0.8, ease: EASE }}
        className="border-t border-white/[0.04]"
      >
        <LogoRow speed={36} />
        <LogoRow reverse speed={44} />
      </motion.div>

      {/* ── Bottom strip ── */}
      <motion.div
        className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/[0.04]"
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
      >
        <p className="text-white/22 text-[11.5px] font-light leading-relaxed tracking-wide max-w-[400px]">
          Manufacturer-approved installation across all product lines.
          Warranty-backed on every project.
        </p>

        <Link
          href="/residential"
          className="group inline-flex items-center gap-3 shrink-0 text-white/38 text-[11px] font-semibold uppercase tracking-[0.28em] hover:text-white transition-colors duration-300"
        >
          <span className="relative">
            View Siding Systems
            <span className="absolute -bottom-px left-0 h-px w-0 bg-[#14008B] group-hover:w-full transition-all duration-300 ease-out" />
          </span>
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>

      {/* Section ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(20,0,139,0.07) 0%, transparent 55%)",
        }}
      />
    </section>
  )
}
