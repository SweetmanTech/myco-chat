'use client'

import useZoraCreate from '@/hooks/useZoraCreate'
import React, { createContext, useContext, useMemo } from 'react'

const ZoraCreateContext = createContext<ReturnType<typeof useZoraCreate> | null>(null)

const ZoraCreateProvider = ({ children }: { children: React.ReactNode }) => {
  const zoraCreate = useZoraCreate()

  const value = useMemo(() => ({ ...zoraCreate }), [zoraCreate])

  return <ZoraCreateContext.Provider value={value}>{children}</ZoraCreateContext.Provider>
}

const useZoraCreateProvider = () => {
  const context = useContext(ZoraCreateContext)
  if (context === null) {
    throw new Error('useZoraCreateProvider must be used within a ZoraCreateProvider')
  }
  return context
}

export { ZoraCreateProvider, useZoraCreateProvider }
