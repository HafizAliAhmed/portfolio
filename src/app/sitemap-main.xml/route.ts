import { siteConfig } from '@/lib/siteConfig';

export function GET() {
    return Response.redirect(`${siteConfig.url}/sitemap.xml`, 308);
}
