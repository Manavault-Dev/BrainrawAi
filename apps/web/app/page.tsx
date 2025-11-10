"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Volume2, 
  Zap, 
  Edit3, 
  Bot, 
  Mic, 
  Rocket, 
  GraduationCap, 
  Briefcase, 
  Video, 
  Code, 
  TrendingUp, 
  Activity,
  MessageCircle 
} from "lucide-react";
import Header from "@/components/Header";
import WaitlistModal from "@/components/WaitlistModal";

export default function LandingPage() {
  return (
    <>
      <Header />
      <WaitlistModal />
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Use Cases Section */}
        <UseCasesSection />

        {/* About Section */}
        <AboutSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

// Hero Section Component
function HeroSection() {
  const openWaitlist = () => {
    const event = new CustomEvent("openWaitlist");
    window.dispatchEvent(event);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] pt-28 sm:pt-32">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6A28D7]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Launching Soon Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6EE7B7]/10 border border-[#6EE7B7]/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6EE7B7]"></span>
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#6EE7B7]">
                Launching Soon
              </span>
            </div>
          </motion.div>

          {/* Logo/Title */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-linear-to-r from-[#8B5CF6] via-[#6A28D7] to-[#A78BFA] bg-clip-text text-transparent">
              Brainraw
          </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Think it.{" "}
            <span className="text-[#6EE7B7]">See it.</span> Understand it.
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Brainrow turns any idea into an animated{" "}
            <span className="text-[#6EE7B7]">voice & drawing</span> explanation
            powered by AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={openWaitlist}
              className="px-8 py-4 bg-linear-to-r from-[#6A28D7] to-[#8B5CF6] text-white rounded-full font-semibold text-lg hover:from-[#8B5CF6] hover:to-[#A78BFA] transition-all duration-300 shadow-lg shadow-[#6A28D7]/50 hover:shadow-[#6A28D7]/70 hover:scale-105"
            >
              Join Waitlist
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Features Section Component
function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "AI Whiteboard Engine",
      description:
        "Converts any prompt into animated, step-by-step visual storyboards with intelligent drawing commands.",
    },
    {
      icon: Volume2,
      title: "Voice Sync",
      description:
        "Generates natural AI voice narration that speaks in perfect sync with your animated drawings.",
    },
    {
      icon: Zap,
      title: "Instant Understanding",
      description:
        "Explain complex ideas in seconds. No design skills needed—just describe what you want to show.",
    },
  ];

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to create and share visual explanations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6A28D7]/20">
                <feature.icon className="w-12 h-12 text-[#6EE7B7] mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-4 text-[#6EE7B7]">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section Component
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Describe Your Idea",
      description: "Simply type what you want to explain. No design skills needed—just describe your concept in plain English.",
      icon: Edit3,
    },
    {
      number: "02",
      title: "AI Creates Storyboard",
      description: "Our AI engine instantly generates a step-by-step visual storyboard with intelligent drawing commands.",
      icon: Bot,
    },
    {
      number: "03",
      title: "Voice Narration Syncs",
      description: "AI voice narration is generated and perfectly synchronized with the animated drawings on the canvas.",
      icon: Mic,
    },
    {
      number: "04",
      title: "Share & Export",
      description: "Download as video, share via link, or embed anywhere. Your explanation is ready to reach your audience.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From idea to animated explanation in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <step.icon className="w-10 h-10 text-[#6EE7B7] mb-4" strokeWidth={1.5} />
                <div className="text-sm font-mono text-[#6EE7B7] mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-linear-to-r from-[#6A28D7] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Use Cases Section Component
function UseCasesSection() {
  const useCases = [
    {
      icon: GraduationCap,
      title: "Educators & Teachers",
      description: "Explain complex subjects with visual storyboards. Make learning engaging and memorable for students of all ages.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Briefcase,
      title: "Business & Startups",
      description: "Pitch ideas to investors, explain products to customers, or train teams with clear visual presentations.",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Video,
      title: "Content Creators",
      description: "Create educational videos, tutorials, and explainer content that stands out with AI-powered animations.",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Code,
      title: "Developers & Tech",
      description: "Document APIs, explain system architecture, or create technical tutorials with visual clarity.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: TrendingUp,
      title: "Marketing Teams",
      description: "Create engaging explainer videos, product demos, and social media content that converts.",
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      icon: Activity,
      title: "Healthcare & Science",
      description: "Simplify medical concepts and research findings for patients and public health education.",
      color: "from-teal-500/20 to-cyan-500/20",
    },
  ];

  return (
    <section id="use-cases" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Who Uses Brainraw?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Perfect for anyone who needs to explain complex ideas visually
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className={`bg-linear-to-br ${useCase.color} backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300`}>
                <useCase.icon className="w-10 h-10 text-[#6EE7B7] mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  const openWaitlist = () => {
    const event = new CustomEvent("openWaitlist");
    window.dispatchEvent(event);
  };

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Brainraw?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Traditional explanations rely on text and static images. Brainraw
            brings ideas to life with <span className="text-[#6EE7B7] font-semibold">AI-powered visual storytelling</span> that
            combines animated drawings with synchronized voice narration.
          </p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Whether you're teaching a complex concept, pitching an idea, or
            creating content—Brainraw makes it simple, engaging, and memorable.
          </p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onClick={openWaitlist}
            className="px-8 py-4 bg-linear-to-r from-[#6EE7B7] to-[#6EE7B7]/80 text-black rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-[#6EE7B7]/50"
          >
            Get Early Access
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const faqs = [
    {
      question: "What is Brainraw?",
      answer: "Brainraw is an AI-powered whiteboard tool that transforms any text prompt into animated visual explanations with synchronized voice narration. It's perfect for explaining complex concepts in an engaging, memorable way.",
    },
    {
      question: "How does the AI work?",
      answer: "Brainraw uses advanced language models to understand your prompt and generate intelligent storyboard sequences. It then creates synchronized voice narration and drawing commands that animate on a canvas in real-time.",
    },
    {
      question: "What can I create with Brainraw?",
      answer: "Educational content, product explainers, pitch presentations, tutorials, training materials, social media content, and any visual explanation you can imagine. If you can describe it, Brainraw can visualize it.",
    },
    {
      question: "Will there be a free plan?",
      answer: "Yes! We're committed to making visual explanation accessible. We'll offer a free tier with limited features, perfect for individual creators and educators.",
    },
    {
      question: "Can I export my storyboards?",
      answer: "Absolutely! You'll be able to export your animated storyboards as video files (MP4), share via direct links, or embed them on your website.",
    },
  ];

  return (
    <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Brainraw
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-[#6EE7B7]">
                {faq.question}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:tilek.dzenisev@gmail.com"
            className="text-[#6EE7B7] hover:underline font-semibold"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl">
            <MessageCircle className="w-16 h-16 text-[#6EE7B7] mb-6 mx-auto" strokeWidth={1.5} />
            <blockquote className="text-3xl sm:text-4xl font-medium mb-6 text-gray-200">
              "Finally, an AI that explains visually."
            </blockquote>
            <cite className="text-lg text-gray-400">— Early User</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          {/* Left: Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
              Terms of Service
            </a>
            <a href="mailto:tilek.dzenisev@gmail.com" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
              Contact
            </a>
          </div>

          {/* Center: Copyright & Built by */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400">
            <span className="whitespace-nowrap">© {new Date().getFullYear()} Brainrow.</span>
            <span className="whitespace-nowrap">
              Built with ❤️ by{" "}
              <span className="text-[#6EE7B7] font-semibold">Manavault</span>
            </span>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://x.com/TilekDzhenishev"
            target="_blank"
            rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6EE7B7] transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
          </a>
          <a
              href="https://www.linkedin.com/company/brainraw/"
            target="_blank"
            rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6EE7B7] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
    </div>
    </footer>
  );
}
