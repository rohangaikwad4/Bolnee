import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Shield, Zap, Users } from 'lucide-react'

const team = [
  { name: 'Marie Laurent', role: 'CEO & Co-Founder', initials: 'ML' },
  { name: 'Antoine Petit', role: 'CTO & Co-Founder', initials: 'AP' },
  { name: 'Camille Dubois', role: 'Head of Product', initials: 'CD' },
  { name: 'Lucas Moreau', role: 'Head of Engineering', initials: 'LM' },
]

const values = [
  { icon: Heart, title: 'Customer First', description: 'Every decision starts with our customers. Their success is our success.' },
  { icon: Zap, title: 'Innovation', description: 'We push the boundaries of what AI can do for businesses every day.' },
  { icon: Shield, title: 'Trust & Security', description: 'Data privacy and security are at the core of everything we build.' },
  { icon: Users, title: 'Teamwork', description: 'Great things happen when talented people work together toward a common goal.' },
]

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            About Bolnee
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're on a mission to make AI-powered customer service accessible to every business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bolnee was founded in 2026 by a team of AI researchers and customer experience experts who
                  believed that intelligent customer service shouldn't be reserved for large enterprises with
                  massive budgets.
                </p>
                <p>
                  We saw that small and medium businesses were being left behind. They wanted to provide
                  fast, 24/7 customer support but didn't have the resources to build and maintain complex
                  AI systems. So we built Bolnee to change that.
                </p>
                <p>
                  Today, Bolnee powers customer conversations for hundreds of businesses across Europe,
                  helping them resolve tickets faster, qualify more leads, and deliver exceptional
                  experiences around the clock.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">80%</div>
                <div className="text-sm text-gray-600">Tickets resolved automatically</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Permanent availability</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Businesses served</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">10 min</div>
                <div className="text-sm text-gray-600">Setup time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize AI-powered customer service by providing every business — regardless of size —
                with an intelligent, easy-to-use, and affordable chatbot solution that delights customers
                and drives growth.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every customer interaction is instant, personalized, and effortlessly handled —
                where AI empowers human teams to focus on what matters most: building meaningful
                relationships with their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Passionate people building the future of customer conversations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-600 group-hover:to-indigo-700 transition-colors">
                  <span className="text-2xl font-bold text-blue-600 group-hover:text-white transition-colors">{member.initials}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join hundreds of businesses already using Bolnee. Start free, no credit card required.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}
