"use client"

import { useState } from "react"
import Link from "next/link"
import FadeIn from "@/components/ui/FadeIn"

const STRIP_PHOTOS = [
  { src: "/images/projects/real-residential-modern.jpg", alt: "Kelowna — residential",  label: "Kelowna, BC" },
  { src: "/images/projects/real-multifamily.jpg",        alt: "Commercial facade",       label: "Commercial & Multifamily" },
  { src: "/images/projects/real-metal-siding.jpg",       alt: "Metal panel cladding",    label: "Metal Cladding" },
]

export default function RegionGrid() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="border-t border-white/[0.05] bg-black">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pt-24 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.42em] text-white">
                BC & Alberta
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(40px, 5.5vw, 86px)" }}
            >
              The Work.
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.22)", color: "transparent" }}>
                Across the Region.
              </span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-4 text-white hover:text-white transition-colors duration-300 shrink-0 pb-1"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">View All Projects</span>
            <div className="w-8 h-8 border border-white/15 group-hover:border-white/40 flex items-center justify-center transition-colors duration-300">
              <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      <FadeIn>
        {/* ── 3-photo strip ── */}
        <div className="mx-6 sm:mx-10 lg:mx-20 xl:mx-28 mb-24 grid grid-cols-1 sm:grid-cols-3 gap-[3px] bg-white/[0.04]">
          {STRIP_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer"
              style={{ height: "clamp(380px, 58vh, 680px)" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: hovered === i ? "scale(1.06)" : "scale(1.0)" }}
              />

              {/* Base overlay */}
              <div className="absolute inset-0 bg-black/18" />

              {/* Darken neighbours */}
              <div
                className="absolute inset-0 transition-colors duration-500"
                style={{
                  backgroundColor:
                    hovered !== null && hovered !== i
                      ? "rgba(0,0,0,0.52)"
                      : "rgba(0,0,0,0)",
                }}
              />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Blue left accent on hover */}
              <div
                className="absolute left-0 inset-y-0 w-[3px] bg-[#14008B] origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: hovered === i ? "scaleY(1)" : "scaleY(0)" }}
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="h-px bg-white transition-all duration-500"
                    style={{ width: hovered === i ? "20px" : "8px" }}
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-white">
                    {photo.label}
                  </p>
                </div>
              </div>

              {/* Index */}
              <div className="absolute top-5 left-6">
                <span className="font-mono text-[8px] tracking-[0.22em] text-white">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
