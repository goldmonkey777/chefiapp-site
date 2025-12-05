import { useEffect, useRef, useCallback } from 'react'
import { trackEvent } from '../components/analytics/Analytics'

/**
 * Advanced Analytics Hook
 *
 * Features:
 * - Scroll depth tracking (25%, 50%, 75%, 100%)
 * - Time on page tracking (30s, 60s, 120s, 300s)
 * - Element visibility tracking (Intersection Observer)
 * - Rage click detection
 * - Exit intent detection
 *
 * @example
 * useAdvancedAnalytics()
 */
export function useAdvancedAnalytics() {
  const scrollDepthTracked = useRef<Set<number>>(new Set())
  const timeTracked = useRef<Set<number>>(new Set())
  const startTime = useRef<number>(Date.now())
  const clickCount = useRef<number>(0)
  const clickTimer = useRef<NodeJS.Timeout>()

  // Scroll Depth Tracking
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      )

      // Track milestones: 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100]
      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !scrollDepthTracked.current.has(milestone)
        ) {
          scrollDepthTracked.current.add(milestone)
          trackEvent('scroll_depth', {
            depth_percentage: milestone,
            page_path: window.location.pathname
          })
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Time on Page Tracking
  useEffect(() => {
    const intervals = [30000, 60000, 120000, 300000] // 30s, 60s, 120s, 300s

    const timers = intervals.map((interval, index) => {
      return setTimeout(() => {
        if (!timeTracked.current.has(interval)) {
          timeTracked.current.add(interval)
          trackEvent('time_on_page', {
            duration_seconds: interval / 1000,
            page_path: window.location.pathname
          })
        }
      }, interval)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  // Rage Click Detection (rapid clicks on same element)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      clickCount.current++

      if (clickTimer.current) {
        clearTimeout(clickTimer.current)
      }

      clickTimer.current = setTimeout(() => {
        if (clickCount.current >= 5) {
          // 5+ clicks in 2 seconds = rage click
          const target = e.target as HTMLElement
          trackEvent('rage_click', {
            element: target.tagName,
            element_id: target.id,
            element_class: target.className,
            click_count: clickCount.current
          })
        }
        clickCount.current = 0
      }, 2000)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
      if (clickTimer.current) {
        clearTimeout(clickTimer.current)
      }
    }
  }, [])

  // Exit Intent Detection (mouse leaves viewport)
  useEffect(() => {
    let exitIntentFired = false

    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !exitIntentFired &&
        Date.now() - startTime.current > 5000 // Only after 5s on page
      ) {
        exitIntentFired = true
        trackEvent('exit_intent', {
          time_on_page_seconds: Math.round((Date.now() - startTime.current) / 1000),
          page_path: window.location.pathname
        })
      }
    }

    document.addEventListener('mouseout', handleMouseLeave)
    return () => document.removeEventListener('mouseout', handleMouseLeave)
  }, [])

  // Session duration on unmount
  useEffect(() => {
    return () => {
      const sessionDuration = Math.round((Date.now() - startTime.current) / 1000)
      trackEvent('session_end', {
        session_duration_seconds: sessionDuration,
        page_path: window.location.pathname
      })
    }
  }, [])
}

/**
 * Track element visibility with Intersection Observer
 *
 * @example
 * const ref = useElementVisibility('hero-section')
 * <div ref={ref}>...</div>
 */
export function useElementVisibility(elementName: string) {
  const elementRef = useRef<HTMLElement>(null)
  const hasTracked = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true
            trackEvent('element_visible', {
              element_name: elementName,
              visibility_percentage: Math.round(entry.intersectionRatio * 100)
            })

            // Stop observing after first view
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.5 // 50% visible
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [elementName])

  return elementRef
}

/**
 * Track CTA hover intent (user hovers for 1+ second)
 *
 * @example
 * const handleHover = useHoverIntent('early-access-cta')
 * <button onMouseEnter={handleHover}>...</button>
 */
export function useHoverIntent(ctaName: string) {
  const hoverTimer = useRef<NodeJS.Timeout>()
  const hasTracked = useRef(false)

  const handleMouseEnter = useCallback(() => {
    hoverTimer.current = setTimeout(() => {
      if (!hasTracked.current) {
        hasTracked.current = true
        trackEvent('hover_intent', {
          cta_name: ctaName
        })
      }
    }, 1000) // 1 second hover
  }, [ctaName])

  const handleMouseLeave = useCallback(() => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current)
      }
    }
  }, [])

  return { handleMouseEnter, handleMouseLeave }
}

/**
 * Track form field interactions
 *
 * @example
 * const { handleFocus, handleBlur } = useFormFieldTracking('email')
 * <input onFocus={handleFocus} onBlur={handleBlur} />
 */
export function useFormFieldTracking(fieldName: string) {
  const focusTime = useRef<number>(0)

  const handleFocus = useCallback(() => {
    focusTime.current = Date.now()
    trackEvent('form_field_focus', {
      field_name: fieldName
    })
  }, [fieldName])

  const handleBlur = useCallback(() => {
    const timeSpent = Date.now() - focusTime.current
    trackEvent('form_field_blur', {
      field_name: fieldName,
      time_spent_seconds: Math.round(timeSpent / 1000)
    })
  }, [fieldName])

  return { handleFocus, handleBlur }
}
