/**
 * Site-wide configuration for SEO and metadata
 * Centralized source of truth for all URLs and site information
 */

export const siteConfig = {
    // Primary domain - used for all canonical URLs and SEO
    url: 'https://hafizaliahmed.xyz',

    // Site metadata
    name: 'Hafiz Ali Ahmed',
    title: 'Hafiz Ali Ahmed · AI-Native Cloud Architect & Founder',
    description:
        'Hafiz Ali Ahmed is an AI-native Cloud Architect and founder building production-grade AI agents, automation systems, and cloud platforms for ambitious teams and startups.',

    // Short marketing line for hero / OG
    tagline: 'I build AI systems that ship. Not demos.',

    // Author information
    author: {
        name: 'Hafiz Ali Ahmed',
        email: 'hafizaliahmed2004@gmail.com',
        jobTitle: 'AI-Native Cloud Architect & Founder',
        company: 'Functions Global',
    },

    // Booking / scheduling link (replace with your real Cal.com or Calendly)
    bookingUrl: 'mailto:hafizaliahmed2004@gmail.com?subject=Booking%20a%20call',

    // Social links
    social: {
        twitter: '@hafizaliahmed9',
        twitterUrl: 'https://twitter.com/hafizaliahmed9',
        linkedin: 'https://www.linkedin.com/in/hafizaliahmed',
        github: 'https://github.com/HafizAliAhmed',
        medium: 'https://medium.com/@hafizaliahmed2004',
    },

    // Default OpenGraph image
    ogImage: '/portfoliopicture.png',

    // SEO Keywords
    keywords: [
        'Hafiz Ali Ahmed',
        'AI-Native Cloud Architect',
        'AI Agency Founder',
        'Agentic AI Developer',
        'OpenAI Agent SDK',
        'AI Automation',
        'Cloud Architecture',
        'AI Educator Pakistan',
        'Functions Global Co-Founder',
        'Governor Sindh GenAI Initiative',
        'Autonomous AI Systems',
        'AI Agent Development',
        'Machine Learning Expert',
        'Next.js Developer',
        'Full Stack AI Developer',
    ],

    // Google verification
    googleVerification: '1alNcP2wEdLG02v2GRF3lFf2eo0wfGuI_ZUcO6f4F8A',
} as const;

export type SiteConfig = typeof siteConfig;
