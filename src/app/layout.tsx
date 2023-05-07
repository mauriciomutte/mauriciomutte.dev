import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { Footer } from '@/ui/footer'

import '@/styles/global.css'
import Header from '@/ui/header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
