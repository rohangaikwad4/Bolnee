import { Link } from 'react-router-dom'
import { Bot } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Bolnee</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              AI chatbot solution for businesses. Automate your customer service 24/7 with our intelligent assistant.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/solutions/chatbot" className="text-sm hover:text-blue-400 transition-colors">AI Chatbot</Link></li>
              <li><Link to="/solutions/service-client" className="text-sm hover:text-blue-400 transition-colors">Customer Service</Link></li>
              <li><Link to="/solutions/ecommerce" className="text-sm hover:text-blue-400 transition-colors">E-commerce</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-blue-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Use Cases</h4>
            <ul className="space-y-3">
              <li><Link to="/solutions/appointment-booking" className="text-sm hover:text-blue-400 transition-colors">Appointment Booking</Link></li>
              <li><Link to="/solutions/real-estate" className="text-sm hover:text-blue-400 transition-colors">Real Estate</Link></li>
              <li><Link to="/solutions/hr" className="text-sm hover:text-blue-400 transition-colors">Human Resources</Link></li>
              <li><Link to="/solutions/restaurant" className="text-sm hover:text-blue-400 transition-colors">Restaurant</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/tools" className="text-sm hover:text-blue-400 transition-colors">Tools</Link></li>
              <li><Link to="/legal" className="text-sm hover:text-blue-400 transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Bolnee. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/legal" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
