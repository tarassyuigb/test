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
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
              {label}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.05]">
            {items.map((item, i) => (
              <div key={i} className="bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white/14">0{i + 1}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3 className="font-display font-bold text-white uppercase text-[13px] tracking-[0.05em] mb-3 leading-snug">
                  {item.q}
                </h3>
                <p className="text-white/35 text-[12.5px] font-light leading-relaxed tracking-wide">
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
