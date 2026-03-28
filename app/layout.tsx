import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Diaspora Wallet - Your Unified Remittance Platform',
  description: 'Your unified all-in-one Diaspora Wallet for seamless money transfers, banking, identity services, and civic participation for Nigerians abroad.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="h-full">{children}</body>
    </html>
  )
}
