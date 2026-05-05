/**
 * Blog post metadata.
 *
 * To add a post, drop a new entry in this array and (optionally) a matching
 * `content` field rendered with the prose-blog class on /blog/[slug].
 */

export type BlogCategory =
    | 'AI'
    | 'Cloud'
    | 'Founder'
    | 'Strategy'
    | 'Education';

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
        slug: 'why-most-ai-projects-die-at-the-demo',
        title: 'Why most AI projects die at the demo',
        excerpt:
            "Most AI work fails not because the technology is wrong, but because teams stop building once the demo lands. Here's the production framework we use at Safock to ship AI systems that actually run.",
        date: '2026-04-22',
        readTime: '8 min read',
        category: 'AI',
        tags: ['Agentic AI', 'Production', 'Safock', 'Engineering'],
        content: `<p>The hardest part of agentic AI isn't picking the framework. It's getting a system reliable enough that you'd put your name on it in production.</p>
<h2>The four production primitives</h2>
<p>Every agentic system that survives contact with real users has four things in common: a clear contract, a tool layer with graceful failure, an evaluation harness, and a fallback path. Skip any one of these and you'll be stuck shipping demos.</p>
<h2>Eval first, code second</h2>
<p>Before we write a single line of agent code at Safock, we build the eval set. If you can't grade an output, you can't ship it.</p>
<h2>The Safock playbook</h2>
<p>This is the framework we use across every Safock engagement, abstracted from the dozens of agents we've shipped to production.</p>`,
    },
    {
        slug: 'ai-native-cloud-stack-2026',
        title: 'The AI-native cloud stack I deploy in 2026',
        excerpt:
            "AWS or Vercel? Pinecone or pgvector? An opinionated walkthrough of the cloud architecture I reach for when shipping AI products at Safock — and what we swap when scale changes the math.",
        date: '2026-04-08',
        readTime: '11 min read',
        category: 'Cloud',
        tags: ['AI-Native Cloud', 'Architecture', 'AWS', 'Vercel', 'Safock'],
        content: `<p>The 2026 AI-native cloud stack looks different than it did even a year ago. Here's how I'm deploying at Safock.</p>
<h2>The compute layer</h2>
<p>Vercel + Cloudflare Workers for the edge. AWS Fargate or GCP Cloud Run for the heavier work. Bare metal, almost never.</p>
<h2>The data layer</h2>
<p>Postgres remains the default for relational. For vectors: pgvector at small scale, Pinecone or Qdrant at production scale. The decision usually comes down to operational overhead.</p>
<h2>The observability layer</h2>
<p>This is where most AI products fail silently. Logs, traces, evals — all visible from day one or you'll fly blind.</p>`,
    },
    {
        slug: 'from-builder-to-founder-safock',
        title: 'From builder to founder: starting Safock',
        excerpt:
            'After co-founding Functions Global as CTO and mentoring 10,000+ students, I co-founded Safock in July 2025. The thesis, the mechanics, and what I got wrong in the first six months.',
        date: '2026-03-25',
        readTime: '9 min read',
        category: 'Founder',
        tags: ['Founder', 'Safock', 'Agency', 'Mechanics'],
        content: `<p>Founding an AI agency in 2026 is not the same as founding one in 2022. The market has matured, expectations have hardened, and clients are tired of demos.</p>
<h2>The thesis</h2>
<p>Safock exists for one reason: to ship AI systems that hold up in production. Not slideware. Not POCs that never get adopted. Working systems with users on them.</p>
<h2>What I got wrong early</h2>
<p>Here's what cost me time in the first six months — and what I'd tell any technical founder starting an agency in this space.</p>`,
    },
    {
        slug: 'four-shapes-of-an-ai-engagement',
        title: 'The four shapes of an AI engagement',
        excerpt:
            "After running engagements across SaaS, fintech, and operations, I've reduced AI client work to four shapes. Choosing the right one upfront saves teams six weeks of confusion.",
        date: '2026-03-12',
        readTime: '7 min read',
        category: 'Strategy',
        tags: ['Strategy', 'Engagements', 'Founder', 'Agency'],
        content: `<p>Most AI client work falls into one of four shapes. Choosing the wrong shape is the most common reason engagements stall.</p>
<h2>The four shapes</h2>
<p>1. Build &mdash; you have a clear scope, you need it shipped. 2. Architect &mdash; you have a stack problem, you need a plan. 3. Advise &mdash; you need a thinking partner, not delivery. 4. Train &mdash; you have a team, you need them up to standard.</p>`,
    },
    {
        slug: 'teaching-10000-students-ai',
        title: 'What teaching 10,000+ students about AI taught me',
        excerpt:
            "Lessons from mentoring 10,000+ students total and currently teaching 1,500+ on-site every week as Teacher/Faculty at Governor House. What students consistently get wrong, what frameworks accelerate them, and what hiring managers should look for.",
        date: '2026-02-26',
        readTime: '10 min read',
        category: 'Education',
        tags: ['Education', 'Career', 'AI', 'Governor House'],
        content: `<p>You learn faster by teaching than by building. Here's what 10,000+ students taught me about how to ship AI in production.</p>
<h2>What students get wrong</h2>
<p>Almost everyone underestimates the gap between &quot;the model worked once&quot; and &quot;the system runs reliably for thousands of users.&quot; Closing that gap is the entire job.</p>
<h2>The frameworks that accelerate</h2>
<p>Three mental models that compound: think in contracts, write the eval before the code, and treat failure modes as first-class citizens.</p>`,
    },
    {
        slug: 'enterprise-agentic-ai-mistakes',
        title: 'What enterprise teams get wrong about agentic AI',
        excerpt:
            "Enterprise AI initiatives fail in patterns I now recognise on the first call. A field guide to the four mistakes I see most often — and how Safock structures engagements to avoid them.",
        date: '2026-02-10',
        readTime: '8 min read',
        category: 'AI',
        tags: ['Enterprise', 'Agentic AI', 'Strategy', 'Safock'],
        content: `<p>Enterprise AI work fails differently than startup AI work. The patterns are predictable.</p>
<h2>Mistake one: skipping the eval layer</h2>
<p>If you can't grade the output reliably, you can't deploy it reliably.</p>
<h2>Mistake two: treating agents as features</h2>
<p>Agentic systems are infrastructure. Treating them as a feature inside a product team's roadmap is how they end up underbuilt and unowned.</p>`,
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
