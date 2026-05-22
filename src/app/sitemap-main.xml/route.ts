import { getAllPostSlugs } from '@/data/blog';
import { getAllProjectSlugs } from '@/data/projects';
import { getAllSkillSlugs } from '@/data/skills';
import { siteConfig } from '@/lib/siteConfig';

export const dynamic = 'force-dynamic';

type ChangeFrequency =
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';

interface SitemapEntry {
    path: string;
    changeFrequency: ChangeFrequency;
    priority: number;
}

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function getSitemapEntries(): SitemapEntry[] {
    return [
        { path: '', changeFrequency: 'weekly', priority: 1 },
        { path: '/projects', changeFrequency: 'weekly', priority: 0.9 },
        { path: '/skills', changeFrequency: 'monthly', priority: 0.9 },
        { path: '/blog', changeFrequency: 'weekly', priority: 0.95 },
        ...getAllProjectSlugs().map((slug) => ({
            path: `/projects/${slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        ...getAllSkillSlugs().map((slug) => ({
            path: `/skills/${slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        ...getAllPostSlugs().map((slug) => ({
            path: `/blog/${slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.85,
        })),
    ];
}

function buildSitemapXml(): string {
    const lastModified = new Date().toISOString();
    const urls = getSitemapEntries()
        .map(
            (entry) => `<url>
<loc>${escapeXml(`${siteConfig.url}${entry.path}`)}</loc>
<lastmod>${lastModified}</lastmod>
<changefreq>${entry.changeFrequency}</changefreq>
<priority>${entry.priority}</priority>
</url>`
        )
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function GET() {
    return new Response(buildSitemapXml(), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
        },
    });
}
