import { getAllPosts } from '@/data/blog';
import { siteConfig } from '@/lib/siteConfig';

export const dynamic = 'force-static';

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export function GET() {
    const posts = getAllPosts();
    const items = posts
        .map((post) => {
            const url = `${siteConfig.url}/blog/${post.slug}`;

            return `<item>
<title>${escapeXml(post.title)}</title>
<link>${escapeXml(url)}</link>
<guid isPermaLink="true">${escapeXml(url)}</guid>
<pubDate>${new Date(`${post.date}T00:00:00.000Z`).toUTCString()}</pubDate>
<description>${escapeXml(post.excerpt)}</description>
${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('\n')}
</item>`;
        })
        .join('\n');

    const latestPostDate = posts[0]?.date ?? '2026-01-01';
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escapeXml(`${siteConfig.name} - Writing`)}</title>
<link>${escapeXml(`${siteConfig.url}/blog`)}</link>
<description>${escapeXml(siteConfig.description)}</description>
<language>en-us</language>
<lastBuildDate>${new Date(`${latestPostDate}T00:00:00.000Z`).toUTCString()}</lastBuildDate>
<atom:link href="${escapeXml(`${siteConfig.url}/rss.xml`)}" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
