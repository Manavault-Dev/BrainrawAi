export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <p className="text-gray-400">
            <strong>Effective Date:</strong> November 10, 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Brainraw ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Name and Email:</strong> When you join our waitlist</li>
              <li><strong>Usage Data:</strong> Information about how you use our website</li>
              <li><strong>Device Information:</strong> Browser type, IP address, and device identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Notify you about product updates and launch</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve and optimize our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage and Security</h2>
            <p className="text-gray-300 leading-relaxed">
              Your data is stored securely using Supabase (PostgreSQL database) with industry-standard encryption. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party service providers (e.g., Supabase, Vercel)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, contact us at: <a href="mailto:tilek.dzenisev@gmail.com" className="text-[#6EE7B7] hover:underline">tilek.dzenisev@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar tracking technologies to analyze website traffic and improve user experience. We use Vercel Analytics for anonymous usage statistics. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Effective Date."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-gray-300 space-y-2 mt-4">
              <li><strong>Email:</strong> <a href="mailto:tilek.dzenisev@gmail.com" className="text-[#6EE7B7] hover:underline">tilek.dzenisev@gmail.com</a></li>
              <li><strong>Company:</strong> Manavault</li>
              <li><strong>Website:</strong> <a href="/" className="text-[#6EE7B7] hover:underline">brainraw.com</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <a href="/" className="text-[#6EE7B7] hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

