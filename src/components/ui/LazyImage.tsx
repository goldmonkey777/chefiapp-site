import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  webpSrc?: string
  priority?: boolean
}

/**
 * Lazy Loading Image Component with WebP support
 *
 * Features:
 * - Intersection Observer for lazy loading
 * - WebP with PNG fallback
 * - Blur-up effect on load
 * - Priority loading option
 *
 * @example
 * <LazyImage
 *   src="/logo.png"
 *   webpSrc="/logo.webp"
 *   alt="ChefIApp Logo"
 *   className="w-32 h-32"
 * />
 */
export function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  webpSrc,
  priority = false
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority) return // Skip observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <motion.picture
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {/* WebP version for modern browsers */}
      {webpSrc && isInView && (
        <source srcSet={webpSrc} type="image/webp" />
      )}

      {/* Fallback to original format */}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
        className={className}
        style={{
          filter: isLoaded ? 'none' : 'blur(10px)',
          transition: 'filter 0.3s ease-in-out'
        }}
      />
    </motion.picture>
  )
}
