import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './component/main/Navbar';
import StarsCanvas from './component/main/SarbackGroung';
import Footer from './component/main/Footer';
import Chatbot from './components/Chatbot';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hafiz-aliahmed-portfolio.vercel.app'),
  title: 'Hafiz Ali Ahmed | Agentic AI Developer & Educator | OpenAI Agent SDK & LangChain Expert',
  description: 'Hafiz Ali Ahmed - Agentic AI Developer, Educator at Governor Sindh GenAI Initiative, and Co-Founder at Functions Global. Building autonomous AI systems with OpenAI Agent SDK, LangChain, LangGraph2AI. Mentoring 1,500+ students in AI development. Expert in Agentic AI, autonomous systems, and intelligent agents.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords: [
    'Hafiz Ali Ahmed',
    'Agentic AI Developer',
    'OpenAI Agent SDK',
    'LangChain Developer',
    'AI Educator Pakistan',
    'Functions Global Co-Founder',
    'Governor Sindh GenAI Initiative',
    'Autonomous AI Systems',
    'LangGraph2AI',
    'AI Agent Development',
    'Machine Learning Expert',
    'Next.js Developer',
    'Full Stack AI Developer',
    'Artificial Intelligence Educator',
    'OpenAI SDK Developer Pakistan'
  ],
  authors: [{ name: 'Hafiz Ali Ahmed' }],
  creator: 'Hafiz Ali Ahmed',
  publisher: 'Hafiz Ali Ahmed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hafiz-aliahmed-portfolio.vercel.app',
    title: 'Hafiz Ali Ahmed | Agentic AI Developer & Educator',
    description: 'Building autonomous AI systems with OpenAI Agent SDK and LangChain. Co-Founder at Functions Global, teaching 1,500+ students at Governor Sindh GenAI Initiative.',
    siteName: 'Hafiz Ali Ahmed Portfolio',
    images: [
      {
        url: '/portfoliopicture.png',
        width: 1200,
        height: 630,
        alt: 'Hafiz Ali Ahmed - Agentic AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafiz Ali Ahmed | Agentic AI Developer',
    description: 'Building the next generation of autonomous AI systems with OpenAI Agent SDK, LangChain, and LangGraph2AI',
    creator: '@hafizaliahmed9',
    images: ['/portfoliopicture.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hafiz Ali Ahmed",
    "alternateName": "Hafiz Ali Ahmed",
    "jobTitle": "Agentic AI Developer & Educator",
    "description": "Building autonomous AI systems with OpenAI Agent SDK, LangChain, and LangGraph2AI. Co-Founder at Functions Global, Educator at Governor Sindh GenAI Initiative.",
    "url": "https://hafiz-aliahmed-portfolio.vercel.app",
    "email": "hafizaliahmed2004@gmail.com",
    "image": "https://hafiz-aliahmed-portfolio.vercel.app/portfoliopicture.png",
    "sameAs": [
      "https://twitter.com/hafizaliahmed9",
      "https://www.linkedin.com/in/hafizaliahmed",
      "https://github.com/HafizAliAhmed",
      "https://medium.com/@hafizaliahmed2004"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Functions Global"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Governor Sindh Initiative for GenAI, Web3, and Metaverse"
    },
    "knowsAbout": [
      "Agentic AI",
      "OpenAI Agent SDK",
      "LangChain",
      "LangGraph2AI",
      "Autonomous AI Systems",
      "Machine Learning",
      "Artificial Intelligence",
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "AI Education"
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="canvas-container">
        <StarsCanvas />
        </div>
        <Navbar />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  )
}
