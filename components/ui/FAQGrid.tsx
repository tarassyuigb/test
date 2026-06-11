import FadeIn from "./FadeIn"

type FAQItem = { q: string; a: string }

type Props = {
  items: FAQItem[]
  label?: string
  bordered?: boolean
}

export default function FAQGrid({ items, label = "Common Questions", bordered = true }: Props) {
  return (
    <section className={bordered ? "border-b border-white/[0.05]" : ""}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              {label}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.05]">
            {items.map((item, i) => (
              <div key={i} className="bg-black p-10 lg:p-12 hover:bg-[#030018] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white/40">0{i + 1}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3
                  className="font-display font-black text-white uppercase leading-[1.05] tracking-[-0.01em] mb-5"
                  style={{ fontSize: "clamp(15px, 1.4vw, 20px)" }}
                >
                  {item.q}
                </h3>
                <p className="text-white/65 text-[14px] font-light leading-[1.82] tracking-wide">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
