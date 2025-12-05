import { useEffect } from 'react'

/**
 * App Store Deep Linking & Smart Banners
 *
 * Features:
 * - iOS Smart App Banner
 * - Android Intent Scheme
 * - Universal Links configuration
 * - Smart redirect to app if installed
 *
 * Setup:
 * 1. Replace APP_ID with your actual App Store ID
 * 2. Replace BUNDLE_ID with your iOS bundle identifier
 * 3. Replace PACKAGE_NAME with your Android package name
 * 4. Add this component to your main App.tsx
 *
 * @example
 * <AppDeepLinking />
 */
export function AppDeepLinking() {
  useEffect(() => {
    // Configuration
    const IOS_APP_ID = 'XXXXX' // Replace with App Store ID
    const IOS_BUNDLE_ID = 'com.chefiapp.app'
    const ANDROID_PACKAGE = 'com.chefiapp.app'
    const APP_SCHEME = 'chefiapp://'

    // Add iOS Smart App Banner
    const iosMetaTag = document.createElement('meta')
    iosMetaTag.name = 'apple-itunes-app'
    iosMetaTag.content = `app-id=${IOS_APP_ID}, app-argument=${APP_SCHEME}`
    document.head.appendChild(iosMetaTag)

    // Add Android Intent
    const androidMetaTag = document.createElement('meta')
    androidMetaTag.name = 'google-play-app'
    androidMetaTag.content = `app-id=${ANDROID_PACKAGE}`
    document.head.appendChild(androidMetaTag)

    // Add Universal Links support
    const universalLinkTag = document.createElement('link')
    universalLinkTag.rel = 'alternate'
    universalLinkTag.href = `ios-app://${IOS_APP_ID}/chefiapp/open`
    document.head.appendChild(universalLinkTag)

    // Add Android App Link
    const androidLinkTag = document.createElement('link')
    androidLinkTag.rel = 'alternate'
    androidLinkTag.href = `android-app://${ANDROID_PACKAGE}/https/chefiapp.com`
    document.head.appendChild(androidLinkTag)

    // Cleanup
    return () => {
      document.head.removeChild(iosMetaTag)
      document.head.removeChild(androidMetaTag)
      document.head.removeChild(universalLinkTag)
      document.head.removeChild(androidLinkTag)
    }
  }, [])

  return null
}

/**
 * Smart App Download Button
 * Detects platform and shows appropriate link
 */
export function SmartDownloadButton({ className = '' }: { className?: string }) {
  const handleDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isIOS = /iphone|ipad|ipod/.test(userAgent)
    const isAndroid = /android/.test(userAgent)

    if (isIOS) {
      // Try to open app, fallback to App Store
      window.location.href = 'chefiapp://'
      setTimeout(() => {
        window.location.href = 'https://apps.apple.com/app/chefiapp/idXXXXX'
      }, 500)
    } else if (isAndroid) {
      // Try to open app, fallback to Play Store
      window.location.href = 'intent://chefiapp#Intent;scheme=chefiapp;package=com.chefiapp.app;end'
      setTimeout(() => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.chefiapp.app'
      }, 500)
    } else {
      // Desktop - show QR code or redirect to download page
      alert('Escaneie o QR code com seu celular para baixar o app!')
    }
  }

  return (
    <button onClick={handleDownload} className={className}>
      Baixar App
    </button>
  )
}

/**
 * QR Code for App Download
 * Generates QR code pointing to app download
 */
export function AppDownloadQR() {
  const downloadUrl = 'https://chefiapp.com/download' // Universal link

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-4 bg-white rounded-xl">
        {/* Placeholder for QR code - use a library like qrcode.react */}
        <div className="w-48 h-48 bg-slate-200 flex items-center justify-center text-slate-500 text-xs text-center">
          QR Code here
          <br />
          (Use qrcode.react library)
        </div>
      </div>
      <p className="text-sm text-slate-400 text-center">
        Escaneie para baixar o app
      </p>
    </div>
  )
}

/**
 * Platform Detection Utility
 */
export function usePlatformDetection() {
  const userAgent = navigator.userAgent.toLowerCase()

  return {
    isIOS: /iphone|ipad|ipod/.test(userAgent),
    isAndroid: /android/.test(userAgent),
    isMobile: /mobile|android|iphone|ipad|ipod/.test(userAgent),
    isDesktop: !/mobile|android|iphone|ipad|ipod/.test(userAgent),
  }
}
