export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export interface Benefit {
  icon: React.ReactNode
  title: string
  items: string[]
}

export interface Step {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

export interface ComparisonItem {
  text: string
  available: boolean
}

export interface FormData {
  restaurant_name: string
  business_type: string
  city_country: string
  employee_count: string
  contact: string
  main_pain_point: string
}

