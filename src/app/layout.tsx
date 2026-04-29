import type { Metadata } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './component/main/Navbar';
import Footer from './component/main/Footer';
import { siteConfig } from '@/lib/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} · Personal & Founder Site`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} · AI-Native Cloud Architect & Founder`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
    images: [siteConfig.ogImage],
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
  verification: {
    google: siteConfig.googleVerification,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    alternateName: siteConfig.name,
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.author.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    sameAs: [
      siteConfig.social.twitterUrl,
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.medium,
    ],
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.author.company,
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Governor Sindh Initiative for GenAI, Web3, and Metaverse',
    },
    knowsAbout: [
      'Agentic AI',
      'AI-Native Cloud Architecture',
      'OpenAI Agent SDK',
      'LangChain',
      'LangGraph',
      'Autonomous AI Systems',
      'AI Automation',
      'Machine Learning',
      'Artificial Intelligence',
      'Full Stack Development',
      'Next.js',
      'React',
      'TypeScript',
      'Python',
      'AI Education',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.name} · Personal & Founder Site`,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={`${inter.className} bg-bg text-text-primary overflow-x-hidden antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
