import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { pt } from './translations/pt'
import { en } from './translations/en'
import { es } from './translations/es'

// Types
export type Language = 'pt' | 'en' | 'es'
export type Translations = typeof pt

const translations: Record<Language, Translations> = {
  pt,
  en,
  es,
}

// Available languages
export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
]

// Context type
interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

// Create context
const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Detect browser language
function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase()
  
  if (browserLang.startsWith('pt')) return 'pt'
  if (browserLang.startsWith('es')) return 'es'
  if (browserLang.startsWith('en')) return 'en'
  
  // Default to Portuguese
  return 'pt'
}

// Get stored language or detect from browser
function getInitialLanguage(): Language {
  const stored = localStorage.getItem('chefiapp-language') as Language | null
  if (stored && translations[stored]) {
    return stored
  }
  return detectBrowserLanguage()
}

// Provider component
export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize language on mount (client-side only)
  useEffect(() => {
    const initialLang = getInitialLanguage()
    setLanguageState(initialLang)
    setIsInitialized(true)
    
    // Update html lang attribute
    document.documentElement.lang = translations[initialLang].lang
  }, [])

  // Set language and persist
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('chefiapp-language', lang)
    document.documentElement.lang = translations[lang].lang
  }

  // Get translations for current language
  const t = translations[language]

  // Don't render until initialized to avoid hydration issues
  if (!isInitialized) {
    return null
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

// Hook to use translations
export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return context
}

// Hook to get just the translation object
export function useT() {
  const { t } = useTranslation()
  return t
}

