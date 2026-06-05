import FadeIn from "@/components/ui/FadeIn"

type Photo = { src: string; label: string; caption?: string }

export default function PhotoShowcase({ photos }: { photos: [Photo, Photo, Photo] }) {
  const [main, b, c] = photos

  return (
    <FadeIn>
      <section className="border-b border-white/[0.05]">
        <div
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-px bg-white/[0.04]"
          style={{ height: "clamp(360px, 52vh, 600px)" }}
        >
          {/* ── Main large photo ── */}
          <div className="group relative overflow-hidden h-full">
            <img
              src={main.src}
              alt={main.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
            <div className="absolute bottom-4 right-5">
              <span className="font-mono text-[8px] tracking-[0.22em] text-white/18">01</span>
            </div>
          </div>

          {/* ── Right column: 2 stacked photos ── */}
          <div className="hidden lg:grid grid-rows-2 gap-px bg-white/[0.04] h-full">
            {[b, c].map((photo, i) => (
              <div key={photo.src} className="group relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-transparent" />
                <div className="absolute bottom-3 right-4">
                  <span className="font-mono text-[8px] tracking-[0.22em] text-white/18">
                    0{i + 2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  )
}
