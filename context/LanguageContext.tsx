'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { translations, type Language } from '@/i18n/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [language, setLanguageState] = useState<Language>('lv')

  useEffect(() => {
    const stored = localStorage.getItem('language') as Language | null
    if (stored && ['lv', 'ru', 'en'].includes(stored)) {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.cookie = `language=${lang}; path=/; max-age=31536000; SameSite=Lax`
    router.refresh()
  }

  const t = (path: string): string => {
    const keys = path.split('.')
    let current: any = translations[language]
    for (const key of keys) {
      if (current?.[key] === undefined) return path
      current = current[key]
    }
    return typeof current === 'string' ? current : path
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
