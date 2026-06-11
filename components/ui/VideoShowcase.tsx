"use client"

import { useRef, useState, useEffect } from "react"

type VideoShowcaseProps = {
  src: string
  label: string
  sublabel?: string
  caption?: string
}

export default function VideoShowcase({ src, label, sublabel, caption }: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [started, setStarted] = useState(false)

  // Autoplay muted when scrolled into view
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          videoRef.current?.play().catch(() => {})
          setPlaying(true)
          setStarted(true)
        }
      },
      { threshold: 0.35 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [started])

  function togglePlay() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section ref={sectionRef} className="border-t border-white/[0.05] bg-black">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-10 bg-[#14008B]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.44em] text-white">
            Featured Project
          </span>
        </div>

        {/* Video container */}
        <div className="relative w-full overflow-hidden group" style={{ aspectRatio: "16/9" }}>
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {/* Cinematic overlay — dims slightly, fades on hover */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-700 pointer-events-none" />

          {/* Play/pause click zone */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {/* Play icon — only shows when paused */}
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border border-white/40 flex items-center justify-center backdrop-blur-sm bg-black/20 transition-transform duration-300 hover:scale-105">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M7 4L18 11L7 18V4Z" fill="white" />
                  </svg>
                </div>
              </div>
            )}
          </button>

          {/* Bottom controls bar */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)" }}>

            {/* Project info */}
            <div>
              <p className="font-display font-black text-white uppercase leading-none tracking-[-0.01em] mb-1"
                style={{ fontSize: "clamp(18px, 2.5vw, 32px)" }}>
                {label}
              </p>
              {sublabel && (
                <p className="text-white text-[10px] font-medium uppercase tracking-[0.32em] opacity-60">
                  {sublabel}
                </p>
              )}
              {caption && (
                <p className="text-white text-[11px] font-light tracking-wide mt-1 opacity-50">
                  {caption}
                </p>
              )}
            </div>

            {/* Mute toggle */}
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute() }}
              className="flex items-center gap-2 border border-white/20 px-4 py-2 text-[9.5px] font-semibold uppercase tracking-[0.24em] text-white hover:border-white/40 transition-colors duration-300"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5H4.5L7.5 2V11L4.5 8.5H2V4.5Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M10 4.5L12 6.5M12 4.5L10 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Unmute
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5H4.5L7.5 2V11L4.5 8.5H2V4.5Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M10 3.5C10.8 4.3 11.3 5.35 11.3 6.5C11.3 7.65 10.8 8.7 10 9.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M8.8 5C9.2 5.4 9.5 5.93 9.5 6.5C9.5 7.07 9.2 7.6 8.8 8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Mute
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
