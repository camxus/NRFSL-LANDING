'use client'

import { useState } from 'react'
import { Heart, Globe, Users, Shield } from 'lucide-react'

const amounts = ['$10', '$25', '$50', '$100', '$250', 'Custom']

const causes = [
  {
    icon: Globe,
    title: 'Diaspora Connectivity Fund',
    desc: 'Help us expand our services to more countries and connect more Nigerians to their homeland.',
    color: 'from-blue-500 to-blue-600',
    raised: 68,
    goal: '$50,000',
  },
  {
    icon: Users,
    title: 'Community Support Initiative',
    desc: 'Support diasporans in distress — emergency financial assistance and helpdesk coverage.',
    color: 'from-green-500 to-green-600',
    raised: 42,
    goal: '$30,000',
  },
  {
    icon: Shield,
    title: 'Civic Participation Fund',
    desc: 'Fund infrastructure for diaspora voting and civic identity document access for all Nigerians abroad.',
    color: 'from-secondary to-teal-600',
    raised: 55,
    goal: '$20,000',
  },
]

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState('$25')
  const [customAmount, setCustomAmount] = useState('')

  return (
    <section id="Donation" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Heart className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Support Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your contribution helps us build better infrastructure for the Nigerian diaspora community. Every dollar counts.
          </p>
        </div>

        {/* Causes */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {causes.map((cause) => {
            const Icon = cause.icon
            return (
              <div key={cause.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className={`bg-gradient-to-br ${cause.color} p-6 text-white`}>
                  <Icon className="w-8 h-8 mb-3" />
                  <h3 className="text-lg font-bold">{cause.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{cause.desc}</p>

                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{cause.raised}% raised</span>
                      <span>Goal: {cause.goal}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${cause.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${cause.raised}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Donation form */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Make a Donation</h3>

          {/* Amount selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Select Amount</label>
            <div className="grid grid-cols-3 gap-3">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount)
                    if (amount !== 'Custom') setCustomAmount('')
                  }}
                  className={`py-3 rounded-lg border-2 font-semibold text-sm transition-all duration-200 ${
                    selectedAmount === amount
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>
            {selectedAmount === 'Custom' && (
              <div className="mt-3">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter custom amount ($)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
              </div>
            )}
          </div>

          {/* Donor info */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2">
            <Heart className="w-5 h-5" />
            Donate {selectedAmount !== 'Custom' ? selectedAmount : customAmount ? `$${customAmount}` : ''}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Secure payment processing. All donations are encrypted and protected.
          </p>
        </div>
      </div>
    </section>
  )
}
