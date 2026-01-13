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
        slug: 'nextjs-portfolio',
        title: 'Next.js Portfolio',
        description: 'Modern portfolio website showcasing projects with responsive design and smooth animations',
        longDescription: `A cutting-edge portfolio website built with Next.js 14, featuring a sleek dark theme with purple and cyan gradients. 
    
This portfolio demonstrates expertise in modern web development with React, TypeScript, and Tailwind CSS. Key features include:

- **Responsive Design**: Fully optimized for all screen sizes from mobile to desktop
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **SEO Optimized**: Dynamic metadata generation and structured data for search engines
- **Performance First**: Image optimization, lazy loading, and efficient rendering
- **3D Background**: Interactive star field using Three.js and React Three Fiber`,
        image: '/project2.png',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
        githubUrl: 'https://github.com/HafizAliAhmed',
        liveUrl: 'https://my-portfolio-project-vert.vercel.app/',
        category: 'fullstack',
        featured: true,
    },
    {
        slug: 'photo-gallery-app',
        title: 'Photo Gallery App',
        description: 'Cloud-based photo management system with Cloudinary integration and optimized image delivery',
        longDescription: `A sophisticated photo gallery application leveraging Cloudinary's powerful image management capabilities.

This project showcases cloud-native development skills with modern web technologies. Features include:

- **Cloud Storage**: Seamless integration with Cloudinary for image hosting and transformation
- **Optimized Delivery**: Automatic image optimization and responsive delivery
- **Gallery Management**: Intuitive interface for uploading, organizing, and viewing photos
- **Performance**: Lazy loading and progressive image loading for fast user experience
- **Modern Stack**: Built with Next.js and deployed on Vercel for global edge delivery`,
        image: '/project3.png',
        technologies: ['Next.js', 'Cloudinary', 'React', 'TypeScript', 'Vercel'],
        githubUrl: 'https://github.com/HafizAliAhmed/cloudinary-photo-gallery-app',
        liveUrl: 'https://cloudinary-photo-gallery-88ashyb70-hafiz-ali-ahmeds-projects.vercel.app/gallery',
        category: 'fullstack',
        featured: true,
    },
    {
        slug: 'ecommerce-website',
        title: 'E-commerce Website',
        description: 'Full-featured e-commerce platform with cart, checkout, and payment integration',
        longDescription: `A comprehensive e-commerce solution demonstrating full-stack development expertise with modern payment processing.

This project was built during a hackathon and features:

- **Complete Shopping Experience**: Product browsing, cart management, and secure checkout
- **Payment Integration**: Stripe payment processing for secure transactions
- **Product Management**: Dynamic product catalog with categories and search
- **Responsive Design**: Mobile-first approach for shopping on any device
- **Modern Architecture**: Built with Next.js, TypeScript, and Sanity CMS for content management`,
        image: '/ecommerce.png',
        technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Sanity CMS', 'Tailwind CSS'],
        githubUrl: 'https://github.com/HafizAliAhmed',
        liveUrl: 'https://hackathon-beryl.vercel.app/',
        category: 'fullstack',
        featured: true,
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
