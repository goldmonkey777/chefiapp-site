import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * Magnetic Button - Follows cursor on hover (Apple-style)
 */
export function MagneticButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}

/**
 * Glow Effect Card - Glows on hover
 */
export function GlowCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        boxShadow: '0 0 40px rgba(249, 115, 22, 0.3)',
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Float Animation - Subtle floating effect
 */
export function FloatingElement({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Pulse Effect - Pulsing glow (for CTAs)
 */
export function PulsingCTA({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        boxShadow: [
          '0 0 20px rgba(249, 115, 22, 0.5)',
          '0 0 40px rgba(249, 115, 22, 0.8)',
          '0 0 20px rgba(249, 115, 22, 0.5)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Shimmer Effect - Loading shimmer
 */
export function ShimmerEffect({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      }}
      animate={{
        x: ['-100%', '100%'],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

/**
 * Confetti Celebration - Success animation
 */
export function ConfettiParticle({ delay = 0 }: { delay?: number }) {
  const colors = ['#f97316', '#fb923c', '#fdba74', '#fed7aa']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{ backgroundColor: randomColor }}
      initial={{ x: 0, y: 0, opacity: 1 }}
      animate={{
        x: Math.random() * 200 - 100,
        y: Math.random() * -200 - 100,
        opacity: 0,
        rotate: Math.random() * 360,
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: 'easeOut',
      }}
    />
  )
}

export function Confetti({ show = false }: { show: boolean }) {
  if (!show) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {[...Array(30)].map((_, i) => (
        <ConfettiParticle key={i} delay={i * 0.02} />
      ))}
    </div>
  )
}

/**
 * Skeleton Loader - Loading state
 */
export function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-slate-800 rounded ${className}`}>
      <ShimmerEffect />
    </div>
  )
}

/**
 * Typewriter Effect - Animated text typing
 */
export function TypewriterText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span
      className={className}
      initial={{ width: 0 }}
      animate={{ width: 'auto' }}
      transition={{ duration: text.length * 0.05, ease: 'linear' }}
      style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap' }}
    >
      {text}
    </motion.span>
  )
}

/**
 * Ripple Effect - Click ripple
 */
export function RippleButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileTap={{
        scale: 0.98,
      }}
    >
      <motion.span
        className="absolute inset-0 bg-white/20 rounded-full"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
      {children}
    </motion.button>
  )
}

/**
 * Count Up Animation - Number counter
 */
export function CountUp({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ value: 0 }}
        animate={{ value: end }}
        transition={{ duration, ease: 'easeOut' }}
      >
        {end}
      </motion.span>
      {suffix}
    </motion.span>
  )
}

/**
 * Parallax Section - Scroll parallax effect
 */
export function ParallaxSection({ children, className = '', speed = 0.5 }: { children: ReactNode; className?: string; speed?: number }) {
  return (
    <motion.div
      className={className}
      style={{
        y: 0,
      }}
      whileInView={{
        y: speed * 50,
      }}
      viewport={{ once: false }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {children}
    </motion.div>
  )
}
