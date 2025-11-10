"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.png';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center ">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 -mr-7">
                <Image
                  src={logo}
                  alt="Brainraw Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-[#8B5CF6] to-[#6A28D7] bg-clip-text text-transparent group-hover:from-[#A78BFA] group-hover:to-[#8B5CF6] transition-all whitespace-nowrap">
                Brainraw
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#use-cases"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Use Cases
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => {
              const event = new CustomEvent("openWaitlist");
              window.dispatchEvent(event);
            }}
            className="px-4 sm:px-6 py-2 sm:py-2.5 bg-linear-to-r from-[#6A28D7] to-[#8B5CF6] text-white rounded-full font-semibold text-sm sm:text-base hover:from-[#8B5CF6] hover:to-[#A78BFA] transition-all duration-300 shadow-lg shadow-[#6A28D7]/30 hover:shadow-[#6A28D7]/50 hover:scale-105"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </motion.header>
  );
}
