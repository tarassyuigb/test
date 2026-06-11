"use client"

import { useState } from "react"
import Link from "next/link"
import { PROJECTS, type ProjectCategory } from "@/lib/site-content"
import FadeIn from "@/components/ui/FadeIn"

type FilterValue = "all" | ProjectCategory | "commercial-multifamily"

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All Work", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial & Multifamily", value: "commercial-multifamily" },
  { label: "Gutters", value: "gutters" },
  { label: "Renovation", value: "renovation" },
]

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  residential: "Residential",
  commercial: "Commercial & Multifamily",
  multifamily: "Commercial & Multifamily",
  gutters: "Gutters",
  renovation: "Renovation",
}

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterValue>("all")
  const filtered =
    active === "all"
      ? PROJECTS
      : active === "commercial-multifamily"
        ? PROJECTS.filter((p) => p.category === "commercial" || p.category === "multifamily")
        : PROJECTS.filter((p) => p.category === active)

  return (
    <main className="bg-black min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 65%, rgba(20,0,139,0.10) 0%, rgba(0,0,0,0) 52%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.42em] text-white">
              Project Gallery · BC & Alberta
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h1
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(56px, 8vw, 128px)" }}
            >
              The Work
              <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.22)",
                  color: "transparent",
                }}
              >
                Speaks.
              </span>
            </h1>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-0 border border-white/[0.08]">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={`px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.26em] border-r border-white/[0.08] last:border-r-0 transition-all duration-200 ${
                    active === f.value
                      ? "bg-[#14008B] text-white"
                      : "text-white hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Project grid ── */}
      {filtered.length > 0 ? (
        <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {filtered.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.05}>
                <Link
                  href="/contact"
                  className="group flex flex-col bg-black hover:bg-[#06020F] transition-colors duration-300 h-full"
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-black/12 group-hover:bg-black/0 transition-colors duration-500" />
                    {project.featured && (
                      <div className="absolute top-0 left-0">
                        <span className="block bg-[#14008B] text-white text-[8px] font-semibold uppercase tracking-[0.36em] px-3 py-1.5">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text panel */}
                  <div className="flex flex-col flex-1 p-7 lg:p-8 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-[2px] h-3 bg-[#14008B] shrink-0" />
                      <span className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#14008B]">
                        {CATEGORY_LABELS[project.category]}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.2em] text-white ml-auto">
                        {project.year}
                      </span>
                    </div>
                    <h2
                      className="font-display font-black text-white uppercase leading-[0.92] tracking-[-0.02em] mb-3"
                      style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-white text-[12px] font-light tracking-wide mb-5">
                      {project.location}
                    </p>
                    <ul className="space-y-2 mb-auto">
                      {project.scope.slice(0, 2).map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <div className="w-px h-3 bg-[#14008B]/50 mt-[2px] shrink-0" />
                          <span className="text-white text-[12px] font-light leading-relaxed tracking-wide">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.05] text-white group-hover:text-white transition-colors duration-300">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.32em]">
                        Discuss This Project
                      </span>
                      <svg
                        className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                        width="11"
                        height="11"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      ) : (
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-28 text-center">
          <p className="text-white text-[15px] font-light tracking-wide">
            No projects in this category yet — check back soon.
          </p>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.42em] text-white">
                Start Your Project
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(32px, 4.5vw, 72px)" }}
            >
              Your Exterior
              <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.22)",
                  color: "transparent",
                }}
              >
                Next.
              </span>
            </h2>
            <p className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[440px]">
              Free estimates. Fixed scopes. 30 years across BC and Alberta.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-[240px]">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Get a Free Estimate</span>
              <span className="relative w-8 h-8 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center border border-white/[0.12] px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/28 transition-all duration-300"
            >
              View Locations
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
