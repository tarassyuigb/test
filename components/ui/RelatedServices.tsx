import Link from "next/link"
import { SERVICES } from "@/lib/site-content"
import FadeIn from "./FadeIn"

type Props = {
  serviceIds: string[]
}

export default function RelatedServices({ serviceIds }: Props) {
  const related = SERVICES.filter((s) => serviceIds.includes(s.id))

  return (
    <section className="border-b border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-16">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Related Services
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.05]">
            {related.map((s, i) => (
              <Link
                key={s.id}
                href={`/${s.slug}`}
                className="group relative bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white">0{i + 1}</span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#14008B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">{s.tag}</span>
                </div>
                <h3 className="font-display font-black text-white group-hover:text-white uppercase leading-[0.9] tracking-[-0.01em] mb-3 transition-colors duration-300" style={{ fontSize: "clamp(22px, 2.8vw, 38px)" }}>
                  {s.shortName}
                </h3>
                <p className="text-white lg:text-white text-[12.5px] font-light leading-relaxed tracking-wide mb-5 transition-colors duration-300 lg:group-hover:text-white">
                  {s.summary}
                </p>
                <div className="flex items-center gap-2 text-[#14008B] text-[10px] font-semibold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Service</span>
                  <svg width="10" height="10" viewBox="0 0 13 13" fill="none" aria-hidden>
                    <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
