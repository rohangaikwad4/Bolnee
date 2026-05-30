import { Link } from 'react-router-dom';
import { Bot, FileText, Globe, Puzzle, ArrowRight, Check } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'RAG-Powered Answers',
    desc: 'Retrieval-Augmented Generation ensures accurate, context-aware responses from your business data in real time.',
  },
  {
    icon: FileText,
    title: 'Smart Document Import',
    desc: 'Upload PDFs, Word docs, CSVs, or web pages. Our AI instantly ingests and indexes them for intelligent querying.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    desc: 'Speak to customers in 50+ languages with native-level fluency. Auto-detect and respond in the user\'s preferred language.',
  },
  {
    icon: Puzzle,
    title: 'Easy Integration',
    desc: 'Plug into your website, CRM, Slack, or WhatsApp in minutes with ready-made connectors and a simple API.',
  },
];

const steps = [
  { step: '1', title: 'Import Your Data', desc: 'Upload documents or connect your knowledge base sources.' },
  { step: '2', title: 'Configure the Bot', desc: 'Customize tone, behavior, and which sources to use.' },
  { step: '3', title: 'Deploy & Monitor', desc: 'Publish to your site and track performance in the dashboard.' },
];

export default function Chatbot() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">AI Chatbot Solution</h1>
            <p className="text-lg lg:text-xl text-violet-100 mb-8">
              Build intelligent conversational agents that understand your business, answer with precision, and
              scale across every channel — all without a single line of code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors">
                Start Free <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://cal.eu/anas-rabhi/30min" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-14">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-14">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-brand-600">{s.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Build Your AI Chatbot?</h2>
          <p className="text-lg text-violet-100 mb-8 max-w-2xl mx-auto">Get your first agent up and running in under 10 minutes — no coding required.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors">
              <Check className="w-5 h-5" /> Get Started Free
            </Link>
            <a href="https://cal.eu/anas-rabhi/30min" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}