import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  dark?: boolean
}

export function Section({ id, children, className = '', dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 lg:py-32 ${dark ? 'bg-chef-slate/50' : ''} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string | ReactNode
  subtitle?: string
  center?: boolean
}

export function SectionHeader({ badge, title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-chef-orange bg-chef-orange/10 rounded-full border border-chef-orange/20">
          {badge}
        </span>
      )}
      <h2 className="section-title text-white mb-4">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle text-gray-400 ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

