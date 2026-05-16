import { writeFileSync } from 'fs';
import { join } from 'path';
import { getAllPostSlugs } from '../src/data/blog';
import { getAllProjectSlugs } from '../src/data/projects';
import { getAllSkillSlugs } from '../src/data/skills';
import { siteConfig } from '../src/lib/siteConfig';

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface SitemapEntry {
  path: string;
  changeFrequency: ChangeFreq;
  priority: number;
}

const LAST_MODIFIED = new Date().toISOString();

const entries: SitemapEntry[] = [
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

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const urls = entries
  .map(
    (entry) => `<url>
<loc>${escapeXml(`${siteConfig.url}${entry.path}`)}</loc>
<lastmod>${LAST_MODIFIED}</lastmod>
<changefreq>${entry.changeFrequency}</changefreq>
<priority>${entry.priority}</priority>
</url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outputPath, xml, 'utf8');
console.log(`Wrote ${entries.length} URLs to public/sitemap.xml`);
