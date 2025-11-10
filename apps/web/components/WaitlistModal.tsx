"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openWaitlist" as any, handleOpen);
    return () => window.removeEventListener("openWaitlist" as any, handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error joining waitlist:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }

    // Reset after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setEmail("");
      setName("");
    }, 3000);
  };

  const handleClose = () => {
    if (!isLoading) {
      setIsOpen(false);
      setIsSubmitted(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            {/* Close Button */}
            {!isLoading && (
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2 bg-linear-to-r from-[#8B5CF6] to-[#6A28D7] bg-clip-text text-transparent">
                    Join the Waitlist
                  </h2>
                  <p className="text-gray-400">
                    Be the first to experience Brainraw when we launch.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6A28D7] focus:border-transparent transition-all"
                      placeholder="Your name"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6A28D7] focus:border-transparent transition-all"
                      placeholder="you@example.com"
                      disabled={isLoading}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-linear-to-r from-[#6A28D7] to-[#8B5CF6] text-white rounded-xl font-semibold hover:from-[#8B5CF6] hover:to-[#A78BFA] transition-all duration-300 shadow-lg shadow-[#6A28D7]/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Joining...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  We'll never share your information.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 mx-auto text-[#6EE7B7]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  You're on the list! 🎉
                </h3>
                <p className="text-gray-400">
                  We'll notify you when Brainraw launches.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


