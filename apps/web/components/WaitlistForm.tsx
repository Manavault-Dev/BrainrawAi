"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your actual waitlist API endpoint
    // For now, we'll simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
    setEmail("");
    setName("");

    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="waitlist"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-black to-[#0B0B0B]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Be among the first to experience Brainraw. Sign up now and get
            early access when we launch.
          </p>

          {/* Waitlist Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-[#6EE7B7] mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-gray-400">
                  We&apos;ll notify you when Brainraw launches.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6A28D7] focus:border-transparent transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6A28D7] focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-linear-to-r from-[#6EE7B7] to-[#6EE7B7]/80 text-black rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-[#6EE7B7]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-sm text-gray-500 mt-4">
                  We respect your privacy. No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>Launching Q4 2025</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <span>Early access perks</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <span>Free for early adopters</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

