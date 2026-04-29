import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { getSkillBySlug, getAllSkillSlugs } from "@/data/skills";
import { getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/lib/siteConfig";

interface PageProps {
  params: Promise<{ skill: string }>;
}

export async function generateStaticParams() {
  return getAllSkillSlugs().map((skill) => ({ skill }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { skill: skillSlug } = await params;
  const skill = getSkillBySlug(skillSlug);
  if (!skill) return { title: "Skill Not Found" };

  return {
    title: `${skill.name} | ${siteConfig.name}`,
    description: `${siteConfig.name}. ${skill.description}.`,
    keywords: [skill.name, siteConfig.name, skill.category, "developer", "expert"],
    alternates: { canonical: `${siteConfig.url}/skills/${skill.slug}` },
    openGraph: {
      title: `${skill.name} | ${siteConfig.name}`,
      description: skill.description,
      url: `${siteConfig.url}/skills/${skill.slug}`,
      images: [
        {
          url: skill.icon,
          width: 200,
          height: 200,
          alt: skill.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${skill.name} | ${siteConfig.name}`,
      description: skill.description,
    },
  };
}

const categoryLabels = {
  ai: "AI & Machine Learning",
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Full Stack",
  tools: "Tools & DevOps",
} as const;

export default async function SkillPage({ params }: PageProps) {
  const { skill: skillSlug } = await params;
  const skill = getSkillBySlug(skillSlug);
  if (!skill) notFound();

  const relatedProjects = skill.relatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Thing",
    name: skill.name,
    description: skill.description,
    url: `${siteConfig.url}/skills/${skill.slug}`,
    image: `${siteConfig.url}${skill.icon}`,
  };

  return (
    <main className="bg-bg text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <section className="relative pt-32 pb-12 lg:pt-40 overflow-hidden bg-noise">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />

        <div className="relative max-w-container mx-auto px-5 lg:px-8">
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
            All skills
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative flex-shrink-0 rounded-md bg-bg-elevated border border-border p-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <span className="tag tag-accent">
                  {categoryLabels[skill.category]}
                </span>
                <h1 className="mt-3 display-h1 text-balance">{skill.name}</h1>
              </div>
            </div>
            <p className="mt-6 lead">{skill.description}</p>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="border-t border-border">
        <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="eyebrow">
                <span className="dot" /> Overview
              </div>
              <h2 className="mt-5 display-h3">
                How I use{" "}
                <span className="display-italic text-text-secondary">{skill.name}</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="prose-blog">
                {skill.longDescription.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
            <div className="eyebrow">
              <span className="dot" /> Used in
            </div>
            <h2 className="mt-5 display-h3">
              Projects with{" "}
              <span className="display-italic text-text-secondary">{skill.name}</span>
            </h2>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {relatedProjects.map(
                (project) =>
                  project && (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="card-feature group block p-0 overflow-hidden"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-medium tracking-tight text-text-primary group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-container mx-auto px-5 lg:px-8 py-16">
          <div className="rounded-lg border border-border bg-bg-card p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <div className="display-h3">
                Building with{" "}
                <span className="display-italic text-accent">{skill.name}?</span>
              </div>
              <p className="mt-3 text-text-secondary leading-relaxed max-w-xl">
                I&apos;m always open to working on serious projects involving {skill.name}.
                Send a quick note. I&apos;ll reply in 24 hours.
              </p>
            </div>
            <Link href={siteConfig.bookingUrl} className="btn-primary">
              Start a conversation
              <ArrowUpRight className="w-4 h-4 btn-icon-arrow" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
