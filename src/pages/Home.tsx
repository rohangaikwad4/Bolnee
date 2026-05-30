import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Bot, Clock, FileText, CheckCircle,
  ChevronDown, MessageSquare, X, Send, Star,
  ArrowRight, Zap, Percent, Users, Shield,
} from 'lucide-react'
import {
  stats, howItWorks, testimonials,
  faq, customers, beforeAfter, featureCards, integrations, securityBadges,
} from '../lib/data'

const statIcons = [Percent, Clock, Zap]
const stepIcons = [BookOpen, Globe, BarChart]
const cardIcons = [MessageCircle, Zap, FileText, MessageSquare, Users, Bot]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMsg, setChatMsg] = useState('')

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center pt-20 pb-16 lg:pt-28 lg:pb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <Zap className="h-4 w-4" />
              AI Customer Service Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
              Make AI your expert{' '}
              <span className="text-violet-200">customer service agent</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-violet-100 max-w-2xl">
              It's like having ChatGPT specifically for your product. Instantly answer your visitors' questions with a personalized chatbot trained on your website content.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-700 shadow-lg shadow-brand-900/20 hover:bg-violet-50 transition-all"
              >
                <Bot className="h-5 w-5" />
                Start a free trial
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-all"
              >
                Book a demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-violet-200">
              <CheckCircle className="h-4 w-4 text-green-300" />
              No credit card required
              <span className="mx-2 opacity-40">•</span>
              <CheckCircle className="h-4 w-4 text-green-300" />
              Cancel anytime
            </div>
          </div>

          {/* Customer logos */}
          <div className="pb-16">
            <p className="text-center text-sm font-medium text-violet-200 mb-6">Trusted by these leading companies</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {customers.map((name) => (
                <div key={name} className="h-8 px-4 rounded-md bg-white/10 backdrop-blur-sm flex items-center">
                  <span className="text-sm font-semibold text-white/70">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Imagine what you could do if you had an expert chatbot answering questions 24/7
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
              <h3 className="text-lg font-bold text-red-800 mb-4">Before</h3>
              <p className="text-red-700 font-medium mb-4">{beforeAfter.before.title}</p>
              <ul className="space-y-3">
                {beforeAfter.before.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-red-700">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-200 text-red-600 text-xs font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-green-100 bg-green-50/50 p-8">
              <h3 className="text-lg font-bold text-green-800 mb-4">After</h3>
              <p className="text-green-700 font-medium mb-4">{beforeAfter.after.title}</p>
              <ul className="space-y-3">
                {beforeAfter.after.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl bg-gray-200 shadow-lg shadow-gray-900/5">
            {stats.map((stat, i) => {
              const Icon = statIcons[i] || Percent
              return (
                <div key={i} className="flex flex-col items-center justify-center bg-white px-4 py-8 text-center">
                  <Icon className="mb-2 h-6 w-6 text-brand-500" />
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  <span className="mt-1 text-sm text-gray-500">{stat.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              You're three easy steps away from your own personalized AI support chatbot
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {howItWorks.map((step, i) => {
              const Icon = stepIcons[i] || BookOpen
              return (
                <div key={i} className="relative">
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-600">
                        {step.step}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-3 text-gray-600">{step.description}</p>
                    <ul className="mt-5 space-y-2">
                      {step.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="absolute -right-4 top-1/3 hidden text-gray-300 md:block">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURE CARDS ===== */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Everything you need to automate support
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Powerful features to help you provide instant, accurate customer support at scale.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, i) => {
              const Icon = cardIcons[i] || Bot
              return (
                <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition-all">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATIONS ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Direct integrations with your favorite tools
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              With native integrations into platforms like Crisp, Intercom, and Zendesk, our chatbot becomes an extended arm of your existing toolkit.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {integrations.map((name) => (
              <div key={name} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600 text-xs font-bold">
                  {name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Don't just take our word for it
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm hover:bg-white/15 transition-all">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="leading-relaxed text-white/90">&ldquo;{t.content}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-violet-200">
                      {t.role && `${t.role} at `}{t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECURITY BADGES ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Enterprise-grade security
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            SOC 2 Type II examined, GDPR certified, and HIPAA assessed. Your data is encrypted, access-controlled, and never used to train AI models.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {securityBadges.map((badge) => (
              <div key={badge.name} className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-8 py-6 shadow-sm min-w-[160px]">
                <Shield className="h-8 w-8 text-brand-500 mb-2" />
                <span className="text-sm font-bold text-gray-900">{badge.name}</span>
                <span className="text-xs text-gray-500">{badge.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all">
                <button
                  onClick={() => toggleFaq(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base font-semibold text-gray-900">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-brand-500 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-100 px-6 py-4">
                    <p className="leading-relaxed text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ready to take Bolnee for a spin?
          </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-violet-100">
            Find out if a personalized AI support chatbot is a good fit for you in just a few hours.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-700 shadow-lg shadow-brand-900/20 hover:bg-violet-50 transition-all"
              >
                <Bot className="h-5 w-5" />
                Start a free trial
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-all"
              >
                Book a demo
                <ArrowRight className="h-5 w-5" />
              </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-violet-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-300" />
              Personalized onboarding help
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-300" />
              95+ languages supported
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-300" />
              7-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-300" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* ===== CHAT WIDGET ===== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {chatOpen && (
          <div className="w-80 animate-fadeIn rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/10">
            <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-4 py-3 text-white">
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
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-700">
                  Hello! I'm your virtual assistant. How can I help you today?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-brand-600 px-4 py-2.5 text-sm text-white">
                  I'd like to know more about your pricing
                </div>
              </div>
              <div className="flex">
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-700">
                  Great question! We offer plans starting from Free up to Enterprise. Which plan are you interested in?
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-gray-100 p-3">
              <input
                type="text"
                value={chatMsg}
                onChange={(e) => setChatMsg(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm outline-none ring-1 ring-gray-200 transition-all focus:ring-brand-300"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setChatMsg('')
                  }
                }}
              />
              <button
                onClick={() => setChatMsg('')}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white transition-colors hover:bg-brand-700"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-xl shadow-brand-900/30 transition-all hover:scale-105 hover:shadow-brand-900/40 active:scale-95"
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function Globe({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function BarChart({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}