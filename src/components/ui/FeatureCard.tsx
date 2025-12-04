import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
}

export function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className="glass-card p-6 md:p-8 hover:bg-white/10 transition-colors duration-300 group cursor-pointer"
    >
      <motion.div 
        className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-chef-orange/20 to-orange-500/10 text-chef-orange"
        whileHover={{ 
          scale: 1.15,
          rotate: 5,
          transition: { duration: 0.2 }
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{description}</p>
    </motion.div>
  )
}
