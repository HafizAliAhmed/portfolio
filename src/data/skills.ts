/**
 * Centralized skill data for programmatic SEO
 * Each skill has its own dynamic page at /skills/[skill]
 */

export interface Skill {
    slug: string;
    name: string;
    description: string;
    longDescription: string;
    icon: string;
    width: number;
    height: number;
    category: 'ai' | 'frontend' | 'backend' | 'fullstack' | 'tools';
    relatedProjects: string[]; // Project slugs for internal linking
    featured: boolean;
}

export const skills: Skill[] = [
    // AI & Machine Learning
    {
        slug: 'python',
        name: 'Python',
        description: 'Expert Python development for AI, machine learning, and backend systems',
        longDescription: `Python is my primary language for AI and machine learning development. With extensive experience in the Python ecosystem, I build robust, scalable solutions for data processing and AI applications.

My Python skills include:
- **AI/ML Libraries**: TensorFlow, PyTorch, scikit-learn, pandas, numpy
- **Web Frameworks**: FastAPI, Flask, Django
- **Data Processing**: ETL pipelines, data analysis, visualization
- **Automation**: Scripting, task automation, workflow orchestration
- **Best Practices**: Type hints, testing, documentation, clean code`,
        icon: '/python.jpg',
        width: 80,
        height: 80,
        category: 'ai',
        relatedProjects: [],
        featured: true,
    },
    {
        slug: 'fastapi',
        name: 'FastAPI',
        description: 'Building high-performance APIs with FastAPI for AI and web applications',
        longDescription: `FastAPI is my go-to framework for building modern, high-performance APIs. Its automatic documentation, type validation, and async support make it ideal for AI-powered backends.

My FastAPI expertise includes:
- **RESTful API Design**: Clean, well-documented API endpoints
- **Async Programming**: High-concurrency request handling
- **AI Integration**: Serving ML models and LLM applications
- **Authentication**: OAuth2, JWT, and API key security
- **Database Integration**: SQLAlchemy, MongoDB, Redis`,
        icon: '/Fastapi.png',
        width: 80,
        height: 80,
        category: 'ai',
        relatedProjects: [],
        featured: true,
    },
    {
        slug: 'openai-agent-sdk',
        name: 'OpenAI Agent SDK',
        description: 'Developing intelligent AI agents with OpenAI Agent SDK for autonomous decision-making',
        longDescription: `The OpenAI Agent SDK enables the creation of sophisticated AI assistants that can understand context, make decisions, and take actions autonomously.

My expertise with OpenAI Agent SDK includes:
- **Function Calling**: Implementing structured tool use for AI agents
- **Multi-turn Conversations**: Building context-aware conversational agents
- **Parallel Tool Execution**: Optimizing agent performance with concurrent operations
- **Custom Instructions**: Designing system prompts for specialized behaviors
- **Integration Patterns**: Connecting agents to enterprise systems and workflows`,
        icon: '/node-js.png',
        width: 80,
        height: 80,
        category: 'ai',
        relatedProjects: [],
        featured: true,
    },

    // Full Stack Development
    {
        slug: 'nextjs',
        name: 'Next.js',
        description: 'Full-stack web development with Next.js for modern, SEO-optimized applications',
        longDescription: `Next.js is the React framework I use for building production-grade web applications. Its powerful features enable fast, SEO-friendly, and scalable solutions.

My Next.js expertise includes:
- **App Router**: Server components, layouts, and streaming
- **SEO Optimization**: Metadata API, sitemaps, structured data
- **Performance**: Image optimization, code splitting, caching
- **Full-Stack Development**: API routes, server actions, database integration
- **Deployment**: Vercel, Docker, edge functions`,
        icon: '/next.jpg',
        width: 80,
        height: 80,
        category: 'fullstack',
        relatedProjects: ['nextjs-portfolio', 'photo-gallery-app', 'ecommerce-website'],
        featured: true,
    },
    {
        slug: 'react',
        name: 'React',
        description: 'Building interactive user interfaces with React and modern component patterns',
        longDescription: `React is the foundation of my frontend development expertise. I build scalable, maintainable UIs using modern React patterns and best practices.

My React skills include:
- **Hooks & Patterns**: Custom hooks, context, render props
- **State Management**: Redux, Zustand, React Query
- **Component Architecture**: Atomic design, compound components
- **Performance**: Memoization, lazy loading, virtual lists
- **Testing**: Jest, React Testing Library, Cypress`,
        icon: '/React.png',
        width: 80,
        height: 80,
        category: 'fullstack',
        relatedProjects: ['nextjs-portfolio', 'photo-gallery-app', 'ecommerce-website'],
        featured: true,
    },
    {
        slug: 'typescript',
        name: 'TypeScript',
        description: 'Type-safe JavaScript development with TypeScript for robust applications',
        longDescription: `TypeScript brings type safety and improved developer experience to JavaScript projects. I use TypeScript as my default for all modern web development.

My TypeScript expertise includes:
- **Type System**: Generics, utility types, type inference
- **Best Practices**: Strict mode, branded types, discriminated unions
- **Integration**: React, Next.js, Node.js, APIs
- **Tooling**: ESLint, Prettier, tsconfig optimization
- **Migration**: Converting JavaScript projects to TypeScript`,
        icon: '/ts.png',
        width: 80,
        height: 80,
        category: 'fullstack',
        relatedProjects: ['nextjs-portfolio', 'photo-gallery-app', 'ecommerce-website'],
        featured: true,
    },
    {
        slug: 'tailwindcss',
        name: 'Tailwind CSS',
        description: 'Rapid UI development with Tailwind CSS utility-first framework',
        longDescription: `Tailwind CSS enables rapid, consistent UI development through utility classes. I use Tailwind for building beautiful, responsive interfaces efficiently.

My Tailwind CSS skills include:
- **Responsive Design**: Mobile-first breakpoint strategies
- **Custom Theming**: Design systems, color palettes, typography
- **Component Patterns**: Reusable UI component libraries
- **Animations**: Transitions, keyframe animations, micro-interactions
- **Optimization**: PurgeCSS, JIT mode, performance`,
        icon: '/css.png',
        width: 80,
        height: 80,
        category: 'fullstack',
        relatedProjects: ['nextjs-portfolio', 'ecommerce-website'],
        featured: true,
    },
    {
        slug: 'stripe',
        name: 'Stripe',
        description: 'Payment processing integration with Stripe for e-commerce solutions',
        longDescription: `Stripe powers secure payment processing for modern web applications. I integrate Stripe for seamless checkout experiences and subscription management.

My Stripe expertise includes:
- **Payment Integration**: Checkout sessions, payment intents
- **Subscription Management**: Recurring billing, plan management
- **Webhooks**: Event handling, payment verification
- **Security**: PCI compliance, fraud prevention
- **Testing**: Test mode, mock payments`,
        icon: '/stripe.png',
        width: 80,
        height: 80,
        category: 'fullstack',
        relatedProjects: ['ecommerce-website'],
        featured: true,
    },

    // Frontend Technologies
    {
        slug: 'html5',
        name: 'HTML5',
        description: 'Semantic HTML5 markup for accessible web applications',
        longDescription: `HTML5 is the foundation of modern web development. I use semantic HTML to build accessible, SEO-friendly web applications.`,
        icon: '/html.png',
        width: 80,
        height: 80,
        category: 'frontend',
        relatedProjects: [],
        featured: true,
    },
    {
        slug: 'css3',
        name: 'CSS3',
        description: 'Modern CSS3 styling with animations and responsive design',
        longDescription: `CSS3 enables beautiful, responsive designs. I use modern CSS features including Grid, Flexbox, animations, and custom properties.`,
        icon: '/css.png',
        width: 80,
        height: 80,
        category: 'frontend',
        relatedProjects: [],
        featured: true,
    },
    {
        slug: 'javascript',
        name: 'JavaScript',
        description: 'Modern JavaScript (ES6+) for interactive web applications',
        longDescription: `JavaScript is the language of the web. I use modern ES6+ features to build interactive, performant web applications.`,
        icon: '/js.png',
        width: 65,
        height: 65,
        category: 'frontend',
        relatedProjects: [],
        featured: true,
    },
    {
        slug: 'shadcn-ui',
        name: 'Shadcn UI',
        description: 'Beautiful, accessible component library built with Radix UI and Tailwind',
        longDescription: `Shadcn UI provides beautifully designed, accessible components that I customize for each project. Built on Radix UI primitives with Tailwind CSS.`,
        icon: '/shadcn.png',
        width: 80,
        height: 80,
        category: 'frontend',
        relatedProjects: [],
        featured: true,
    },

    // Backend & DevOps
    {
        slug: 'nodejs',
        name: 'Node.js',
        description: 'Server-side JavaScript development with Node.js for scalable backends',
        longDescription: `Node.js powers my backend development for building fast, scalable server applications. Its event-driven architecture is ideal for real-time and API-heavy applications.

My Node.js expertise includes:
- **API Development**: REST, GraphQL, WebSocket
- **Database Integration**: PostgreSQL, MongoDB, Redis
- **Authentication**: Passport, JWT, OAuth
- **Performance**: Clustering, caching, optimization
- **DevOps**: PM2, Docker, CI/CD`,
        icon: '/node-js.png',
        width: 80,
        height: 80,
        category: 'backend',
        relatedProjects: [],
        featured: true,
    },
    {
        slug: 'git',
        name: 'Git',
        description: 'Version control and collaboration with Git and GitHub',
        longDescription: `Git is essential for code management and team collaboration. I use Git for version control, code review, and collaborative development workflows.

My Git skills include:
- **Branching Strategies**: Git Flow, trunk-based development
- **Collaboration**: Pull requests, code review, merge conflicts
- **History Management**: Rebasing, cherry-picking, bisecting
- **CI/CD Integration**: GitHub Actions, automated testing
- **Best Practices**: Conventional commits, meaningful history`,
        icon: '/gitwhite.png',
        width: 80,
        height: 80,
        category: 'backend',
        relatedProjects: [],
        featured: true,
    },
    {
        slug: 'sanity',
        name: 'Sanity',
        description: 'Headless CMS for structured content management',
        longDescription: `Sanity is a flexible headless CMS that I use for content-driven applications. Its real-time collaboration and powerful query language make it ideal for modern web apps.`,
        icon: '/sanity.png',
        width: 80,
        height: 80,
        category: 'backend',
        relatedProjects: [],
        featured: true,
    },
];

