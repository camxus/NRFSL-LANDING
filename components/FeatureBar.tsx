const features = [
  { title: 'Zero fees', sub: 'On First Transfer' },
  { title: 'Instant', sub: 'Remittances' },
  { title: 'Secure', sub: 'Transactions' },
  { title: 'Multi-currency', sub: 'Transactions' },
  { title: 'Compliant', sub: 'Operations' },
  { title: 'World-wide', sub: 'Reach' },
  { title: 'Multi-purpose', sub: 'Platform' },
  { title: 'Real-time', sub: 'Processing' },
]

export default function FeatureBar() {
  return (
    <section className="py-12 bg-white border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
          {features.map((f) => (
            <div key={f.title} className="p-3">
              <div className="font-semibold text-primary text-sm">{f.title}</div>
              <div className="text-xs text-gray-600 mt-1">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
