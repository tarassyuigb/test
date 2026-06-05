"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

// ─── Data ─────────────────────────────────────────────────────────────────────

type Stat = { value: string; label: string }

type Project = {
  id: string
  num: string
  titleLines: string[]
  location: string
  type: string
  year: string
  scope: string
  stats: Stat[]
  image: string
}

const PROJECTS: Project[] = [
  {
    id: "kelowna-commercial",
    num: "01",
    titleLines: ["Kelowna", "Mixed-Use"],
    location: "Kelowna, BC",
    type: "Commercial",
    year: "2024",
    scope:
      "Full building envelope replacement across 18,400 sq/ft. LP SmartSide cladding systems, James Hardie accent panels, custom aluminum trim.",
    stats: [
      { value: "18,400", label: "Sq Ft" },
      { value: "14 wks", label: "Duration" },
      { value: "2024", label: "Completed" },
    ],
    image: "/images/heroes/commercial.jpg",
  },
  {
    id: "vernon-estate",
    num: "02",
    titleLines: ["Vernon", "Estate"],
    location: "Vernon, BC",
    type: "Residential",
    year: "2024",
    scope:
      "Complete exterior transformation. Longboard aluminum cladding, triple-pane window package, seamless gutter system throughout.",
    stats: [],
    image: "/images/projects/siding-fibre-cement-9.jpg",
  },
  {
    id: "calgary-strata",
    num: "03",
    titleLines: ["Calgary", "Strata"],
    location: "Calgary, AB",
    type: "Multifamily",
    year: "2023",
    scope:
      "96-unit strata complex exterior renewal. Allura fiber cement system, new roofing membrane, full scaffolding operation.",
    stats: [],
    image: "/images/heroes/multifamily.jpg",
  },
  {
    id: "revelstoke-chalet",
    num: "04",
    titleLines: ["Revelstoke", "Mountain Chalet"],
    location: "Revelstoke, BC",
    type: "Residential",
    year: "2023",
    scope:
      "Mountain-grade exterior envelope for extreme alpine climate. Standing seam metal roofing, Longboard aluminum cladding, structural waterproofing system.",
    stats: [],
    image: "/images/projects/siding-metal-3.jpg",
  },
]

