'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is Diaspora Wallet?',
    a: 'Diaspora Wallet is a unified all-in-one platform designed for Nigerians living abroad. It enables seamless money transfers, access to Nigerian banking services, civic identity documents (BVN, NIN), visa assistance, and much more — all from a single dashboard.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply click "Sign Up", create your account with basic information, complete your KYC verification by uploading your ID and proof of address, and you\'re ready to start transacting. The entire process takes just a few minutes.',
  },
  {
    q: 'What currencies are supported?',
    a: 'Diaspora Wallet supports multi-currency transactions, allowing you to send money from major foreign currencies (USD, GBP, EUR, CAD and more) directly to Nigerian Naira accounts at competitive exchange rates.',
  },
  {
    q: 'How secure is Diaspora Wallet?',
    a: 'We use bank-level encryption and security protocols. All transactions are secured with two-factor authentication, and our platform is fully KYC/AML compliant. Your funds and personal data are always protected.',
  },
  {
    q: 'How long does a money transfer take?',
    a: 'Most transfers are processed in real-time. In some cases, transfers may take up to 24 hours depending on the receiving bank and local network conditions in Nigeria.',
  },
  {
    q: 'Can I get a Nigerian bank account from abroad?',
    a: 'Yes! One of our core services is helping diasporans open Nigerian bank accounts and obtain a Non-Resident Bank Verification Number (NRBVN) without needing to travel back to Nigeria.',
  },
  {
    q: 'What is the Non-Resident Card (NRC)?',
    a: 'The Non-Resident Card is a multi-purpose card that links your foreign and Nigerian accounts, allowing you to transact seamlessly in both countries. It can be used for ATM withdrawals, online payments, and point-of-sale transactions.',
  },
  {
    q: 'Does Diaspora Wallet support diaspora voting?',
    a: 'Yes, we are working with relevant Nigerian authorities to facilitate diaspora voting, allowing eligible Nigerians abroad to exercise their civic right to vote in Nigerian elections from wherever they are in the world.',
  },
  {
    q: 'What are the fees for transfers?',
    a: 'Your first transfer is completely fee-free. After that, we offer some of the most competitive rates in the market with full transparency — no hidden fees. Our exact fee schedule is displayed before you confirm any transaction.',
  },
  {
    q: 'How do I contact support?',
    a: 'Our Diaspora Help-desk is available 24/7. You can reach us via email at connect@diasporawallet.com, by phone at +4367877977287, or through the in-app chat feature.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="FAQ" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Diaspora Wallet
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-semibold text-gray-900 group-hover:text-primary transition pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-4">Still have questions? We&apos;re here to help.</p>
          <a
            href="mailto:connect@diasporawallet.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition transform hover:scale-105 font-semibold"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
