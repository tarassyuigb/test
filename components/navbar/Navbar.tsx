"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { NAV_ITEMS, type NavItem } from "./nav-data"
import { BUSINESS } from "@/lib/site-content"
import MobileMenu from "./MobileMenu"

const EASE = [0.22, 1, 0.36, 1] as const

const megaVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.2, ease: EASE },
  },
}

const colVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.06 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 7 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
}

function Logo({ lightMode }: { lightMode?: boolean }) {
  const pathname = usePathname()
  const handleClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  return (
    <Link href="/" onClick={handleClick} className="flex items-center shrink-0">
      <img
        src="/images/logo-cutout.png"
        alt="Streamline Exteriors"
        className="h-11 w-auto transition-all duration-500"
        style={{
          filter: lightMode
            ? "none"
            : "brightness(0) invert(1)",
          opacity: lightMode ? 1 : 0.92,
        }}
      />
    </Link>
  )
}

function MegaMenu({ item }: { item: NavItem }) {
  if (!item.columns) return null

  return (
    <motion.div
      key={item.id}
      variants={megaVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 right-0 bg-[#000000]/[0.97] backdrop-blur-2xl border-t border-white/[0.07]"
      style={{ boxShadow: "0 32px 64px -16px rgba(0,0,0,0.8)" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-12 grid grid-cols-[1fr_1fr_1fr] gap-16">
        {/* Nav columns */}
        <motion.div
          variants={colVariants}
          initial="hidden"
          animate="visible"
          className="col-span-2 grid grid-cols-2 gap-12"
        >
          {item.columns.map((col) => (
            <div key={col.heading}>
              <motion.div variants={rowVariants}>
                <p className="text-[#14008B] text-[10px] font-semibold tracking-[0.32em] uppercase mb-5">
                  {col.heading}
                </p>
                <div className="w-12 h-px bg-[#14008B]/40 mb-5" />
              </motion.div>
              <ul className="space-y-[10px]">
                {col.items.map((sub) => (
                  <motion.li key={sub.href} variants={rowVariants}>
                    <Link
                      href={sub.href}
                      className="group flex items-center gap-2 text-white text-[13.5px] tracking-wide hover:text-white transition-colors duration-200"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-white/50 transition-all duration-300 ease-out" />
                      {sub.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Featured panel */}
        {item.featured && (
          <motion.div
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="border-l border-white/[0.07] pl-12 flex flex-col justify-between"
          >
            <div>
              <p className="text-[#14008B] text-[10px] font-semibold tracking-[0.32em] uppercase mb-6">
                {item.featured.eyebrow}
              </p>
              <h3 className="text-white font-black text-[32px] leading-[1.05] tracking-[-0.02em] uppercase whitespace-pre-line mb-4">
                {item.featured.heading}
              </h3>
              <p className="text-white text-[13px] leading-relaxed tracking-wide max-w-[220px]">
                {item.featured.sub}
              </p>
            </div>
            <Link
              href={item.featured.href}
              className="group inline-flex items-center gap-3 text-white text-[12px] font-medium tracking-[0.2em] uppercase hover:text-white transition-colors duration-200 mt-8"
            >
              <span>{item.featured.cta}</span>
              <motion.span
                className="flex items-center"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 1 }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#14008B]/50 to-transparent" />
    </motion.div>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleNavLinkClick = (e: React.MouseEvent, href: string) => {
    if (href === pathname) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const handleNavEnter = (id: string) => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current)
    setActiveMenu(id)
  }

  const handleNavLeave = () => {
    leaveTimeout.current = setTimeout(() => setActiveMenu(null), 120)
  }

  const handleMenuEnter = () => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current)
  }

  const handleMenuLeave = () => {
    leaveTimeout.current = setTimeout(() => setActiveMenu(null), 120)
  }

  const activeItem = NAV_ITEMS.find((i) => i.id === activeMenu) ?? null
  const hasMega = activeItem?.columns != null

  const isLightMode = false

  return (
    <>
      {/* Main navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled || hasMega
            ? "rgba(0,0,0,0.92)"
            : "rgba(0,0,0,0)",
          borderBottomColor: scrolled || hasMega
            ? "rgba(255,255,255,0.07)"
            : "rgba(255,255,255,0)",
          backdropFilter: scrolled || hasMega ? "blur(24px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
        onMouseLeave={handleNavLeave}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Logo lightMode={isLightMode} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeMenu === item.id
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.columns ? handleNavEnter(item.id) : setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavLinkClick(e, item.href)}
                    className="relative flex items-center gap-1 px-4 py-2 text-[12.5px] font-medium tracking-[0.18em] uppercase transition-colors duration-300"
                    style={{
                      color: isActive
                        ? (isLightMode ? "rgba(0,0,0,0.9)" : "white")
                        : (isLightMode ? "rgba(0,0,0,0.58)" : "rgba(255,255,255,0.65)"),
                    }}
                  >
                    {item.label}
                    {item.columns && (
                      <motion.svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                      >
                        <path
                          d="M2 3.5L5 6.5L8 3.5"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    )}

                    {/* Active underline */}
                    <motion.span
                      className="absolute bottom-0 left-4 right-4 h-px bg-[#14008B]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      style={{ transformOrigin: "left" }}
                      transition={{ duration: 0.25, ease: EASE }}
                    />
                  </Link>
                </div>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BUSINESS.phone.primaryHref}
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
              style={{ color: isLightMode ? "rgba(0,0,0,0.52)" : "rgba(255,255,255,0.65)" }}
            >
              {BUSINESS.phone.primary}
            </a>
            <Link
              href="/contact"
              className="relative overflow-hidden group inline-flex items-center gap-2 border border-[#14008B] px-5 py-[9px] text-[11px] font-semibold tracking-[0.22em] uppercase transition-all duration-300"
              style={{ color: isLightMode ? "rgba(0,0,0,0.82)" : "white" }}
            >
              <span className="absolute inset-0 bg-[#14008B] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative group-hover:text-white transition-colors duration-300">Free Estimate</span>
              <span className="relative group-hover:text-white transition-colors duration-300">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M1.5 5.5H9.5M9.5 5.5L5.5 1.5M9.5 5.5L5.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex flex-col gap-[5px] p-2 group"
            aria-label="Open menu"
          >
            <motion.span
              className="block w-6 h-px origin-right"
              animate={{ backgroundColor: isLightMode ? "rgba(0,0,0,0.82)" : "rgba(255,255,255,1)" }}
              whileHover={{ scaleX: 0.7 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px"
              animate={{ backgroundColor: isLightMode ? "rgba(0,0,0,0.82)" : "rgba(255,255,255,1)" }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px origin-right"
              animate={{ backgroundColor: isLightMode ? "rgba(0,0,0,0.38)" : "rgba(255,255,255,0.5)" }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Mega menu */}
        <div onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
          <AnimatePresence>
            {activeItem && activeItem.columns && (
              <MegaMenu key={activeItem.id} item={activeItem} />
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
