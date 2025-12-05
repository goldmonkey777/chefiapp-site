import { useEffect } from 'react'

/**
 * Crisp Live Chat Integration
 *
 * Features:
 * - Real-time customer support
 * - Lead qualification
 * - Automated responses
 * - Multi-language support
 *
 * Setup:
 * 1. Sign up at https://crisp.chat
 * 2. Get your website ID
 * 3. Add to .env: VITE_CRISP_WEBSITE_ID=your-id
 * 4. Add this component to App.tsx
 *
 * @example
 * <LiveChat />
 */
export function LiveChat() {
  useEffect(() => {
    const websiteId = import.meta.env.VITE_CRISP_WEBSITE_ID

    // Only load in production or if ID is set
    if (!websiteId) {
      console.warn('⚠️ Crisp chat disabled: VITE_CRISP_WEBSITE_ID not set')
      return
    }

    // Crisp chat configuration
    window.$crisp = []
    window.CRISP_WEBSITE_ID = websiteId

    // Set custom data
    window.$crisp.push(['set', 'user:email', ['visitor@example.com']])
    window.$crisp.push(['set', 'session:segments', [['landing-page']]])
    window.$crisp.push(['set', 'session:data', [[
      ['source', 'landing-page'],
      ['page', window.location.pathname]
    ]]])

    // Load Crisp script
    const script = document.createElement('script')
    script.src = 'https://client.crisp.chat/l.js'
    script.async = true
    document.head.appendChild(script)

    // Cleanup
    return () => {
      // Remove Crisp on unmount
      if (window.$crisp) {
        window.$crisp.push(['do', 'chat:hide'])
      }
    }
  }, [])

  return null // This component doesn't render anything
}

// TypeScript declarations for Crisp
declare global {
  interface Window {
    $crisp: any[]
    CRISP_WEBSITE_ID: string
  }
}
