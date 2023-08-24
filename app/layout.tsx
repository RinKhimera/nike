import type { Metadata } from "next"
import { Montserrat, Palanquin } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const palanquin = Palanquin({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-palanquin",
})

export const metadata: Metadata = {
  title: "Nike",
  description: "Nike clone website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${palanquin.variable}`}>
      <body>{children}</body>
    </html>
  )
}
