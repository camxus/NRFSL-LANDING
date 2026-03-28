import { Users, CreditCard, Send, CheckCircle } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Users,
    title: 'Register',
    desc: 'Create your account in minutes with your basic information and verify your identity.',
  },
  {
    num: '02',
    icon: CreditCard,
    title: 'Get Your Card',
    desc: 'Receive your Non-Resident Multi-Purpose Card and link your foreign and Nigerian accounts.',
  },
  {
    num: '03',
    icon: Send,
    title: 'Select Service & Start Transacting',
    desc: 'Send money, pay bills, invest, and access all services through our unified platform.',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Stay Connected',
    desc: 'Manage your identity, civic rights, and financial needs—all from one dashboard.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Getting started with Diaspora Wallet is simple. Follow these four easy steps to begin your journey to seamless Nigerian financial integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.num}
                  </div>
                  <div className="mt-8 mb-6 flex justify-center text-primary">
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-secondary text-white rounded-lg hover:opacity-90 transition transform hover:scale-105 font-semibold shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  )
}
