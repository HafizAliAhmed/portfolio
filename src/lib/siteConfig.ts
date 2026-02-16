/**
 * Site-wide configuration for SEO and metadata
 * Centralized source of truth for all URLs and site information
 */

export const siteConfig = {
    // Primary domain - used for all canonical URLs and SEO
    url: 'https://hafizaliahmed.xyz',

    // Site metadata
    name: 'Hafiz Ali Ahmed',
    title: 'Hafiz Ali Ahmed | Agentic AI Developer & Educator',
    description: 'Hafiz Ali Ahmed. I make AI agents with OpenAI Agent SDK, teach 1500+ students at Governor Sindh GenAI Initiative, and co-founded Functions Global. Check out my projects.',

    // Author information
    author: {
        name: 'Hafiz Ali Ahmed',
        email: 'hafizaliahmed2004@gmail.com',
        jobTitle: 'Agentic AI Developer & Educator',
    },

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
        'Agentic AI Developer',
        'OpenAI Agent SDK',

        'AI Educator Pakistan',
        'Functions Global Co-Founder',
        'Governor Sindh GenAI Initiative',
        'Autonomous AI Systems',

        'AI Agent Development',
        'Machine Learning Expert',
        'Next.js Developer',
        'Full Stack AI Developer',
        'Artificial Intelligence Educator',
    ],

    // Google verification
    googleVerification: '1alNcP2wEdLG02v2GRF3lFf2eo0wfGuI_ZUcO6f4F8A',
} as const;

export type SiteConfig = typeof siteConfig;
