import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Projects | Exterior Construction Gallery — BC & Alberta | Streamline Exteriors",
  description:
    "Residential estates, strata complexes, commercial facades, and mountain homes across British Columbia and Alberta. View Streamline Exteriors' project portfolio — family owned since 1994.",
  keywords: [
    "exterior construction projects BC",
    "siding projects Kelowna Vernon Salmon Arm",
    "commercial exterior projects BC",
    "multifamily siding projects BC Alberta",
    "James Hardie siding projects BC",
    "exterior renovation portfolio BC",
    "Streamline Exteriors projects",
  ],
  openGraph: {
    title: "Projects | Exterior Construction Gallery — BC & Alberta",
    description:
      "Residential estates, strata complexes, commercial facades — one standard across BC and Alberta. Streamline Exteriors project portfolio.",
    type: "website",
    url: "https://www.streamlineexteriors.ca/projects",
  },
}

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
