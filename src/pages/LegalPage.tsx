import { useState } from 'react'
import { Shield, FileText, Scale } from 'lucide-react'

const sections = ['Privacy Policy', 'Terms of Service', 'GDPR Compliance'] as const
type Section = (typeof sections)[number]

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState<Section>('Privacy Policy')

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-brand-600 to-violet-800 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Legal Information
          </h1>
          <p className="text-xl text-violet-100 max-w-2xl mx-auto">
            Transparency and compliance are at the heart of everything we do.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === section
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-200 hover:text-brand-600'
                }`}
              >
                {section === 'Privacy Policy' && <Shield className="w-4 h-4" />}
                {section === 'Terms of Service' && <FileText className="w-4 h-4" />}
                {section === 'GDPR Compliance' && <Scale className="w-4 h-4" />}
                {section}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100">
            {activeSection === 'Privacy Policy' && (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Last updated:</strong> May 2026
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Bolnee, we take your privacy seriously. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our service.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Information We Collect</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information you provide directly to us, including your name, email address,
                  and company information when you create an account. We also automatically collect certain
                  technical information about your use of our platform.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">How We Use Your Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to provide, maintain, and improve our services, to
                  process transactions, to communicate with you, and to comply with legal obligations.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Data Security</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your
                  personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Contact</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at privacy@bolnee.com.
                </p>
              </div>
            )}

            {activeSection === 'Terms of Service' && (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Last updated:</strong> May 2026
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By using Bolnee, you agree to these terms. Please read them carefully.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Acceptance of Terms</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By accessing or using the Bolnee platform, you agree to be bound by these Terms of Service
                  and all applicable laws and regulations.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Account Responsibilities</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials and
                  for all activities that occur under your account. You agree to notify us immediately of
                  any unauthorized use.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Service Usage</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree to use Bolnee only for lawful purposes and in accordance with these terms. You
                  may not use the service to infringe upon the rights of others or to distribute harmful
                  or illegal content.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bolnee shall not be liable for any indirect, incidental, special, consequential, or
                  punitive damages arising out of or related to your use of the service.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Changes to Terms</h3>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of material
                  changes via email or through the platform.
                </p>
              </div>
            )}

            {activeSection === 'GDPR Compliance' && (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">GDPR Compliance</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bolnee is fully committed to compliance with the General Data Protection Regulation (GDPR).
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Data Processing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We act as a data processor for the conversational data you process through our platform,
                  and as a data controller for the account information you provide to us.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Data Hosting</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All data is hosted on secure servers located within the European Union. We use industry-standard
                  encryption for data at rest and in transit.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Your Rights</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Under GDPR, you have the right to access, rectify, erase, and port your data. You also have
                  the right to restrict or object to processing. To exercise these rights, contact us at
                  gdpr@bolnee.com.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Data Protection Officer</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We have appointed a Data Protection Officer (DPO) who oversees our compliance with data
                  protection laws. You can reach our DPO at dpo@bolnee.com.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Sub-processors</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use carefully selected sub-processors who are also GDPR compliant. A full list of our
                  sub-processors is available upon request.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
