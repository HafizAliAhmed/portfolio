import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/data/blog";
import { siteConfig } from "@/lib/siteConfig";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.author.name],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === post.slug);
  const next = all[idx + 1] ?? all[0];

  return (
    <main className="bg-bg text-text-primary">
      {/* Header */}
      <article className="relative pt-32 pb-20 lg:pt-40 overflow-hidden bg-noise">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />

        <div className="relative max-w-prose-blog mx-auto px-5 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
            All posts
          </Link>

          <div className="mt-10 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
            <span className="tag tag-accent">{post.category}</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="w-1 h-1 rounded-full bg-text-faint" />
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-6 display-h1 text-balance">{post.title}</h1>

          <p className="mt-7 lead">{post.excerpt}</p>

          <div className="mt-10 flex items-center gap-3 pt-6 border-t border-border">
            <div className="w-9 h-9 rounded-full bg-accent text-on-accent font-display italic flex items-center justify-center">
              <span className="-mt-0.5 text-lg">h.</span>
            </div>
            <div>
              <div className="text-sm font-medium text-text-primary">
                {siteConfig.author.name}
              </div>
              <div className="text-xs text-text-muted">
                {siteConfig.author.jobTitle}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Body */}
      <section className="border-t border-border">
        <div className="max-w-prose-blog mx-auto px-5 lg:px-8 py-16">
          {post.content ? (
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div className="prose-blog">
              <p>{post.excerpt}</p>
              <p className="text-text-muted">
                Full essay coming soon. Subscribe via{" "}
                <Link href={siteConfig.social.medium} target="_blank" rel="noopener noreferrer">
                  Medium
                </Link>{" "}
                or{" "}
                <Link href={siteConfig.social.twitterUrl} target="_blank" rel="noopener noreferrer">
                  X
                </Link>{" "}
                to be notified when it&apos;s live.
              </p>
            </div>
          )}

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="tag">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Next post */}
      {next && next.slug !== post.slug && (
        <section className="border-t border-border">
          <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
            <div className="eyebrow">
              <span className="dot" /> Up next
            </div>
            <Link
              href={`/blog/${next.slug}`}
              className="card-feature group mt-6 block p-7 lg:p-10"
            >
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.14em] text-text-muted">
                <span className="tag tag-accent">{next.category}</span>
                <span>{next.readTime}</span>
              </div>
              <h3 className="mt-4 text-2xl lg:text-3xl font-medium tracking-tight text-text-primary group-hover:text-accent transition-colors">
                {next.title}
              </h3>
              <p className="mt-3 text-text-secondary line-clamp-2">
                {next.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-text-primary">
                Read next
                <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
              </div>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
