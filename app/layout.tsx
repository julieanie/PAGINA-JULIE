import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Workshop Alteryx na Prática - Julie Anie",
  description: "Aprenda Alteryx na prática com Julie Anie, especialista em Tax Tech e automação tributária.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://static.hotmart.com/css/hotmart-fb.min.css" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://static.hotmart.com/checkout/widget.min.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