// Helper functions for programmatic SEO
export function getSkillBySlug(slug: string): Skill | undefined {
    return skills.find((skill) => skill.slug === slug);
}

export function getAllSkillSlugs(): string[] {
    return skills.map((skill) => skill.slug);
}

export function getFeaturedSkills(): Skill[] {
    return skills.filter((skill) => skill.featured);
}

export function getSkillsByCategory(category: Skill['category']): Skill[] {
    return skills.filter((skill) => skill.category === category);
}

// Legacy exports for backward compatibility with existing components
export const Skill_data = skills.filter(s => s.category === 'fullstack' || s.featured).map(s => ({
    skill_name: s.name,
    Image: s.icon,
    width: s.width,
    height: s.height,
}));

export const Frontend_skill = skills.filter(s => s.category === 'frontend').map(s => ({
    skill_name: s.name,
    Image: s.icon,
    width: s.width,
    height: s.height,
}));

export const Backend_skill = skills.filter(s => s.category === 'backend').map(s => ({
    skill_name: s.name,
    Image: s.icon,
    width: s.width,
    height: s.height,
}));

export const AI_skill = skills.filter(s => s.category === 'ai').map(s => ({
    skill_name: s.name,
    Image: s.icon,
    width: s.width,
    height: s.height,
}));
