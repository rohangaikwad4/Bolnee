import { Link } from 'react-router-dom';
import { Calendar, Clock, Bell, Repeat, ArrowRight, Check } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'AI that finds the perfect time slot across your team\'s calendars. Eliminate back-and-forth emails.',
  },
  {
    icon: Clock,
    title: 'Real-Time Availability',
    desc: 'Syncs directly with your calendar to show only truly available slots. No double-bookings, no conflicts.',
  },
  {
    icon: Bell,
    title: 'Automated Reminders',
    desc: 'Send SMS, email, or push reminders before appointments. Cut no-show rates by up to 80%.',
  },
  {
    icon: Repeat,
    title: 'Rescheduling & Cancellations',
    desc: 'Let customers reschedule or cancel on their own. The assistant handles updates instantly and seamlessly.',
  },
];

const steps = [
  { step: '1', title: 'Connect Calendar', desc: 'Link your Google, Outlook, or other calendar in one click.' },
  { step: '2', title: 'Customize Flow', desc: 'Set buffer times, meeting types, and booking rules.' },
  { step: '3', title: 'Publish & Book', desc: 'Embed the booking widget on your site or share a direct link.' },
];

export default function AppointmentBooking() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">AI Appointment Booking</h1>
            <p className="text-lg lg:text-xl text-violet-100 mb-8">
              Let your AI handle the entire scheduling process — from finding available slots to sending reminders.
              Never miss a booking again.
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Automate Your Booking Flow</h2>
          <p className="text-lg text-violet-100 mb-8 max-w-2xl mx-auto">Save hours every week on scheduling. Your AI assistant does it all.</p>
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