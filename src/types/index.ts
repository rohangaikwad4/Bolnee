export interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

export interface PriceTier {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

export interface Testimonial {
  name: string
  company: string
  role?: string
  content: string
  avatar?: string
  logo?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  image?: string
  date: string
  slug: string
  author: string
}

export interface FaqItem {
  question: string
  answer: string
}
