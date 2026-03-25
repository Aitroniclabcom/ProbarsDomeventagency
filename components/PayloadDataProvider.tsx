'use client'

import { createContext, useContext, type ReactNode } from 'react'

type PayloadPageData = {
  layout?: any[] | null
  seo?: any
} | null

type PayloadSettingsData = {
  general?: any
  header?: any
  footer?: any
} | null

const PayloadPageContext = createContext<PayloadPageData>(null)
const PayloadSettingsContext = createContext<PayloadSettingsData>(null)

export function PayloadPageProvider({
  children,
  data,
}: {
  children: ReactNode
  data: PayloadPageData
}) {
  return (
    <PayloadPageContext.Provider value={data}>
      {children}
    </PayloadPageContext.Provider>
  )
}

export function PayloadSettingsProvider({
  children,
  data,
}: {
  children: ReactNode
  data: PayloadSettingsData
}) {
  return (
    <PayloadSettingsContext.Provider value={data}>
      {children}
    </PayloadSettingsContext.Provider>
  )
}

export function usePayloadPage() {
  return useContext(PayloadPageContext)
}

export function usePayloadSettings() {
  return useContext(PayloadSettingsContext)
}
