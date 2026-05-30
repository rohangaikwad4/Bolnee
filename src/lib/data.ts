import type { NavLink, PriceTier, Testimonial, BlogPost, FaqItem } from '../types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions',
    href: '#',
    children: [
      { label: 'AI Chatbot', href: '/solutions/chatbot', description: 'Intelligent chatbot for your business' },
      { label: 'Customer Service', href: '/solutions/service-client', description: 'Automate your support 24/7' },
      { label: 'E-commerce', href: '/solutions/ecommerce', description: 'Boost sales with AI assistance' },
    ],
  },
  {
    label: 'Use Cases',
    href: '#',
    children: [
      { label: 'Appointment Booking', href: '/solutions/appointment-booking' },
      { label: 'Real Estate', href: '/solutions/real-estate' },
      { label: 'Human Resources', href: '/solutions/hr' },
      { label: 'Training', href: '/solutions/training' },
      { label: 'Restaurant', href: '/solutions/restaurant' },
      { label: 'Automotive', href: '/solutions/automotive' },
      { label: 'Legal', href: '/solutions/legal' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tools', href: '/tools' },
]

export const customers = [
  'GrowthX', 'Scope', 'Valant', 'Savory Institute', 'Sagacity',
]

export const stats = [
  { value: '80%', label: 'of tickets resolved automatically' },
  { value: '24/7', label: 'permanent availability' },
  { value: '-70%', label: 'response time reduction' },
  { value: '5 min', label: 'to configure your agent' },
]

export const beforeAfter = {
  before: {
    title: 'Fickle, one-size-fits-all chatbots that do more harm than good',
    items: [
      'Generic AI tools don\'t answer based on your training data',
      'Custom-built bots are finicky and difficult to maintain',
      'Customer service staff takes 3+ months to train',
      'Bogged down with support tickets',
    ],
  },
  after: {
    title: 'An automated resource that super charges your support team',
    items: [
      'Provide 24/7/365 quality customer support with instant responses',
      'Automate answering the vast majority of support tickets',
      'Make your current support team twice as productive',
      'Free up time to work on higher-level tasks',
    ],
  },
}

export const features = [
  {
    title: 'Ticket Reduction',
    description: 'AI automatically resolves up to 80% of recurring requests. Your human agents focus on complex cases.',
    icon: 'Ticket',
  },
  {
    title: 'Instant Responses 24/7',
    description: 'No more waiting. Your customers get immediate answers, even at 3 AM, in any time zone.',
    icon: 'Clock',
  },
  {
    title: 'Expert in Your Documentation',
    description: 'The agent masters your entire knowledge base. Precise, sourced answers based on your real internal documents.',
    icon: 'FileText',
  },
]

export const howItWorks = [
  {
    step: '01',
    title: 'Sync training data',
    description: 'Enter your URL for Bolnee to scan, or upload files, or drop in raw text content.',
    features: ['Simple import: drag-and-drop your files', 'Precise settings: define tone, style, and response rules'],
  },
  {
    step: '02',
    title: 'Install on your site',
    description: 'Embed a chatbot on as many sites as you want — your marketing site, in-app, help center… wherever.',
    features: ['Universal widget: compatible with all platforms', 'Omnichannel: WhatsApp, Slack, Messenger, API'],
  },
  {
    step: '03',
    title: 'Learn and refine',
    description: 'Use real chat history to improve your chatbot by providing feedback that allows it to improve with every interaction.',
    features: ['Clear dashboard: volume, resolution rate, user sentiment', 'Continuous improvement: identify new questions'],
  },
]

export const featureCards = [
  {
    title: 'Personalized Chatbot',
    description: 'Build a custom chatbot trained on your own content. Train your chatbot with your content and let it echo your brand\'s voice.',
    icon: 'MessageCircle',
  },
  {
    title: 'Quick Prompts',
    description: 'Give users a digital icebreaker to kick things off. Include frequently asked questions to get value out of your product.',
    icon: 'Zap',
  },
  {
    title: 'Email Summaries',
    description: 'Keep a pulse on chatbot interactions with daily summaries delivered to your inbox. Track performance and gain insights.',
    icon: 'FileText',
  },
  {
    title: 'Escalate to Human',
    description: 'Users can seamlessly transition the conversation to a live agent at the push of a button. Hybrid approach for best assistance.',
    icon: 'MessageSquare',
  },
  {
    title: 'Collect Leads',
    description: 'Don\'t just answer questions, seize opportunities. Capture interested visitors\' details to build a list of potential leads.',
    icon: 'Users',
  },
  {
    title: 'Functions',
    description: 'Turn natural language commands into in-app actions. Your chatbot can listen, understand, and interact with other systems.',
    icon: 'Bot',
  },
]

export const benefits = [
  {
    title: 'Reduced Response Time',
    description: 'Instant answers 24/7, no wait time for your users',
    metric: '-70%',
  },
  {
    title: 'Request Volume',
    description: 'Capacity to handle thousands of concurrent conversations',
    metric: '∞',
  },
  {
    title: 'Cost Reduction',
    description: 'Save up to 60% on your communication costs',
    metric: '-60%',
  },
  {
    title: 'Conversion Rate',
    description: 'Increase conversions with instant, accurate responses',
    metric: '+40%',
  },
]

export const integrations = [
  'Crisp', 'Intercom', 'Zendesk', 'Slack', 'WhatsApp', 'Messenger',
]

export const testimonials: Testimonial[] = [
  {
    name: 'Brent Burrows II',
    company: 'CBS Bahamas',
    role: 'Vice President – Retail & Sales',
    content: 'We\'ve got the bot dialled in — we\'re using GPT-4, have an avenue for escalations to Zendesk, and so far I have no complaints.',
  },
  {
    name: 'Alexandre Dubois',
    company: 'TechCorp',
    role: 'CTO',
    content: 'Integrating Bolnee was incredibly simple. Our customers get instant answers about our products, which has noticeably improved their experience.',
  },
  {
    name: 'Sarah Martin',
    company: 'DigitalFlow',
    role: 'Marketing Director',
    content: 'A powerful tool for qualifying our leads. The chatbot handles basic questions and lets us focus on high-value requests.',
  },
]

export const securityBadges = [
  { name: 'SOC 2 Type II', description: 'Examined' },
  { name: 'GDPR', description: 'Compliant' },
  { name: 'HIPAA', description: 'Assessed' },
]

export const pricingTiers: PriceTier[] = [
  {
    name: 'Free',
    price: '€0',
    description: 'To discover and test.',
    features: ['1 AI agent', '30 messages/month', '20,000 characters of AI', 'Web integration'],
    cta: 'Start Free',
  },
  {
    name: 'Standard',
    price: '€19',
    description: 'For small businesses.',
    features: ['1 AI agent', '1,000 messages/month', '300,000 characters of AI', '1 AI tool included', 'Admin interface'],
    cta: 'Choose Standard',
    popular: true,
  },
  {
    name: 'Premium',
    price: '€99',
    description: 'To go further.',
    features: ['3 AI agents', '5,000 messages/month', '1M characters of AI', '5 AI tools included', 'Slack, WhatsApp, etc.'],
    cta: 'Choose Premium',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large accounts & custom needs.',
    features: ['Unlimited volume', 'Custom development', 'SLA guaranteed', 'Dedicated priority support'],
    cta: 'Contact Us',
  },
]

export const faq: FaqItem[] = [
  {
    question: 'What is an AI chatbot and how does Bolnee work?',
    answer: 'An AI chatbot is a virtual assistant that uses artificial intelligence to converse with your visitors. Bolnee uses RAG (Retrieval-Augmented Generation) technology: you import your documents (PDF, web pages, FAQ) and the AI answers questions based solely on your data, drastically reducing the risk of hallucination.',
  },
  {
    question: 'How long does it take to create a chatbot with Bolnee?',
    answer: 'Creating a chatbot with Bolnee takes less than 10 minutes. You create your agent, import your documents or URLs, customize the tone and instructions, then integrate a simple code snippet on your site. No technical skills required.',
  },
  {
    question: 'Is Bolnee GDPR compliant?',
    answer: 'Yes, Bolnee is GDPR compliant. Data is hosted in Europe, confidentiality is ensured with strict compliance, and no personal data is used to train third-party models.',
  },
  {
    question: 'What types of documents can I import into Bolnee?',
    answer: 'Bolnee accepts PDF, DOCX, PPTX, and TXT files. You can also import web page content via URL. The AI automatically analyzes and indexes your documents to build your agent\'s knowledge base.',
  },
  {
    question: 'How much does Bolnee cost?',
    answer: 'Bolnee offers a free plan to get started, then paid plans starting at €19/month. Each plan includes a number of agents, messages, and documents suited to your business size.',
  },
  {
    question: 'Can the chatbot make up false answers?',
    answer: 'The risk of invention is very low thanks to RAG technology: the Bolnee chatbot relies exclusively on the documents you provide. If the information is not found in your knowledge base, the agent honestly indicates this and can offer a connection with a human.',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Custom AI Chatbot: Complete Guide',
    excerpt: 'Learn how to create a custom AI chatbot for your business in 10 minutes.',
    category: 'Guide',
    date: '2026-05-15',
    slug: 'custom-ai-chatbot-guide',
    author: 'Bolnee Team',
  },
  {
    id: '2',
    title: '7 Concrete Use Cases for an AI Chatbot',
    excerpt: 'From customer service to training, discover the concrete applications of conversational AI.',
    category: 'Use Cases',
    date: '2026-05-10',
    slug: '7-use-cases-ai-chatbot',
    author: 'Bolnee Team',
  },
  {
    id: '3',
    title: 'RAG: The Technology Behind Reliable AI Customer Service',
    excerpt: 'Understand how RAG enables AI to respond while minimizing hallucinations from your documents.',
    category: 'Technology',
    date: '2026-05-05',
    slug: 'rag-technology-ai-customer-service',
    author: 'Bolnee Team',
  },
  {
    id: '4',
    title: 'AI Chatbot for Customer Service: Complete Setup Guide',
    excerpt: 'Step-by-step guide to automate your customer support with an AI chatbot.',
    category: 'Service',
    date: '2026-04-28',
    slug: 'ai-chatbot-customer-service-guide',
    author: 'Bolnee Team',
  },
  {
    id: '5',
    title: 'AI Chatbot and Lead Generation',
    excerpt: 'How an AI chatbot automatically qualifies and collects prospects on your site.',
    category: 'Leads',
    date: '2026-04-20',
    slug: 'ai-chatbot-lead-generation',
    author: 'Bolnee Team',
  },
  {
    id: '6',
    title: 'Transforming SME Customer Support with AI',
    excerpt: 'Accessible AI solutions for small and medium businesses.',
    category: 'SME',
    date: '2026-04-15',
    slug: 'transforming-sme-customer-support-ai',
    author: 'Bolnee Team',
  },
]