import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brainraw.vercel.app'),
  title: "Brainraw - AI-Powered Whiteboard | Turn Ideas Into Animated Explanations",
  description: "Brainraw transforms any text prompt into animated storyboards with synchronized AI voice narration. Think it. See it. Understand it.",
  keywords: "AI, whiteboard, explanations, AI voice, animated drawings, Brainraw, Manavault",
  authors: [{ name: "Manavault" }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Brainraw - AI-Powered Whiteboard",
    description: "Turn ideas into animated voice & drawing explanations powered by AI.",
    type: "website",
    images: ['/logo.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainraw - AI-Powered Whiteboard",
    description: "Turn ideas into animated voice & drawing explanations powered by AI.",
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0B0B] text-white min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
