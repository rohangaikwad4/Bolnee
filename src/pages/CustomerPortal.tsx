import { useState } from 'react'
import { Calendar, Package, Ticket, Mail, Send, CheckCircle, Clock } from 'lucide-react'

type Tab = 'bookings' | 'orders' | 'tickets' | 'email'

export default function CustomerPortal() {
  const [activeTab, setActiveTab] = useState<Tab>('bookings')
  const [bookingSent, setBookingSent] = useState(false)
  const [ticketSent, setTicketSent] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [orderResult, setOrderResult] = useState<string | null>(null)

  const tabs: { key: Tab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { key: 'bookings', label: 'Book Appointment', icon: Calendar },
    { key: 'orders', label: 'Track Order', icon: Package },
    { key: 'tickets', label: 'Support Ticket', icon: Ticket },
    { key: 'email', label: 'Contact Us', icon: Mail },
  ]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Customer Portal</h1>
          <p className="text-xl text-violet-100 max-w-2xl mx-auto">
            Book appointments, track orders, get support — all in one place.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => { setActiveTab(key); setOrderResult(null); setBookingSent(false); setTicketSent(false); setEmailSent(false) }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === key
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-200 hover:text-brand-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
            {activeTab === 'bookings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Book an Appointment</h2>
                <p className="text-gray-600 mb-8">Schedule a call or meeting with our team.</p>
                {bookingSent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Booking Request Sent!</h3>
                    <p className="text-gray-600 mt-1">We'll confirm your appointment within 24 hours.</p>
                  </div>
                ) : (
                  <form className="space-y-5 max-w-lg" onSubmit={(e) => { e.preventDefault(); setBookingSent(true) }}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                        <input type="text" required placeholder="John Doe" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                        <input type="email" required placeholder="john@company.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Service</label>
                      <select required className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all">
                        <option value="">Select a service</option>
                        <option>AI Chatbot Demo</option>
                        <option>Consultation</option>
                        <option>Onboarding Support</option>
                        <option>Technical Support</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date</label>
                      <input type="date" required className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Notes</label>
                      <textarea rows={3} placeholder="Any specific topics you'd like to discuss..." className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-sm">
                      <Calendar className="w-4 h-4" />
                      Request Booking
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Track Your Order</h2>
                <p className="text-gray-600 mb-8">Enter your order ID to check the status.</p>
                <div className="max-w-lg">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      placeholder="e.g. ORD-2026-001"
                      className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all"
                    />
                    <button
                      onClick={() => setOrderResult(orderId.trim() ? `Order ${orderId} is currently being processed. Estimated delivery: 3-5 business days.` : 'Please enter an order ID.')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-sm"
                    >
                      <Package className="w-4 h-4" />
                      Track
                    </button>
                  </div>
                  {orderResult && (
                    <div className="mt-6 flex items-start gap-3 p-4 bg-brand-50 rounded-xl border border-brand-100">
                      <Clock className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-gray-700">{orderResult}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'tickets' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit a Support Ticket</h2>
                <p className="text-gray-600 mb-8">Having an issue? Let us know and we'll get back to you.</p>
                {ticketSent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Ticket Submitted!</h3>
                    <p className="text-gray-600 mt-1">We'll respond within 24 hours. Your ticket ID: <span className="font-mono font-medium text-brand-600">TKT-{Date.now().toString(36).toUpperCase()}</span></p>
                  </div>
                ) : (
                  <form className="space-y-5 max-w-lg" onSubmit={(e) => { e.preventDefault(); setTicketSent(true) }}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                      <input type="text" required placeholder="Brief description of your issue" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                        <input type="email" required placeholder="you@company.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Priority</label>
                        <select required className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all">
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          <option>Urgent</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                      <textarea rows={5} required placeholder="Describe your issue in detail..." className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-sm">
                      <Ticket className="w-4 h-4" />
                      Submit Ticket
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeTab === 'email' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
                <p className="text-gray-600 mb-8">Send us a message directly and we'll get back to you within 24 hours.</p>
                {emailSent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Message Sent!</h3>
                    <p className="text-gray-600 mt-1">We've received your message and will respond shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-5 max-w-lg" onSubmit={(e) => { e.preventDefault(); setEmailSent(true) }}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                        <input type="text" required placeholder="Your name" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                        <input type="email" required placeholder="you@company.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                      <input type="text" required placeholder="How can we help?" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                      <textarea rows={5} required placeholder="Tell us more about your inquiry..." className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all" />
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-sm">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}