import Link from "next/link"

export default function NotFound() {
  return (
    <main className="bg-black min-h-screen flex flex-col">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(20,0,139,0.14) 0%, rgba(0,0,0,0) 55%), radial-gradient(ellipse at 80% 20%, rgba(26,16,84,0.08) 0%, rgba(0,0,0,0) 50%)",
        }}
      />

      <div className="relative flex-1 flex flex-col justify-center max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pt-44 pb-24">

        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-10 bg-[#14008B]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/45">
            404 · Page Not Found
          </span>
        </div>

        <h1
          className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-8"
          style={{ fontSize: "clamp(64px, 10vw, 160px)" }}
        >
          Not
          <br />
          <span
            style={{
              WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
              color: "rgba(0,0,0,0)",
            }}
          >
            Found.
          </span>
        </h1>

        <p className="text-white/42 text-[15px] font-light leading-[1.72] tracking-wide max-w-[460px] mb-12">
          The page you're looking for doesn't exist. Navigate back to our services or get in touch directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-between gap-5 overflow-hidden border border-[#14008B] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
          >
            <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
            <span className="relative">Back to Home</span>
            <span className="relative w-8 h-8 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white/[0.1] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50 hover:text-white hover:border-white/25 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.05]">
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white/22 mb-6">
            Quick Links
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Residential", href: "/residential" },
              { label: "Commercial", href: "/commercial" },
              { label: "Gutters", href: "/gutters" },
              { label: "Renovation", href: "/renovation" },
              { label: "Locations", href: "/locations" },
              { label: "Projects", href: "/projects" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/35 text-[12px] font-light tracking-wide hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Ghost watermark */}
      <div
        className="fixed bottom-0 right-0 pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <p
          className="font-display font-black text-white uppercase leading-none tracking-[-0.04em]"
          style={{
            fontSize: "clamp(100px, 18vw, 280px)",
            opacity: 0.018,
            transform: "translate(10%, 20%)",
          }}
        >
          404
        </p>
      </div>
    </main>
  )
}
