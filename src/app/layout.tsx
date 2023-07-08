import { Metadata } from 'next'
import Head from 'next/head'
import NextScript from 'next/script'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { Footer } from '@/ui/footer'

import '@/styles/global.css'
import Header from '@/ui/header'
import { GA_TRACKING_ID } from '@/lib/gtag'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fira_code = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Maurício Mutte',
    template: '%s | Maurício Mutte',
  },
  description:
    'A Software Engineer with a passion for all things tech, particularly in the Frontend development space.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fira_code.variable}`}>
      <Head>
        <NextScript
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <NextScript id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </NextScript>
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
