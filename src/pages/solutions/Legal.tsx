import { Link } from 'react-router-dom';
import { FileText, Calendar, HelpCircle, ArrowRight, Check, Users } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Client Intake',
    desc: 'Collect case details, contact info, and legal history through a structured conversation. Pre-qualify leads before they reach a paralegal.',
  },
  {
    icon: FileText,
    title: 'Document Analysis',
    desc: 'Review contracts, briefs, and filings. Extract key clauses, dates, and obligations — reducing review time by 80%.',
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    desc: 'Book consultations, court prep meetings, and client calls. Syncs with your firm\'s calendar and sends confirmations automatically.',
  },
  {
    icon: HelpCircle,
    title: 'FAQ Automation',
    desc: 'Answer common questions about practice areas, fees, retainer agreements, and case timelines — 24/7 without billing a minute.',
  },
];

export default function Legal() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Legal AI Assistant</h1>
            <p className="text-lg lg:text-xl text-violet-100 mb-8">
              Give every client a 24/7 legal concierge. Streamline intake, analyze documents, and
              free your team to focus on billable work.
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-14">Key Features</h2>
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

      <section className="py-16 lg:py-24 bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Modernize Your Practice</h2>
          <p className="text-lg text-violet-100 mb-8 max-w-2xl mx-auto">Let AI handle the paperwork so your attorneys can practice law.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors">
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