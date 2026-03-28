import {
  ArrowRightLeft, CreditCard, Landmark, Fingerprint,
  FileText, Plane, Smartphone, Headphones, CheckCircle
} from 'lucide-react'

import Image from "next/image"
import Link from 'next/link'

const services = [
  { href: '#transfer', icon: ArrowRightLeft, label: 'Money Transfer', color: 'from-primary to-secondary', highlight: false },
  { href: '#card', icon: CreditCard, label: 'Get Your Bank Card', color: 'from-blue-500 to-blue-600' },
  { href: '#bank', icon: Landmark, label: 'Get Your Bank Account', color: 'from-green-500 to-green-600' },
  { href: '#bvn', icon: Fingerprint, label: 'Get Your BVN', color: 'from-teal-500 to-teal-600' },
  { href: '#nin', icon: FileText, label: 'Get Your NIN', color: 'from-orange-500 to-orange-600' },
  { href: '#visa', icon: Plane, label: 'Get Your Visa', color: 'from-red-500 to-red-600' },
  { href: '#phone', icon: Smartphone, label: 'Get Your NGR Phone Number', color: 'from-cyan-500 to-cyan-600' },
  { href: '#helpdesk', icon: Headphones, label: 'Diaspora Help-desk', color: 'from-purple-500 to-purple-600' },
  { href: '#voting', icon: CheckCircle, label: 'Diaspora Voting', color: 'from-indigo-500 to-indigo-600' },
]

const stats = [
  { value: '100K+', label: 'Active Users' },
  { value: '$50M+', label: 'Transferred' },
  { value: '150+', label: 'Countries' },
]

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-4 md:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="inline-block px-3 md:px-6 py-1 md:py-2 bg-secondary/10 text-secondary rounded-full text-base md:text-xl font-bold">
              WELCOME TO
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-3 mb-8">
              DIASPORA WALLET<br />
              <span className="text-primary">REMITTANCE</span>
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-800 leading-relaxed">
              Your unified all-in-one Diaspora Wallet for access to:
            </p>

            {/* Mobile service grid */}
            <div className="md:hidden mt-3 grid grid-cols-3 gap-2">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    className={`group bg-white rounded-lg p-2 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${s.highlight ? 'ring-2 ring-primary' : ''}`}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center text-white mx-auto mb-1 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-center text-[8px] font-bold text-gray-900 group-hover:text-primary transition leading-tight">
                      {s.label}
                    </h3>
                  </a>
                )
              })}
            </div>

            {/* Mobile CTA buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:hidden">
              <Link href="https://app.diaspora-wallet.com/sign-up" className="px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition">
                Sign Up Now
              </Link>
            </div>

            {/* Mobile hero image */}
            <div className="mt-6 md:hidden">
              <div className="relative w-full max-w-sm h-72 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/hero.jpg"
                  alt="Global Connections Through Diaspora Remittance"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop right image */}
          <div className="hidden md:flex flex-col items-center justify-start">
            <div className="relative w-full max-w-sm h-72 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/hero.jpg"
                alt="Global Connections Through Diaspora Remittance"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-xs text-gray-600 font-medium text-center mt-2">
              Your trusted global wallet for seamless cross-border payments.
            </p>
          </div>
        </div>

        {/* Desktop service grid */}
        <div className="hidden md:block mt-6">
          <div className="grid grid-cols-9 gap-3">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.href}
                  href={s.href}
                  className={`group bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${s.highlight ? 'ring-2 ring-primary' : ''}`}
                >
                  <div className={`${s.highlight ? 'w-14 h-14' : 'w-12 h-12'} bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center text-white mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                    <Icon className={s.highlight ? 'w-7 h-7' : 'w-5 h-5'} />
                  </div>
                  <h3 className={`text-center ${s.highlight ? 'text-sm font-extrabold' : 'text-xs font-bold'} text-gray-900 group-hover:text-primary transition`}>
                    {s.label}
                  </h3>
                </a>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="mt-6 flex justify-center gap-4">
            <Link href="https://app.diaspora-wallet.com/sign-up" className="px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition">
              Sign Up Now
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-base md:text-lg font-bold text-primary">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
