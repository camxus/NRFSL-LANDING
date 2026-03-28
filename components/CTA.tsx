'use client'

import { useState } from 'react'

const stats = [
  { value: '100K+', label: 'Active Users' },
  { value: '$50M+', label: 'Transferred' },
  { value: '150+', label: 'Countries' },
  { value: '24/7', label: 'Support' },
]

export default function CTA() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join thousands of Nigerians in the diaspora who are already using Diaspora Wallet to seamlessly manage their finances, identity, and civic participation.
        </h2>
        <button className="px-8 py-4 bg-white text-primary rounded-lg hover:shadow-xl transition transform hover:scale-105 font-bold">
          Schedule a Demo
        </button>

        {/* Newsletter */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6">Get the latest news, features, and special offers delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
