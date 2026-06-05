"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

type Props = {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

export default function FadeIn({ children, delay = 0, y = 18, className, once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: "-6%" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: "blur(2px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ delay, duration: 0.88, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
