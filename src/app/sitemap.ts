import { MetadataRoute } from 'next';
import { getAllProjectSlugs } from '@/data/projects';
import { getAllSkillSlugs } from '@/data/skills';
import { getAllPostSlugs } from '@/data/blog';
import { siteConfig } from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const skillPages: MetadataRoute.Sitemap = getAllSkillSlugs().map((slug) => ({
    url: `${baseUrl}/skills/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...projectPages, ...skillPages, ...blogPages];
}
