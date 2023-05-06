import { Inter } from 'next/font/google'

import { Footer } from '@/ui/footer'

import '@/styles/global.css'

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
