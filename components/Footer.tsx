export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                DW
              </div>
              <span className="font-bold text-white text-lg">DIASPORA WALLET</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering Nigerians in the diaspora with seamless financial, identity, and civic solutions.
            </p>
          </div>

          {/* Product */}
          {/* <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              {['Services', 'Non-Resident Card', 'Remittances', 'Investments', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-secondary transition">{item}</a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company */}
          {/* <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Press', 'Partners', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-secondary transition">{item}</a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:connect@diasporawallet.com" className="hover:text-secondary transition text-sm">
                  connect@diasporawallet.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <span>+4367877977287</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>Location</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">© 2026 Diaspora Wallet. All rights reserved.</p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-secondary transition text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
