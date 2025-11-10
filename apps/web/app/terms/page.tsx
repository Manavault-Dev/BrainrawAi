export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <p className="text-gray-400">
            <strong>Effective Date:</strong> November 10, 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using Brainraw ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed">
              Brainraw is an AI-powered whiteboard tool that transforms text prompts into animated storyboards with synchronized voice narration. The Service is currently in development and available as a waitlist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Waitlist</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By joining our waitlist, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your information</li>
              <li>Receive updates and notifications about our launch</li>
              <li>Accept that waitlist position does not guarantee access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              The Service and its original content, features, and functionality are owned by Manavault and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Use the Service for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Interfere with or disrupt the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Your use of the Service is also governed by our Privacy Policy. Please review our <a href="/privacy" className="text-[#6EE7B7] hover:underline">Privacy Policy</a> to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MANAVAULT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Service</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Manavault operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Effective Date."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about these Terms, please contact us:
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

