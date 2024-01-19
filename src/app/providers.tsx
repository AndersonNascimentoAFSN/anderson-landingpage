'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps as NextThemesProviderProps } from 'next-themes/dist/types'
import type { ReactNode } from 'react'

function NextThemesProviderComponent({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </NextThemesProvider>
  )
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <NextThemesProviderComponent>
        {children}
      </NextThemesProviderComponent>
    </>
  )
}