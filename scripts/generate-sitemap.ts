import { writeFileSync } from 'fs';
import { join } from 'path';
import { getAllPostSlugs } from '../src/data/blog';
import { getAllProjectSlugs } from '../src/data/projects';
import { getAllSkillSlugs } from '../src/data/skills';
import { siteConfig } from '../src/lib/siteConfig';

interface SitemapEntry {
  path: string;
}

const entries: SitemapEntry[] = [
  { path: '' },
  { path: '/projects' },
  { path: '/skills' },
  { path: '/blog' },
  ...getAllProjectSlugs().map((slug) => ({ path: `/projects/${slug}` })),
  ...getAllSkillSlugs().map((slug) => ({ path: `/skills/${slug}` })),
  ...getAllPostSlugs().map((slug) => ({ path: `/blog/${slug}` })),
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
</url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const text = entries
  .map((entry) => `${siteConfig.url}${entry.path}`)
  .join('\n');

const xmlOutputPath = join(process.cwd(), 'public', 'sitemap.xml');
const textOutputPath = join(process.cwd(), 'public', 'sitemap.txt');

writeFileSync(xmlOutputPath, xml, 'utf8');
writeFileSync(textOutputPath, `${text}\n`, 'utf8');

console.log(`Wrote ${entries.length} URLs to public/sitemap.xml and public/sitemap.txt`);
