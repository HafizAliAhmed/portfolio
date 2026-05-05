/**
 * Site-wide configuration for SEO and metadata
 * Centralized source of truth for all URLs and site information
 */

export const siteConfig = {
    // Primary domain - used for all canonical URLs and SEO
    url: 'https://hafizaliahmed.xyz',

    // Site metadata
    name: 'Hafiz Ali Ahmed',
    title: 'Hafiz Ali Ahmed · Co-founder & CEO of Safock · AI Automations',
    description:
        'Hafiz Ali Ahmed is the Co-founder & CEO of Safock, an AI automations company co-founded by Hafiz Ali Ahmed that builds agentic systems for ambitious teams and develops its own AI-native product. Co-founder & CTO of Functions Global. Teacher/Faculty at Governor House — mentored 10,000+ students.',

    // Short marketing line
    tagline: 'Co-founder & CEO of Safock. I build AI automations that ship.',

    // Author information
    author: {
        name: 'Hafiz Ali Ahmed',
        email: 'hafizaliahmed2004@gmail.com',
        jobTitle: 'Co-founder & CEO of Safock',
        company: 'Safock',
        previousCompany: 'Functions Global',
        location: 'Karachi, Pakistan',
    },

    // Company / agency
    safock: {
        name: 'Safock',
        url: 'https://safock.com',
        description:
            'AI automations company. Agentic workflows and automation systems for ambitious teams, plus our own AI-native product in development.',
        founded: 'July 2025',
    },

    // Other roles
    functionsGlobal: {
        name: 'Functions Global',
        role: 'Co-founder & CTO',
        since: '2023',
    },

    governorHouse: {
        name: 'Governor House',
        role: 'Teacher/Faculty',
        track: 'AI-Native, Cloud, Business & Entrepreneurship',
        weeklyStudents: '1,500+',
        totalMentored: '10,000+',
    },

    // Booking / scheduling link — Calendly 15-minute discovery call
    bookingUrl: 'https://calendly.com/safock/15min',

    // Social links
    social: {
        twitter: '@hafizaliahmed9',
        twitterUrl: 'https://twitter.com/hafizaliahmed9',
        linkedin: 'https://www.linkedin.com/in/hafizaliahmed',
        github: 'https://github.com/HafizAliAhmed',
        medium: 'https://medium.com/@hafizaliahmed2004',
        safock: 'https://safock.com',
    },

    // Default OpenGraph image
    ogImage: '/portfoliopicture.png',

    // SEO Keywords — brand, intent, and topical
    keywords: [
        // Brand
        'Hafiz Ali Ahmed',
        'Hafiz Ali Ahmed Safock',
        'Safock',
        'Safock CEO',
        'Safock co-founder',
        'Functions Global CTO',
        // Role
        'AI automations agency',
        'AI agency Pakistan',
        'AI agency CEO',
        'AI automations company',
        'AI-native product',
        'AI-native cloud architect',
        // Services / intent
        'Hire AI automations agency',
        'AI automation services',
        'AI agent development',
        'Agentic workflows',
        'AI consulting for founders',
        // Education / authority
        'Governor House AI-Native track',
        'Governor House Teacher Faculty',
        'AI educator Pakistan',
        // Topical
        'OpenAI Agents SDK',
        'LangGraph',
        'Multi-agent systems',
        'AI cloud infrastructure',
    ],

    // Google verification
    googleVerification: '1alNcP2wEdLG02v2GRF3lFf2eo0wfGuI_ZUcO6f4F8A',
} as const;

export type SiteConfig = typeof siteConfig;
