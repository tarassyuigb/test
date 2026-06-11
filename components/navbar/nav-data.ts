export type NavColumn = {
  heading: string
  items: { label: string; href: string }[]
}

export type NavFeatured = {
  eyebrow: string
  heading: string
  sub: string
  href: string
  cta: string
}

export type NavItem = {
  id: string
  label: string
  href: string
  columns?: NavColumn[]
  featured?: NavFeatured
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: "services",
    label: "Services",
    href: "/services",
    columns: [
      {
        heading: "Exterior Systems",
        items: [
          { label: "Residential", href: "/residential" },
          { label: "Commercial & Multifamily", href: "/commercial" },
          { label: "Gutters & Leaf-guards", href: "/gutters" },
          { label: "Full Renovation", href: "/renovation" },
        ],
      },
      {
        heading: "Get Started",
        items: [
          { label: "Request Estimate", href: "/contact" },
          { label: "Project Gallery", href: "/projects" },
          { label: "About Streamline", href: "/about" },
        ],
      },
    ],
    featured: {
      eyebrow: "30+ Years of Experience",
      heading: "Premium\nExteriors.",
      sub: "Residential and commercial exterior systems across BC and Alberta since 1994.",
      href: "/projects",
      cta: "View Our Work",
    },
  },
  {
    id: "locations",
    label: "Locations",
    href: "/locations",
    columns: [
      {
        heading: "British Columbia",
        items: [
          { label: "Kelowna", href: "/locations/kelowna" },
          { label: "Vernon", href: "/locations/vernon" },
          { label: "Salmon Arm", href: "/locations/salmon-arm" },
          { label: "Revelstoke", href: "/locations/revelstoke" },
        ],
      },
      {
        heading: "Alberta",
        items: [
          { label: "Calgary", href: "/locations/calgary" },
          { label: "All Locations", href: "/locations" },
        ],
      },
    ],
    featured: {
      eyebrow: "Service Area",
      heading: "Serving\nWestern Canada",
      sub: "Local expertise in every market. Six locations across BC and Alberta.",
      href: "/locations",
      cta: "Find Your Location",
    },
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
]
