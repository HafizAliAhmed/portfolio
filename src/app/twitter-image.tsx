// Twitter / X share card — same layout as the Open Graph card.
// Re-exporting the default component, but `runtime`, `alt`, `size`, and
// `contentType` must be declared as literals in this file (Next.js cannot
// resolve them when re-exported through a barrel).

import { siteConfig } from "@/lib/siteConfig";

export { default } from "./opengraph-image";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Co-founder & CEO of Safock`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
