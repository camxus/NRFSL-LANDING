import { Target, Globe, CheckCircle, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <section id="About" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Empower Nigerians in the Diaspora by enabling them with a user-friendly multi-purpose facility for homeland wealth migration and access to multiple civic entitlements like NRBVN, NIN, NGR Phone number, E-Passports, Financial Inclusion, Diaspora Helpdesk, Diaspora Voting, etc.
            </p>
            <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-green-500">
              <p className="text-gray-700 italic">
                We are committed to connecting you to your roots and facilitate meaningful participation in Nigeria&apos;s growth.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Goal */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-10 text-center text-white">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Goal</h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              To transform how Nigerians abroad connect, remit, invest, and engage with their homeland. We aspire to offer you a bit of home away from home and keep you beneficially connected to your roots no matter where you are in the world.
            </p>
          </div>
        </div>

        {/* UVP */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
              <TrendingUp className="w-20 h-20 text-white" />
            </div>
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Unique Value Propositions (UVP)</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To leapfrog traditional remittances, creating a disruptive, inclusive, end-to-end financial ecosystem that bridges foreign and Nigerian bank accounts.
            </p>
            <div className="space-y-3">
              {[
                'Select Service and start transacting',
                'Create your wallets in minutes by',
                'Inserting your basic information and upload your ID',
              ].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
