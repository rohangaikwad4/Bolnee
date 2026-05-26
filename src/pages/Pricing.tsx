import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pricingTiers } from '../lib/data'

export default function Pricing() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Choose the Plan That Fits Your Growth
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Start for free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl shadow-sm border-2 p-8 flex flex-col transition-all duration-300 hover:shadow-lg ${
                  tier.popular
                    ? 'border-blue-600 ring-2 ring-blue-600/20 scale-105 lg:scale-110'
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{tier.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="text-gray-500 text-sm">/month</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={tier.name === 'Enterprise' ? '/contact' : '/register'}
                  className={`block text-center py-3 px-6 rounded-xl font-medium transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our pricing and plans</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Can I switch plans at any time?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.' },
              { q: 'Is there a free trial for paid plans?', a: 'Absolutely! All paid plans come with a 14-day free trial. No credit card required.' },
              { q: 'What happens if I exceed my message limit?', a: 'You can purchase additional message packs or upgrade to a higher tier. We\'ll notify you before you hit your limit.' },
              { q: 'Do you offer discounts for annual billing?', a: 'Yes, save 20% when you choose annual billing on any paid plan.' },
              { q: 'Can I cancel my subscription?', a: 'You can cancel anytime. Your access continues until the end of your billing period.' },
            ].map((faq) => (
              <details key={faq.q} className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                <summary className="flex items-center justify-between text-sm font-medium text-gray-900 list-none">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
