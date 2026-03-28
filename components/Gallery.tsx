const galleryItems = [
  {
    title: 'Seamless Money Transfers',
    desc: 'Send money home in seconds',
    color: 'from-blue-400 to-blue-600',
    emoji: '💸',
  },
  {
    title: 'Non-Resident Bank Card',
    desc: 'Your passport to Nigerian banking',
    color: 'from-green-400 to-green-600',
    emoji: '💳',
  },
  {
    title: 'BVN Registration',
    desc: 'Get your BVN from anywhere in the world',
    color: 'from-teal-400 to-teal-600',
    emoji: '🔐',
  },
  {
    title: 'Diaspora Help-desk',
    desc: '24/7 support whenever you need it',
    color: 'from-purple-400 to-purple-600',
    emoji: '🎧',
  },
  {
    title: 'Investment Opportunities',
    desc: 'Grow your homeland wealth remotely',
    color: 'from-orange-400 to-orange-600',
    emoji: '📈',
  },
  {
    title: 'Diaspora Voting',
    desc: 'Exercise your civic rights from abroad',
    color: 'from-indigo-400 to-indigo-600',
    emoji: '🗳️',
  },
  {
    title: 'E-Passport Services',
    desc: 'Travel with pride as a Nigerian',
    color: 'from-red-400 to-red-600',
    emoji: '🛂',
  },
  {
    title: 'Bill Payments',
    desc: 'Pay Nigerian bills from anywhere',
    color: 'from-cyan-400 to-cyan-600',
    emoji: '🧾',
  },
  {
    title: 'Government Services',
    desc: 'Access Nigerian government portals easily',
    color: 'from-yellow-400 to-yellow-600',
    emoji: '🏛️',
  },
]

export default function Gallery() {
  return (
    <section id="Gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Gallery</h2>
          <p className="text-lg text-gray-600">
            A glimpse into the world of Diaspora Wallet services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Card background */}
              <div className={`bg-gradient-to-br ${item.color} h-56 flex flex-col items-center justify-center p-6`}>
                <span className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
              </div>

              {/* Card content */}
              <div className="bg-white p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary transition">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
