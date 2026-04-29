/**
 * Blog post metadata.
 *
 * To add a post, drop a new entry in this array and (optionally) a matching
 * `content` field rendered with the prose-blog class on /blog/[slug].
 */

export type BlogCategory =
    | 'AI'
    | 'Cloud'
    | 'Automation'
    | 'Startups'
    | 'Entrepreneurship';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;          // ISO yyyy-mm-dd
    readTime: string;      // e.g. "6 min read"
    category: BlogCategory;
    tags: string[];
    cover?: string;        // optional /public path
    /** Optional MDX-style HTML body */
    content?: string;
    /** Optional external link if the post lives on Medium etc. */
    externalUrl?: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'agents-that-ship',
        title: 'Building AI agents that ship, not demos',
        excerpt:
            "Most agentic AI projects die in the demo loop. Here's the production framework I use to ship agents that survive contact with real users.",
        date: '2026-04-12',
        readTime: '8 min read',
        category: 'AI',
        tags: ['Agentic AI', 'Production', 'Evals'],
        cover: '/blackhole.webm',
        content: `<p>The hardest part of agentic AI isn't picking the framework. It's getting the system reliable enough that you'd put your name on it.</p>
<h2>The four production primitives</h2>
<p>Every agent that ships in production has four things in common: a clear contract, a tool layer, an eval harness, and a fallback path. Skip any one of these and you'll be stuck in demo purgatory.</p>
<h2>Eval first, code second</h2>
<p>Before I write a single line of agent code, I build the eval set. If you can't grade an output, you can't ship it.</p>`,
    },
    {
        slug: 'ai-native-cloud-stack',
        title: 'The AI-native cloud stack I deploy in 2026',
        excerpt:
            "AWS or Vercel? Pinecone or pgvector? Here's the opinionated stack I reach for when I need to ship an AI product fast, and what I'd swap when scale changes.",
        date: '2026-03-28',
        readTime: '10 min read',
        category: 'Cloud',
        tags: ['Cloud', 'Architecture', 'AWS', 'Vercel'],
        content: `<p>The 2026 AI stack looks different than it did even a year ago. Here's how I'm deploying.</p>
<h2>Compute</h2>
<p>Vercel + Cloudflare Workers for the edge. AWS Fargate or GCP Cloud Run for the heavy lifters. Almost never bare metal.</p>`,
    },
    {
        slug: 'automations-that-pay-rent',
        title: 'Automations that pay rent: a founder framework',
        excerpt:
            "Most internal automations die because nobody measures them. Here's the simple ROI framework I run with every client before we build a single workflow.",
        date: '2026-03-15',
        readTime: '6 min read',
        category: 'Automation',
        tags: ['Automation', 'Operations', 'ROI'],
        content: `<p>An automation is only worth building if you can measure the hours or revenue it returns. Period.</p>`,
    },
    {
        slug: 'first-ten-clients',
        title: 'How I closed my first ten AI agency clients',
        excerpt:
            "No paid ads, no cold-outreach blitz. The mechanics behind getting the first ten clients for a technical agency: what worked, what didn't.",
        date: '2026-02-20',
        readTime: '7 min read',
        category: 'Entrepreneurship',
        tags: ['Founder', 'Agency', 'Sales'],
        content: `<p>The hardest ten clients are the first ten. Here's the playbook.</p>`,
    },
    {
        slug: 'teaching-1500-students',
        title: 'What teaching 1,500 students about AI taught me',
        excerpt:
            "Lessons from running the GenAI track at Governor Sindh's initiative: what students get wrong, what frameworks accelerate them, and what hiring managers should look for.",
        date: '2026-01-30',
        readTime: '9 min read',
        category: 'AI',
        tags: ['Education', 'Career', 'AI'],
        content: `<p>You learn faster by teaching than by building. Here's what 1,500 students taught me.</p>`,
    },
    {
        slug: 'startup-leverage-2026',
        title: 'The new founder leverage stack',
        excerpt:
            'AI changed what one founder + one engineer can do. A field guide to the leverage tools, agents, and patterns I use to build alone, and outpace teams.',
        date: '2026-01-08',
        readTime: '5 min read',
        category: 'Startups',
        tags: ['Founder', 'Leverage', 'Productivity'],
        content: `<p>The lone founder is back. Not as a hustle archetype, but as a real economic unit.</p>`,
    },
];

export function getAllPosts(): BlogPost[] {
    return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
    return blogPosts.map((p) => p.slug);
}

export function getPostsByCategory(cat: BlogCategory): BlogPost[] {
    return blogPosts.filter((p) => p.category === cat);
}
