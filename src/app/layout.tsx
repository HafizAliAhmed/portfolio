import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} · Founder Site`,
  manifest: '/site.webmanifest',
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  category: 'technology',
  classification: 'AI Automations · Cloud Architecture · Founder',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} · Personal & Founder Site`,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Co-founder & CEO of Safock`,
        type: 'image/png',
      },
    ],
    firstName: 'Hafiz Ali',
    lastName: 'Ahmed',
    username: 'hafizaliahmed9',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
    site: siteConfig.social.twitter,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      noimageindex: false,
    },
  },
  verification: {
    google: siteConfig.googleVerification,
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: `${siteConfig.name} — Writing` }],
    },
  },
  other: {
    'msapplication-TileColor': '#0a0a0a',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Person — primary entity for the personal site
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    givenName: 'Hafiz Ali',
    familyName: 'Ahmed',
    alternateName: ['Hafiz Ali', 'Ali Ahmed'],
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.author.email}`,
    image: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}${siteConfig.ogImage}`,
      width: 1200,
      height: 630,
    },
    sameAs: [
      siteConfig.social.twitterUrl,
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.medium,
      siteConfig.safock.url,
    ],
    nationality: { '@type': 'Country', name: 'Pakistan' },
    homeLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressCountry: 'PK',
      },
    },
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Co-founder & CEO',
        occupationLocation: { '@type': 'City', name: 'Karachi' },
        skills:
          'AI Automations, Agentic AI, AI-Native Cloud Architecture, OpenAI Agents SDK, LangGraph, Multi-agent Systems, Founder Leadership',
      },
      {
        '@type': 'Occupation',
        name: 'Co-founder & CTO',
        skills: 'AI Engineering, Cloud Architecture, Product Engineering',
      },
      {
        '@type': 'Occupation',
        name: 'Lead Teacher',
        occupationLocation: { '@type': 'Place', name: 'Governor House' },
        skills:
          'Curriculum Design, AI-Native Development, Cloud, Business, Entrepreneurship',
      },
    ],
    worksFor: [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.safock.url}/#organization`,
        name: siteConfig.safock.name,
        url: siteConfig.safock.url,
        description: siteConfig.safock.description,
        foundingDate: '2025-07-25',
        founder: { '@id': `${siteConfig.url}/#person` },
      },
      {
        '@type': 'Organization',
        name: siteConfig.functionsGlobal.name,
        url: 'https://functionsglobal.com',
        description: `${siteConfig.functionsGlobal.role} since ${siteConfig.functionsGlobal.since}.`,
      },
    ],
    affiliation: {
      '@type': 'EducationalOrganization',
      name: siteConfig.governorHouse.name,
      description: `${siteConfig.governorHouse.role} — ${siteConfig.governorHouse.track}. Currently teaching ${siteConfig.governorHouse.weeklyStudents} students on-site weekly.`,
    },
    knowsAbout: [
      'Agentic AI',
      'AI Automations',
      'AI-Native Cloud Architecture',
      'OpenAI Agents SDK',
      'LangGraph',
      'LangChain',
      'CrewAI',
      'Multi-agent Systems',
      'Retrieval-Augmented Generation',
      'RAG Pipelines',
      'Vector Databases',
      'AWS',
      'GCP',
      'Vercel',
      'Cloudflare',
      'Next.js',
      'React',
      'TypeScript',
      'Python',
      'FastAPI',
      'Founder Operations',
      'AI Education',
      'Cohort Education',
      'Agentic Workflows',
    ],
    knowsLanguage: ['English', 'Urdu'],
  };

  // Organization — Safock
  const safockOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.safock.url}/#organization`,
    name: siteConfig.safock.name,
    legalName: 'Safock',
    url: siteConfig.safock.url,
    description: siteConfig.safock.description,
    foundingDate: '2025-07-25',
    founder: { '@id': `${siteConfig.url}/#person` },
    employee: { '@id': `${siteConfig.url}/#person` },
    industry: 'AI Automations',
    knowsAbout: [
      'AI Automations',
      'Agentic AI',
      'AI-Native Cloud Architecture',
      'AI-Native Product Development',
    ],
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
        addressLocality: 'Karachi',
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: siteConfig.author.email,
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Urdu'],
    },
  };

  // ProfilePage — for the homepage acting as personal profile
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteConfig.url}/#profile`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    mainEntity: { '@id': `${siteConfig.url}/#person` },
    dateCreated: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };

  // WebSite with SearchAction (sitelinks search box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: `${siteConfig.name} · Personal & Founder Site`,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#person` },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <meta name="theme-color" content="#0a0a0a" />
        {/* DNS prefetch + preconnect for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${inter.className} bg-bg text-text-primary overflow-x-hidden antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(safockOrganizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
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
