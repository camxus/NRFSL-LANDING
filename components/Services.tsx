import {
  Send, FileText, TrendingUp, Headphones,
  CheckCircle, Building, Globe
} from 'lucide-react'

const services = [
  {
    icon: Send,
    color: 'from-blue-500 to-blue-600',
    title: 'Remittance',
    desc: 'To any Nigerian Bank with best fee guarantee, secure and fast Real-time transaction processing, confirmation and update on all activities.',
  },
  {
    icon: FileText,
    color: 'from-teal-500 to-teal-600',
    title: 'Bill Payments',
    desc: 'Pay utility bills, school fees, and support family needs seamlessly from anywhere in the world.',
  },
  {
    icon: FileText,
    color: 'from-green-500 to-green-600',
    title: 'E-Passports',
    desc: 'Become a proud Nigerian enjoying the luxury and privileges of E-passport while traveling.',
  },
  {
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-600',
    title: 'Investments',
    desc: 'Access Nigerian investment opportunities like stocks, real estate, and grow your homeland wealth.',
  },
  {
    icon: Headphones,
    color: 'from-cyan-500 to-cyan-600',
    title: 'Diaspora Help-desk',
    desc: '24/7 dedicated support for Diasporans in distress.',
  },
  {
    icon: CheckCircle,
    color: 'from-blue-600 to-blue-700',
    title: 'Verified Service Providers',
    desc: 'Connect with trusted service providers for property management, engineers, real estate developers, artisans, legal services, and more.',
  },
  {
    icon: Building,
    color: 'from-green-600 to-green-700',
    title: 'Government Services',
    desc: 'Access government services, certificates, and documentations like NYSC with ease.',
  },
  {
    icon: Globe,
    color: 'from-primary to-secondary',
    title: 'Forex Trade',
    desc: 'We offer B2B Forex Services to facilitate seamless currency exchange and trading for businesses.',
  },
  {
    icon: CheckCircle,
    color: 'from-red-500 to-red-600',
    title: 'Diaspora Voting',
    desc: 'Exercise your civic rights and participate in Nigerian elections from abroad.',
  },
]

export default function Services() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600">Comprehensive financial solutions for the diaspora</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
