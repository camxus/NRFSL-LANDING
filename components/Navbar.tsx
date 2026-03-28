'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#About', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#FAQ', label: 'FAQ' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-[6px] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/azure.png" alt="Diaspora Wallet" width={48} height={48} className="h-12 w-12 object-contain" />
            <Image src="/azure_type.png" alt="Diaspora Wallet" width={400} height={100} className="hidden sm:block h-[140px] sm:h-[200px] w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-primary transition font-medium"
              >
                {link.label}
              </a>
            ))}
            <Link href="https://app.diaspora-wallet.com" className="px-5 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition text-sm">
              Login
            </Link>
            <Link href="https://app.diaspora-wallet.com/sign-up" className="px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition text-sm">
              Sign up
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 px-4 pt-2">
              <Link href="https://app.diaspora-wallet.com" className="flex-1 text-center px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition text-sm">
                Login
              </Link>
              <Link href="https://app.diaspora-wallet.com/sign-up" className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition text-sm">
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}