import Link from "next/link"
import { CITIES } from "@/lib/site-content"
import FadeIn from "./FadeIn"

export default function LocationsGrid() {
  const bcCities = CITIES.filter((c) => c.provinceCode === "BC")
  const abCities = CITIES.filter((c) => c.provinceCode === "AB")

  return (
    <section className="border-b border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-14">
        <FadeIn>
          <div className="flex items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Where We Work
              </span>
            </div>
            <Link
              href="/locations"
              className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/40 hover:text-white transition-colors duration-200 shrink-0"
            >
              All Locations →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.05]">
            {[{ label: "British Columbia", cities: bcCities }, { label: "Alberta", cities: abCities }].map((group) => (
              <div key={group.label} className="bg-black px-6 py-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-white/40 mb-4">
                  {group.label}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-0">
                  {group.cities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/locations/${city.slug}`}
                      className="group flex items-center justify-between py-[9px] border-b border-white/[0.04] hover:border-white/[0.1] transition-colors duration-200"
                    >
                      <span className="text-white text-[12.5px] font-light tracking-wide group-hover:text-white transition-colors duration-200">
                        {city.name}
                      </span>
                      <svg width="8" height="8" viewBox="0 0 13 13" fill="none" aria-hidden className="text-white/20 group-hover:text-[#14008B] transition-colors duration-200 shrink-0 ml-2">
                        <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
