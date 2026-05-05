/**
 * Centralized project data for programmatic SEO
 * Each project has its own dynamic page at /projects/[slug]
 */

export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    category: 'ai' | 'fullstack' | 'web';
    featured: boolean;
}

export const projects: Project[] = [
    {
        slug: 'safock',
        title: 'Safock — AI Automations',
        description:
            'Co-founder & CEO of Safock — an AI automations company shipping agentic systems for ambitious teams while developing our own AI-native product in parallel.',
        longDescription: `Safock is the company I co-founded in July 2025 and currently serve as CEO. We do two things in parallel:

- **AI Automations for clients**: end-to-end automation systems for operations, sales, support, and internal workflows. Custom-built, integrated with the client's stack, and shipped to production.
- **Our own AI-native product**: in active development, founder-led, dogfooded across every internal workflow at Safock.

Our thesis: most AI work fails because it stops at the demo. Safock builds for production from day one — tightly scoped engagements, founder-led delivery, and honest reporting on what works.`,
        image: '/safock-cover.png',
        technologies: [
            'OpenAI Agents SDK',
            'LangGraph',
            'AWS',
            'Vercel',
            'Next.js',
            'Python',
            'TypeScript',
        ],
        githubUrl: 'https://github.com/HafizAliAhmed',
        liveUrl: 'https://safock.com',
        category: 'ai',
        featured: true,
    },
    {
        slug: 'functions-global',
        title: 'Functions Global',
        description:
            'Co-founder & CTO of Functions Global since 2023. Lead engineering across AI-native products and infrastructure.',
        longDescription: `I co-founded Functions Global in 2023 and currently serve as CTO, leading engineering across AI-native products and the infrastructure they run on.

The role spans architecture, hands-on engineering, and team leadership — covering everything from initial product design to production deployment and post-launch iteration.`,
        image: '/functions-global-cover.png',
        technologies: [
            'AI Engineering',
            'Cloud Architecture',
            'Next.js',
            'Python',
            'TypeScript',
            'AWS',
        ],
        githubUrl: 'https://github.com/HafizAliAhmed',
        liveUrl: 'https://functionsglobal.com',
        category: 'ai',
        featured: true,
    },
    {
        slug: 'governor-house-teaching',
        title: 'Governor House — Teacher/Faculty',
        description:
            'Teacher/Faculty at Governor House. 1,500+ students mentored on-site every week across AI-native, cloud, business, and entrepreneurship. 10,000+ students taught in total.',
        longDescription: `As Teacher/Faculty at Governor House, I run an on-site program that currently serves 1,500+ students every week across AI-native development, cloud architecture, business, and entrepreneurship.

In total, I've mentored more than 10,000 students. The work spans curriculum design, live teaching, mentorship, and milestone-driven cohort delivery — most of those frameworks now run inside Safock's engagement playbooks.`,
        image: '/governor-house-cover.png',
        technologies: [
            'Curriculum Design',
            'AI-Native Development',
            'Cloud',
            'Business & Entrepreneurship',
            'Cohort Education',
        ],
        githubUrl: 'https://github.com/HafizAliAhmed',
        liveUrl: 'https://www.linkedin.com/in/hafizaliahmed',
        category: 'ai',
        featured: true,
    },
    {
        slug: 'photo-gallery-app',
        title: 'Cloud Photo Gallery',
        description:
            'A cloud-native photo management application built with Cloudinary, Next.js, and Vercel. Image transformation, optimised delivery, and modern cloud-storage patterns.',
        longDescription: `A cloud-native photo gallery built around Cloudinary's transformation and delivery layer.

Features:

- **Cloud-first storage** with Cloudinary as the source of truth for image hosting, transformation, and delivery.
- **Optimised delivery** through automatic format negotiation, responsive sizing, and progressive loading.
- **Gallery management** with intuitive upload, organisation, and viewing interfaces.
- **Modern stack** built on Next.js with deployment to Vercel for global edge distribution.`,
        image: '/project3.png',
        technologies: ['Next.js', 'Cloudinary', 'React', 'TypeScript', 'Vercel'],
        githubUrl: 'https://github.com/HafizAliAhmed/cloudinary-photo-gallery-app',
        liveUrl:
            'https://cloudinary-photo-gallery-88ashyb70-hafiz-ali-ahmeds-projects.vercel.app/gallery',
        category: 'fullstack',
        featured: false,
    },
];

// Helper functions for programmatic SEO
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
    return projects.filter((project) => project.category === category);
}
