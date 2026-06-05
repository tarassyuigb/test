"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

const SUPPLIERS = [
  {
    id: "longboard",
    num: "01",
    name: "Longboard",
    logo: "/images/logos/longboard.png",
    category: "Aluminum Cladding",
    description:
      "Architectural aluminum cladding and rainscreen systems. Precision-engineered for demanding facades.",
  },
  {
    id: "allura",
    num: "02",
    name: "Allura",
    logo: "/images/logos/allura.png",
    category: "Fiber Cement Siding",
    description:
      "High-performance fiber cement siding built for the durability demands of Canadian climate.",
  },
  {
    id: "fisher",
    num: "03",
    name: "Fisher",
    logo: "/images/logos/fisher.svg",
    category: "Regional Supply",
    description:
      "Trusted exterior supply partner — ensuring product availability across every market we operate.",
  },
  {
    id: "convoy",
    num: "04",
    name: "Convoy Supply",
    logo: "/images/logos/convoy.svg",
    category: "Distribution",
    description:
      "Roofing and exterior distribution specialists supporting our BC and Alberta operations.",
  },
  {
    id: "james-hardie",
    num: "05",
    name: "James Hardie",
    logo: "/images/logos/james-hardie.svg",
    category: "Fiber Cement Systems",
    description:
      "The industry benchmark for fiber cement exteriors. HardiePlank. HardiePanel. Built to last.",
  },
  {
    id: "lp-smartside",
    num: "06",
    name: "LP SmartSide",
    logo: "/images/logos/lp-smartside.svg",
    category: "Engineered Wood",
    description:
      "Engineered wood siding and trim with exceptional dimensional stability and long-term performance.",
  },
]

function SupplierCard({
  supplier,
  index,
  isHovered,
  isDimmed,
  isInView,
  onEnter,
  onLeave,
}: {
  supplier: (typeof SUPPLIERS)[number]
  index: number
  isHovered: boolean
  isDimmed: boolean
  isInView: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <motion.div
      className="relative bg-black overflow-hidden cursor-default"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.12 + index * 0.07, duration: 0.8, ease: EASE }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Hover background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 60%, rgba(20,0,139,0.16) 0%, transparent 58%)",
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      />

      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#14008B] origin-top pointer-events-none"
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.38, ease: EASE }}
      />

      <div className="relative z-10 px-8 pt-8 pb-9 lg:px-10 lg:pt-9 lg:pb-10">
        {/* Top row: number + category */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <span className="font-mono text-[10px] tracking-[0.28em] text-white/[0.14]">
            {supplier.num}
          </span>
          <motion.span
            className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#14008B] text-right"
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            {supplier.category}
          </motion.span>
        </div>

        {/* Logo */}
        <div
          className="h-10 flex items-center mb-5"
          style={{
            opacity: isDimmed ? 0.08 : isHovered ? 1 : 0.42,
            transition: "opacity 0.28s ease",
          }}
        >
          <img
            src={supplier.logo}
            alt={supplier.name}
            className="max-h-full max-w-[180px] object-contain object-left"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Animated underline */}
        <motion.div
          className="h-px bg-[#14008B]/70 origin-left"
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.38, ease: EASE }}
        />

        {/* Description — reveals on hover */}
        <motion.p
          className="text-white/40 text-[12.5px] font-light leading-relaxed tracking-wide mt-4"
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
          transition={{ duration: 0.32, delay: isHovered ? 0.06 : 0, ease: EASE }}
        >
          {supplier.description}
        </motion.p>
      </div>

      {/* Border */}
      <motion.div
        className="absolute inset-0 border pointer-events-none"
        animate={{
          borderColor: isHovered
            ? "rgba(20,0,139,0.45)"
            : "rgba(255,255,255,0.055)",
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}

export default function SuppliersGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(sectionRef, { once: true, margin: "-12%" })
  const gridInView = useInView(gridRef, { once: true, margin: "-6%" })

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pt-24 pb-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
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

        {/* Grid */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.18, duration: 0.6, ease: EASE }}
        >
          <div className="border border-white/[0.055]">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ backgroundColor: "rgba(255,255,255,0.052)" }}
            >
              {SUPPLIERS.map((supplier, i) => (
                <SupplierCard
                  key={supplier.id}
                  supplier={supplier}
                  index={i}
                  isHovered={hoveredId === supplier.id}
                  isDimmed={hoveredId !== null && hoveredId !== supplier.id}
                  isInView={gridInView}
                  onEnter={() => setHoveredId(supplier.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

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
