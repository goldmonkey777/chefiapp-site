import { useEffect } from 'react'

// Google Analytics 4 (GA4) - Silicon Valley Standard
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
    fbq?: (...args: any[]) => void
    _fbq?: any
    hj?: (...args: any[]) => void
    _hjSettings?: any
    posthog?: any
  }
}

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4 (GA4)
    const GA4_ID = 'G-XXXXXXXXXX' // ← REPLACE WITH YOUR GA4 ID

    if (GA4_ID !== 'G-XXXXXXXXXX') {
      // Load GA4 script
      const gaScript = document.createElement('script')
      gaScript.async = true
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
      document.head.appendChild(gaScript)

      // Initialize GA4
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer!.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', GA4_ID, {
        send_page_view: true,
        cookie_flags: 'SameSite=None;Secure'
      })

      console.log('✅ GA4 initialized:', GA4_ID)
    }

    // Meta Pixel (Facebook Pixel)
    const PIXEL_ID = 'XXXXXXXXXXXXX' // ← REPLACE WITH YOUR PIXEL ID

    if (PIXEL_ID !== 'XXXXXXXXXXXXX') {
      // Load Meta Pixel
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = true
        n.version = '2.0'
        n.queue = []
        t = b.createElement(e)
        t.async = true
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

      window.fbq!('init', PIXEL_ID)
      window.fbq!('track', 'PageView')

      console.log('✅ Meta Pixel initialized:', PIXEL_ID)
    }

    // Hotjar (Heatmaps & Session Recording)
    const HOTJAR_ID = 'XXXXXXX' // ← REPLACE WITH YOUR HOTJAR ID
    const HOTJAR_SV = '6' // Snippet version

    if (HOTJAR_ID !== 'XXXXXXX') {
      (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
        h.hj = h.hj || function() {
          (h.hj.q = h.hj.q || []).push(arguments)
        }
        h._hjSettings = { hjid: parseInt(HOTJAR_ID), hjsv: parseInt(HOTJAR_SV) }
        a = o.getElementsByTagName('head')[0]
        r = o.createElement('script')
        r.async = 1
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
        a.appendChild(r)
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')

      console.log('✅ Hotjar initialized:', HOTJAR_ID)
    }

    // PostHog (Product Analytics)
    const POSTHOG_KEY = 'phc_XXXXXXXXXXXXXXXXXXXXXX' // ← REPLACE WITH YOUR POSTHOG KEY
    const POSTHOG_HOST = 'https://app.posthog.com'

    if (POSTHOG_KEY !== 'phc_XXXXXXXXXXXXXXXXXXXXXX') {
      const posthogScript = document.createElement('script')
      posthogScript.innerHTML = `
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        posthog.init('${POSTHOG_KEY}', {api_host:'${POSTHOG_HOST}'})
      `
      document.head.appendChild(posthogScript)

      console.log('✅ PostHog initialized')
    }

    // Track initial page view
    trackEvent('page_view', {
      page_path: window.location.pathname,
      page_title: document.title
    })

  }, [])

  return null
}

// Helper functions for event tracking
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  // GA4
  if (window.gtag) {
    window.gtag('event', eventName, params)
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('trackCustom', eventName, params)
  }

  // PostHog
  if (window.posthog) {
    window.posthog.capture(eventName, params)
  }

  console.log('📊 Event tracked:', eventName, params)
}

export const trackPageView = (pagePath: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: document.title
  })
}

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName
  })

  // Meta Pixel conversion event
  if (window.fbq) {
    window.fbq('track', 'Lead')
  }
}

export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent('click_cta', {
    cta_name: ctaName,
    cta_location: ctaLocation
  })
}

export const trackSectionView = (sectionName: string) => {
  trackEvent('view_section', {
    section_name: sectionName
  })
}

export const trackExternalLink = (linkUrl: string, linkText: string) => {
  trackEvent('click_external_link', {
    link_url: linkUrl,
    link_text: linkText,
    outbound: true
  })
}
