"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { BUSINESS } from "@/lib/site-content"

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

const STATS = [
  { value: "30+", label: "Years in Business" },
  { value: "#1", label: "GutterGlove Distributor" },
  { value: "$10M", label: "Liability Insured" },
  { value: "100%", label: "Warranty Backed" },
]

const HEADLINE = ["Let's Build", "Something", "That Lasts."]

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" })
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "20%"])

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">

      {/* ── Background ── */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        <div
          className="absolute inset-[-8%]"
          style={{
            background: [
              "radial-gradient(ellipse at 18% 78%, rgba(20,0,139,0.38) 0%, transparent 52%)",
              "radial-gradient(ellipse at 82% 18%, rgba(26,16,84,0.20) 0%, transparent 46%)",
              "radial-gradient(ellipse at 50% 50%, rgba(10,0,60,0.12) 0%, transparent 60%)",
              "linear-gradient(160deg, #000000 0%, #030018 55%, #000000 100%)",
            ].join(", "),
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
              "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      {/* ── Stats bar ── */}
      <div className="relative border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="py-8 px-6 sm:px-8 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.72, ease: EASE }}
              >
                <p
                  className="font-display font-black text-white uppercase leading-none tracking-[-0.02em] mb-1.5"
                  style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
                >
                  {stat.value}
                </p>
                <p className="text-white text-[10.5px] font-medium uppercase tracking-[0.28em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pt-28 pb-36">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16 lg:gap-24">

          {/* Left — eyebrow + headline */}
          <div className="lg:flex-1">
            <motion.div
              className="flex items-center gap-4 mb-10"
              initial={{ opacity: 0, x: -14 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.72, ease: EASE }}
            >
              <div className="h-px w-10 shrink-0 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Start Your Project
              </span>
            </motion.div>

            {/* Headline — 3 lines, middle is outline */}
            <div>
              {HEADLINE.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] block"
                    style={{
                      fontSize: "clamp(56px, 8.5vw, 140px)",
                      ...(i === 1
                        ? { WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }
                        : { color: "#ffffff" }),
                    }}
                    initial={{ y: "107%" }}
                    animate={isInView ? { y: "0%" } : {}}
                    transition={{ delay: 0.24 + i * 0.1, duration: 1.0, ease: EASE }}
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}
            </div>
          </div>

          {/* Right — copy + buttons */}
          <div className="flex flex-col gap-8 lg:min-w-[320px] xl:min-w-[360px] lg:pb-2">
            <motion.p
              className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[380px]"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.52, duration: 0.85, ease: EASE }}
            >
              Premium exterior systems for residential and commercial projects
              across BC & Alberta.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.64, duration: 0.85, ease: EASE }}
            >
              {/* Primary */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Get a Free Estimate</span>
                <span className="relative w-9 h-9 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-white/40 transition-colors duration-300">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

              {/* Secondary */}
              <Link
                href="/projects"
                className="group inline-flex items-center justify-between gap-4 border border-white/[0.1] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/25 transition-all duration-300"
              >
                <span>View Projects</span>
                <svg
                  width="13" height="13" viewBox="0 0 13 13" fill="none"
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
                >
                  <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Phone */}
              <div className="pt-2 border-t border-white/[0.06]">
                <p className="text-white text-[10px] uppercase tracking-[0.3em] mb-2">
                  Or call directly
                </p>
                <a
                  href={BUSINESS.phone.primaryHref}
                  className="text-white text-[13px] tracking-wide hover:text-white transition-colors duration-300"
                >
                  {BUSINESS.phone.primary}
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
