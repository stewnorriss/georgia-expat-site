'use client'

import { useIsClient } from '../hooks/useIsClient'
import { ReactNode } from 'react'

interface ClientOnlyWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function ClientOnlyWrapper({ children, fallback = null }: ClientOnlyWrapperProps) {
  const isClient = useIsClient()
  
  if (!isClient) {
    return <>{fallback}</>
  }
  
  return <>{children}</>
}