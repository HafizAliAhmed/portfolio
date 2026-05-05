import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';

/**
 * Allow all major search engines AND AI/LLM crawlers.
 *
 * Most personal portfolios block AI bots by default. We do the opposite —
 * we WANT GPTBot, ClaudeBot, PerplexityBot, etc. to read this site so the
 * person and the brand surface in AI-generated answers (AEO / GEO).
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Default — every well-behaved bot
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/admin/'],
            },

            // Search engines
            { userAgent: 'Googlebot', allow: '/' },
            { userAgent: 'Googlebot-Image', allow: '/' },
            { userAgent: 'Bingbot', allow: '/' },
            { userAgent: 'DuckDuckBot', allow: '/' },
            { userAgent: 'YandexBot', allow: '/' },
            { userAgent: 'Baiduspider', allow: '/' },
            { userAgent: 'Slurp', allow: '/' }, // Yahoo

            // AI / LLM crawlers — AEO + GEO
            { userAgent: 'GPTBot', allow: '/' },              // OpenAI training
            { userAgent: 'OAI-SearchBot', allow: '/' },        // OpenAI search index
            { userAgent: 'ChatGPT-User', allow: '/' },         // ChatGPT live browsing
            { userAgent: 'ClaudeBot', allow: '/' },            // Anthropic
            { userAgent: 'Claude-Web', allow: '/' },
            { userAgent: 'anthropic-ai', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },        // Perplexity
            { userAgent: 'Perplexity-User', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },      // Gemini training
            { userAgent: 'Bytespider', allow: '/' },           // ByteDance / Doubao
            { userAgent: 'Applebot', allow: '/' },             // Apple Intelligence
            { userAgent: 'Applebot-Extended', allow: '/' },
            { userAgent: 'CCBot', allow: '/' },                // Common Crawl
            { userAgent: 'meta-externalagent', allow: '/' },   // Meta AI
            { userAgent: 'FacebookBot', allow: '/' },
            { userAgent: 'cohere-ai', allow: '/' },
            { userAgent: 'Diffbot', allow: '/' },
            { userAgent: 'Amazonbot', allow: '/' },
            { userAgent: 'YouBot', allow: '/' },               // You.com
            { userAgent: 'Mistral-AI', allow: '/' },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}
