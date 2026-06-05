import Link from "next/link"
import { CITIES } from "@/lib/site-content"
import FadeIn from "./FadeIn"

export default function LocationsGrid() {
  const bcCities = CITIES.filter((c) => c.provinceCode === "BC")
  const abCities = CITIES.filter((c) => c.provinceCode === "AB")

  return (
    <section className="border-b border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
              Where We Work
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.05]">
            {[{ label: "British Columbia", cities: bcCities }, { label: "Alberta", cities: abCities }].map((group) => (
              <div key={group.label} className="bg-black p-8">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.38em] text-white/24 mb-6">
                  {group.label}
                </p>
                <div className="space-y-3">
                  {group.cities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/locations/${city.slug}`}
                      className="group flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0 hover:border-white/[0.1] transition-colors"
                    >
                      <div>
                        <span className="text-white/55 text-[13px] font-light tracking-wide group-hover:text-white transition-colors duration-200">
                          {city.name}
                        </span>
                        <span className="text-white/22 text-[11px] ml-3 tracking-wide">
                          {city.region}
                        </span>
                      </div>
                      <svg width="10" height="10" viewBox="0 0 13 13" fill="none" aria-hidden className="text-white/20 group-hover:text-[#14008B] transition-colors duration-200">
                        <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