// ─── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  isFeatured = false,
  titleScale = "md",
}: {
  project: Project
  isFeatured?: boolean
  titleScale?: "sm" | "md" | "lg"
}) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const cardInView = useInView(cardRef, { once: true, margin: "-8%" })
  const shouldReduceMotion = useReducedMotion()

  // Scroll parallax — disabled when reduced motion is preferred
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "16%"])

  // Custom cursor — tracks mouse within card (desktop only)
  const mouseXPct = useMotionValue(50)
  const mouseYPct = useMotionValue(50)
  const springX = useSpring(mouseXPct, { stiffness: 220, damping: 24 })
  const springY = useSpring(mouseYPct, { stiffness: 220, damping: 24 })
  const cursorLeft = useTransform(springX, (v) => `${v}%`)
  const cursorTop = useTransform(springY, (v) => `${v}%`)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseXPct.set(((e.clientX - rect.left) / rect.width) * 100)
    mouseYPct.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  const titleFs =
    titleScale === "lg"
      ? "clamp(30px, 3.8vw, 62px)"
      : titleScale === "md"
      ? "clamp(24px, 2.8vw, 46px)"
      : "clamp(20px, 2.2vw, 36px)"

  return (
    <Link href="/projects" className="block h-full" tabIndex={-1}>
      <motion.div
        ref={cardRef}
        className="relative h-full overflow-hidden lg:cursor-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* ── Background photo ── */}
        <motion.div
          className="absolute inset-[-8%] will-change-transform"
          style={{ y: bgY }}
        >
          <motion.img
            src={project.image}
            alt={project.titleLines.join(" ")}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1.0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </motion.div>

        {/* ── Gradient overlays — keep text legible ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(20,0,139,0.14)" }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* ── Custom cursor circle — desktop only ── */}
        <motion.div
          className="absolute z-30 pointer-events-none hidden lg:block"
          style={{ left: cursorLeft, top: cursorTop, x: "-50%", y: "-50%" }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.55 }}
          transition={{ duration: 0.22, ease: EASE }}
        >
          <div className="w-[68px] h-[68px] rounded-full bg-white flex items-center justify-center">
            <span className="text-black text-[8px] font-bold uppercase tracking-[0.25em] leading-none">
              View
            </span>
          </div>
        </motion.div>

        {/* ── Top bar ── */}
        <div className="absolute top-0 inset-x-0 flex items-start justify-between p-5 sm:p-6 lg:p-7">
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/22">
            {project.num}
          </span>
          <motion.span
            className="text-[9px] font-semibold uppercase tracking-[0.3em] border px-3 py-[5px]"
            animate={{
              color: hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.32)",
              borderColor: hovered
                ? "rgba(20,0,139,0.65)"
                : "rgba(255,255,255,0.1)",
              backgroundColor: hovered ? "rgba(20,0,139,0.18)" : "rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.3 }}
          >
            {project.type}
          </motion.span>
        </div>

        {/* ── Bottom content ── */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 lg:p-8">
          {/* Stats — featured card only */}
          {isFeatured && project.stats.length > 0 && (
            <motion.div
              className="flex items-end gap-8 mb-7"
              initial={{ opacity: 0, y: 14 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.38, duration: 0.72, ease: EASE }}
            >
              {project.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-display font-black text-white leading-none tracking-tight text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-white/35 text-[9.5px] font-medium uppercase tracking-[0.26em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Scope — reveals on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.p
                className="text-white/50 text-[12.5px] font-light leading-relaxed tracking-wide mb-5 max-w-[480px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {project.scope}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Title lines — individual text-mask reveals */}
          <div className="mb-4">
            {project.titleLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h3
                  className="block font-display font-black text-white uppercase leading-[0.86] tracking-[-0.015em]"
                  style={{ fontSize: titleFs }}
                  initial={{ y: "110%" }}
                  animate={cardInView ? { y: "0%" } : {}}
                  transition={{
                    delay: 0.06 + i * 0.1,
                    duration: 1.0,
                    ease: EASE,
                  }}
                >
                  {line}
                </motion.h3>
              </div>
            ))}
          </div>

          {/* Location row */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.28, duration: 0.7, ease: EASE }}
          >
            <div className="w-[3px] h-3 bg-[#14008B] shrink-0" />
            <span className="text-white/38 text-[10px] font-medium uppercase tracking-[0.24em]">
              {project.location}
            </span>
            <span className="text-white/15 text-[9px]">·</span>
            <span className="text-white/26 text-[10px] tracking-[0.18em]">
              {project.year}
            </span>
          </motion.div>
        </div>

        {/* ── Left accent bar ── */}
        <motion.div
          className="absolute left-0 inset-y-0 w-[3px] bg-[#14008B] origin-bottom pointer-events-none"
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        />

        {/* ── Border ── */}
        <motion.div
          className="absolute inset-0 border pointer-events-none"
          animate={{
            borderColor: hovered
              ? "rgba(20,0,139,0.45)"
              : "rgba(255,255,255,0.055)",
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </Link>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const headerInView = useInView(sectionRef, { once: true, margin: "-10%" })
  const row1InView = useInView(row1Ref, { once: true, margin: "-4%" })
  const row2InView = useInView(row2Ref, { once: true, margin: "-4%" })

  return (
    <section ref={sectionRef} className="relative bg-black">

      {/* ── Section header ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pt-32 pb-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">

          {/* Left */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-5"
              initial={{ opacity: 0, x: -14 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.72, ease: EASE }}
            >
              <div className="h-px w-10 shrink-0 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
                Recent Work
              </span>
            </motion.div>

            <motion.h2
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(44px, 5.5vw, 88px)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.85, ease: EASE }}
            >
              Selected<br />Projects
            </motion.h2>
          </div>

          {/* Right */}
          <motion.div
            className="flex flex-col items-start sm:items-end gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.82, ease: EASE }}
          >
            <p className="text-white/38 text-[13.5px] font-light leading-[1.72] tracking-wide max-w-[260px] sm:text-right">
              A selection of exterior transformations across BC and Alberta.
            </p>

            {/* Category count pills */}
            <div className="flex flex-wrap gap-2">
              {["Commercial", "Residential", "Multifamily"].map((cat) => (
                <span
                  key={cat}
                  className="text-[9.5px] font-medium uppercase tracking-[0.28em] text-white/20 border border-white/[0.07] px-3 py-1"
                >
                  {cat}
                </span>
              ))}
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-white/36 text-[11px] font-semibold uppercase tracking-[0.28em] hover:text-white transition-colors duration-300"
            >
              <span className="relative">
                View All Projects
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
        </div>
      </div>

      {/* ── Project grid ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pb-32 space-y-[3px]">

        {/* Row 1: 65 / 35 — wide featured + portrait */}
        <motion.div
          ref={row1Ref}
          className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-[3px]"
          initial={{ opacity: 0 }}
          animate={row1InView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* Featured — wide landscape */}
          <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[580px]">
            <ProjectCard
              project={PROJECTS[0]}
              isFeatured
              titleScale="lg"
            />
          </div>

          {/* Portrait — tall narrow */}
          <div className="aspect-[4/3] sm:aspect-[3/4] lg:aspect-auto lg:h-[580px]">
            <ProjectCard project={PROJECTS[1]} titleScale="md" />
          </div>
        </motion.div>

        {/* Row 2: 35 / 65 — portrait + wide landscape (mirrored) */}
        <motion.div
          ref={row2Ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[35fr_65fr] gap-[3px]"
          initial={{ opacity: 0 }}
          animate={row2InView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
        >
          {/* Portrait */}
          <div className="aspect-[4/3] sm:aspect-auto sm:h-[440px] lg:h-[480px]">
            <ProjectCard project={PROJECTS[2]} titleScale="md" />
          </div>

          {/* Wide landscape */}
          <div className="aspect-[4/3] sm:aspect-auto sm:h-[440px] lg:h-[480px]">
            <ProjectCard project={PROJECTS[3]} titleScale="lg" />
          </div>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          className="flex items-center justify-between pt-6"
          initial={{ opacity: 0 }}
          animate={row2InView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.8, ease: EASE }}
        >
          <div className="flex items-center gap-3">
            <div className="h-[13px] w-px bg-[#14008B]" />
            <span className="text-white/20 text-[10px] font-medium uppercase tracking-[0.34em]">
              Showing 4 of 40+ Projects
            </span>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-white/20 text-[10px] font-medium uppercase tracking-[0.3em] hover:text-white/55 transition-colors duration-300"
          >
            <span>View Full Portfolio</span>
            <svg
              width="10" height="10" viewBox="0 0 10 10" fill="none"
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            >
              <path d="M1.5 5H8.5M8.5 5L5 1.5M8.5 5L5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
