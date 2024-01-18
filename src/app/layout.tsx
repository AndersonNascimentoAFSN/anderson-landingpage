import type { Metadata } from 'next'
import { fontHeading, fontSans } from './fonts'
import { cn } from '@/lib/utils'
import { Providers } from './providers'

import './globals.css'

export const metadata: Metadata = {
  title: 'Anderson Nascimento',
  description: 'Anderson Nascimento Landing Page',
  keywords: [
    'Anderson Nascimento',
    'Web developer',
    'Web developer Frontend',
    'Next.js',
    'React',
    'Javascript',
    'Typescript',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  )
}
