"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

const PILLARS = [
  {
    num: "01",
    title: "Precision Specified",
    body: "Every product is chosen for the specific demands of the western Canadian climate — material performance over margin. Journeyman crews on every installation.",
  },
  {
    num: "02",
    title: "Journeyman Led",
    body: "Every installation crew is journeyman-certified. No subcontractors, no handoffs — the same team leads every project from Kelowna to Calgary.",
  },
  {
    num: "03",
    title: "Warranty Backed",
    body: "Standard 5-year warranty on all work. Lifetime warranty available. $15M liability insurance and continuous WCB coverage since 1994.",
  },
]

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-12%" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const lineW = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"])

  return (
    <section
      ref={sectionRef}
      className="relative bg-black border-t border-white/[0.05] overflow-hidden"
    >
      {/* Ambient glow — faint brand presence */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(20,0,139,0.06) 0%, transparent 55%)",
        }}
      />

      {/* ── Statement block ── */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pt-32 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-12 items-end">

          {/* Left: eyebrow + headline */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-9"
              initial={{ opacity: 0, x: -14 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.72, ease: EASE }}
            >
              <div className="h-px w-10 shrink-0 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
                The Streamline Standard
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] block"
                style={{ fontSize: "clamp(52px, 6.8vw, 114px)" }}
                initial={{ y: "108%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ delay: 0.18, duration: 1.0, ease: EASE }}
              >
                Built For
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display font-black uppercase leading-[0.88] tracking-[-0.02em] block"
                style={{
                  fontSize: "clamp(52px, 6.8vw, 114px)",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.26)",
                  color: "rgba(0,0,0,0)",
                }}
                initial={{ y: "108%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ delay: 0.28, duration: 1.0, ease: EASE }}
              >
                Permanence.
              </motion.h2>
            </div>
          </div>

          {/* Right: supporting copy */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.44, duration: 0.88, ease: EASE }}
          >
            <p className="text-white/40 text-[14.5px] font-light leading-[1.78] tracking-wide mb-8">
              Family owned since 1994 and the Okanagan–Shuswap's longest-serving
              exterior contractor. Every product specified for western Canadian
              climate. Every installation journeyman-led. Every project backed
              by a standard 5-year warranty and $15M liability insurance.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-[#14008B]" />
              <span className="text-white/24 text-[10px] font-medium uppercase tracking-[0.38em]">
                BC & Alberta · Est. 1994
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll-driven divider line */}
        <div className="relative mt-20 h-px bg-white/[0.05] overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#14008B]/40"
            style={{ width: lineW }}
          />
        </div>
      </div>

      {/* ── Proof pillars ── */}
      <div className="relative border-t border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.055]"
          >
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.num}
                className="py-10 sm:px-10 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.52 + i * 0.09, duration: 0.75, ease: EASE }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-white/14">
                    {p.num}
                  </span>
                  <div className="h-px flex-1 bg-white/[0.055]" />
                </div>
                <h3 className="font-display font-bold text-white uppercase text-[13.5px] tracking-[0.07em] mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/34 text-[12.5px] font-light leading-relaxed tracking-wide">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
