import { Link } from 'react-router-dom';
import { Headphones, Ticket, MessageCircle, ArrowUp, ArrowRight, Check, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    desc: 'Provide round-the-clock assistance without human fatigue. Handle inquiries at any hour with consistent, friendly responses.',
  },
  {
    icon: Ticket,
    title: 'Ticket Reduction',
    desc: 'Resolve up to 70% of incoming tickets instantly with AI, freeing your human agents for complex, high-value issues.',
  },
  {
    icon: MessageCircle,
    title: 'Instant Answers',
    desc: 'Respond to common questions in under 2 seconds. Cut average first-response time from hours to milliseconds.',
  },
  {
    icon: ArrowUp,
    title: 'Smart Escalation',
    desc: 'Seamlessly hand off complex issues to live agents with full conversation context — no repeats, no frustration.',
  },
];

const stats = [
  { label: 'Faster Resolutions', value: '10x', sub: 'vs traditional support' },
  { label: 'Cost Saved', value: '60%', sub: 'on support ops' },
  { label: 'Customer Rating', value: '4.8/5', sub: 'average CSAT' },
  { label: 'Tickets Deflected', value: '70%', sub: 'handled by AI' },
];

export default function ServiceClient() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Customer Service Automation</h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8">
              Transform your support desk with an AI that never sleeps. Slash response times, reduce ticket volume, and
              keep every customer smiling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-14">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-blue-600" />
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-14">Impact at a Glance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{s.value}</div>
                <div className="text-sm font-medium text-gray-900">{s.label}</div>
                <div className="text-sm text-gray-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Automate Your Support Today</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Deploy in minutes and start seeing measurable improvements in your support metrics.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              <Check className="w-5 h-5" /> Start Free
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