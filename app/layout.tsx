import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FinalYearRush — Final Year Project Assistance by Eryon AI',
  description:
    'FinalYearRush by Eryon AI helps final-year students build, document, and deliver their academic projects with confidence. From idea to execution — get expert guidance, documentation, and deployment support.',
  keywords: ['final year project', 'student project help', 'project documentation', 'FinalYearRush', 'Eryon AI', 'academic project assistance'],
  authors: [{ name: 'Eryon AI' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'FinalYearRush — Final Year Project Assistance',
    description: 'From idea to execution — we help you build, document, and deliver your project with confidence.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
