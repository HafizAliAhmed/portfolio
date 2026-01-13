import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSkillBySlug, getAllSkillSlugs } from '@/data/skills';
import { getProjectBySlug } from '@/data/projects';
import { siteConfig } from '@/lib/siteConfig';
import { FiArrowLeft } from 'react-icons/fi';

interface PageProps {
    params: Promise<{ skill: string }>;
}

// Generate static params for all skills
export async function generateStaticParams() {
    return getAllSkillSlugs().map((skill) => ({ skill }));
}

// Generate dynamic metadata for each skill
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { skill: skillSlug } = await params;
    const skill = getSkillBySlug(skillSlug);

    if (!skill) {
        return {
            title: 'Skill Not Found',
        };
    }

    return {
        title: `${skill.name} Expert | ${siteConfig.name}`,
        description: `${siteConfig.name} - ${skill.description}. Explore projects and expertise in ${skill.name}.`,
        keywords: [skill.name, siteConfig.name, skill.category, 'developer', 'expert'],
        openGraph: {
            title: `${skill.name} Expert | ${siteConfig.name}`,
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
            card: 'summary',
            title: `${skill.name} Expert | ${siteConfig.name}`,
            description: skill.description,
        },
    };
}

export default async function SkillPage({ params }: PageProps) {
    const { skill: skillSlug } = await params;
    const skill = getSkillBySlug(skillSlug);

    if (!skill) {
        notFound();
    }

    // Get related projects
    const relatedProjects = skill.relatedProjects
        .map((slug) => getProjectBySlug(slug))
        .filter(Boolean);

    // Structured data for the skill
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Thing',
        name: skill.name,
        description: skill.description,
        url: `${siteConfig.url}/skills/${skill.slug}`,
        image: `${siteConfig.url}${skill.icon}`,
    };

    const categoryLabels = {
        ai: 'AI & Machine Learning',
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        fullstack: 'Full Stack Development',
        tools: 'Tools & DevOps',
    };

    return (
        <main className="min-h-screen py-20 px-5 md:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/skills"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <FiArrowLeft />
                    Back to Skills
                </Link>

                {/* Skill Header */}
                <header className="mb-12 flex items-center gap-6">
                    <div className="w-24 h-24 flex-shrink-0 relative">
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <span className="text-sm text-purple-400 uppercase tracking-wide">
                            {categoryLabels[skill.category]}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {skill.name}
                        </h1>
                    </div>
                </header>

                {/* Description */}
                <section className="mb-12">
                    <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6">
                        <p className="text-xl text-gray-300 mb-6">{skill.description}</p>
                        <div className="prose prose-invert max-w-none">
                            {skill.longDescription.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Projects Using {skill.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedProjects.map((project) => (
                                project && (
                                    <Link
                                        key={project.slug}
                                        href={`/projects/${project.slug}`}
                                        className="group block bg-[#0300145e] border border-[#7042f88b] rounded-lg overflow-hidden hover:border-purple-500 transition-colors"
                                    >
                                        <div className="aspect-video relative overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="text-center">
                    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Want to Work Together?
                        </h2>
                        <p className="text-gray-300 mb-6">
                            I&apos;m always excited to discuss new projects and opportunities involving {skill.name}.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/#about"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                            >
                                Learn More About Me
                            </Link>
                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0300145e] border border-[#7042f88b] text-white rounded-lg hover:border-purple-500 transition-colors"
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
