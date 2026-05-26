import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  Bot,
  Clock,
  Ticket,
  FileText,
  CheckCircle,
  ChevronDown,
  MessageSquare,
  X,
  Send,
  Star,
  TrendingDown,
  Infinity,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Zap,
  Percent,
} from 'lucide-react'
import { stats, features, howItWorks, testimonials, benefits, pricingTiers, faq } from '../lib/data'
import type { PriceTier } from '../types'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Ticket: Ticket,
  Clock: Clock,
  FileText: FileText,
}

const pricingIconMap: Record<string, React.FC<{ className?: string }>> = {
  Free: Zap,
  Standard: Bot,
  Premium: MessageCircle,
  Enterprise: Shield,
}

const statIcons = [Percent, Clock, TrendingDown, Zap]

const stepIcons = [BookOpen, Globe, BarChart]

const benefitIcons = [TrendingDown, Infinity, DollarSign, TrendingUp]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMsg, setChatMsg] = useState('')

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm">
                <Zap className="h-4 w-4" />
                AI Customer Service Platform
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your AI Chatbot for{' '}
                <span className="text-blue-200">Customer Service</span> 24/7
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100 lg:mx-0">
                Reduce support tickets by 80% with an AI agent that answers
                instantly, 24/7. Configure in 5 minutes, no code required.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  to="/signup"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-50 sm:w-auto"
                >
                  <Bot className="h-5 w-5" />
                  Create My Agent Free
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
                >
                  Request Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-200 lg:justify-start">
                <CheckCircle className="h-4 w-4 text-green-300" />
                No credit card required
                <span className="mx-2 opacity-40">•</span>
                <CheckCircle className="h-4 w-4 text-green-300" />
                Setup in 5 minutes
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative mx-auto w-full max-w-md">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg">
                  <div className="mb-4 flex items-center gap-3 border-b border-white/20 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Bolnee Assistant
                      </p>
                      <p className="text-xs text-blue-200">Online</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/20 px-4 py-2.5 text-sm text-white">
                        Hi! How can I help you today?
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-blue-400 px-4 py-2.5 text-sm text-white">
                        I need help tracking my order
                      </div>
                    </div>
                    <div className="flex">
                      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/20 px-4 py-2.5 text-sm text-white">
                        Sure! Let me check that for you right away.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="h-8 flex-1 rounded-full bg-white/10 px-4 text-sm text-white/60">
                        Type your message...
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-400">
                        <Send className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-blue-400/30 blur-3xl" />
                <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-blue-300/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. STATS BAR ===== */}
      <section className="relative -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 divide-x divide-y divide-blue-100 overflow-hidden rounded-2xl bg-white shadow-xl shadow-blue-900/5 md:grid-cols-4 md:divide-y-0">
            {stats.map((stat, i) => {
              const Icon = statIcons[i] || Percent
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center px-4 py-6 text-center transition-colors hover:bg-blue-50/50"
                >
                  <Icon className="mb-2 h-6 w-6 text-blue-600" />
                  <span className="text-3xl font-bold text-blue-800">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm text-gray-500">
                    {stat.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== 3. FEATURES SECTION ===== */}
      <section className="bg-blue-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Features
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Automate Your Customer Service?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stop wasting time on repetitive questions. Let AI handle the
              routine while your team focuses on what matters.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = iconMap[feature.icon] || Bot
              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== 4. HOW IT WORKS SECTION ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get started in 3 simple steps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From setup to first resolution in under 10 minutes.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {howItWorks.map((step, i) => {
              const Icon = stepIcons[i] || BookOpen
              return (
                <div key={i} className="relative">
                  <div className="h-full rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-4xl font-black text-blue-600/20">
                        {step.step}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-gray-600">{step.description}</p>
                    <ul className="mt-5 space-y-2">
                      {step.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="absolute -right-4 top-1/3 hidden text-blue-300 md:block">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== 5. TESTIMONIALS SECTION ===== */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by innovative companies
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              See what our customers have to say about Bolnee.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/15"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="leading-relaxed text-blue-50">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-blue-200">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. BENEFITS SECTION ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Results
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Measurable impact for your business
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[i] || TrendingUp
              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-3xl font-black text-blue-600">
                    {b.metric}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {b.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== 7. PRICING SECTION ===== */}
      <section className="bg-blue-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Pricing
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A plan for every stage
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start free, upgrade when you need more.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {pricingTiers.map((tier: PriceTier, i) => {
              const Icon = pricingIconMap[tier.name] || Bot
              const isPopular = tier.popular
              return (
                <div
                  key={i}
                  className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                    isPopular
                      ? 'border-blue-500 ring-2 ring-blue-500'
                      : 'border-gray-200'
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {tier.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-gray-900">
                      {tier.price}
                    </span>
                    {tier.price !== 'Custom' && (
                      <span className="text-sm text-gray-500">/month</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {tier.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={tier.name === 'Enterprise' ? '/contact' : '/signup'}
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isPopular
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200 hover:bg-blue-700'
                        : 'border border-blue-200 text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== 8. FAQ SECTION ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faq.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-blue-100 transition-all"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-blue-50"
                >
                  <span className="text-base font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-blue-600 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="border-t border-blue-100 px-6 py-4">
                    <p className="leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. FINAL CTA SECTION ===== */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your customer service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Join hundreds of businesses that already trust Bolnee to automate
            their support. Free trial, no commitment.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-50 sm:w-auto"
            >
              <Bot className="h-5 w-5" />
              Create My Agent Free
            </Link>
            <Link
              to="/demo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
            >
              Request Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-center gap-5 text-sm text-blue-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" />
              No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" />
              5 min setup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* ===== 10. CHAT WIDGET ===== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {chatOpen && (
          <div className="w-80 animate-[fadeIn_0.2s_ease-out] rounded-2xl border border-blue-100 bg-white shadow-2xl shadow-blue-900/10">
            <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <span className="text-sm font-semibold">Bolnee Assistant</span>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="rounded-lg p-1 transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="h-64 space-y-3 overflow-y-auto p-4">
              <div className="flex">
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-blue-50 px-4 py-2.5 text-sm text-gray-700">
                  Hello! 👋 I'm your virtual assistant. How can I help you
                  today?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-blue-600 px-4 py-2.5 text-sm text-white">
                  I'd like to know more about your pricing
                </div>
              </div>
              <div className="flex">
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-blue-50 px-4 py-2.5 text-sm text-gray-700">
                  Great question! We offer plans starting from Free up to
                  Enterprise. Which plan are you interested in?
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-blue-100 p-3">
              <input
                type="text"
                value={chatMsg}
                onChange={(e) => setChatMsg(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full bg-blue-50 px-4 py-2 text-sm outline-none ring-1 ring-blue-100 transition-all focus:ring-blue-300"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setChatMsg('')
                  }
                }}
              />
              <button
                onClick={() => setChatMsg('')}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-900/30 transition-all hover:scale-105 hover:shadow-blue-900/40 active:scale-95"
        >
          {chatOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  )
}

function BookOpen({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function Globe({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function BarChart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}

function Shield({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
