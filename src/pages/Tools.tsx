import { Link } from 'react-router-dom'
import { Scale, BookOpen, Wrench, Search, BarChart3, MessageSquare, FileText, Globe } from 'lucide-react'

const tools = [
  {
    icon: Scale,
    title: 'Chatbot vs Live Chat',
    description: 'Compare the costs and benefits of AI chatbots vs traditional live chat solutions.',
    link: '#',
  },
  {
    icon: BarChart3,
    title: 'ROI Calculator',
    description: 'Calculate how much you can save by automating your customer support with AI.',
    link: '#',
  },
  {
    icon: BookOpen,
    title: 'Implementation Guide',
    description: 'Step-by-step guide to deploying an AI chatbot in your business.',
    link: '#',
  },
  {
    icon: Search,
    title: 'Feature Comparison',
    description: 'Compare Bolnee against other AI chatbot platforms feature by feature.',
    link: '#',
  },
  {
    icon: Wrench,
    title: 'Integration Checklist',
    description: 'Everything you need to integrate an AI chatbot with your existing tools.',
    link: '#',
  },
  {
    icon: MessageSquare,
    title: 'Response Template Library',
    description: 'Pre-built chatbot response templates for common business scenarios.',
    link: '#',
  },
  {
    icon: FileText,
    title: 'GDPR Compliance Guide',
    description: 'Ensure your AI chatbot is compliant with data protection regulations.',
    link: '#',
  },
  {
    icon: Globe,
    title: 'Multi-language Setup',
    description: 'Guide to configuring your chatbot for multiple languages and locales.',
    link: '#',
  },
]

export default function Tools() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Free Tools & Comparisons
          </h1>
          <p className="text-xl text-violet-100 max-w-2xl mx-auto">
            Resources, guides, and tools to help you make informed decisions about AI for your business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                to={tool.link}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors">
                  <tool.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
