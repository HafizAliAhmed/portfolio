import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { siteConfig } from '@/lib/siteConfig';
import { RxGithubLogo } from 'react-icons/rx';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

// Generate dynamic metadata for each project
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | ${siteConfig.name}`,
        description: project.description,
        keywords: [...project.technologies, siteConfig.name, 'project', 'portfolio'],
        openGraph: {
            title: `${project.title} | ${siteConfig.name}`,
            description: project.description,
            url: `${siteConfig.url}/projects/${project.slug}`,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | ${siteConfig.name}`,
            description: project.description,
            images: [project.image],
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    // Structured data for the project
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: `${siteConfig.url}/projects/${project.slug}`,
        image: `${siteConfig.url}${project.image}`,
        author: {
            '@type': 'Person',
            name: siteConfig.author.name,
            url: siteConfig.url,
        },
        keywords: project.technologies.join(', '),
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
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <FiArrowLeft />
                    Back to Projects
                </Link>

                {/* Project Header */}
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-300">{project.description}</p>
                </header>

                {/* Project Image */}
                <div className="mb-12 rounded-lg overflow-hidden border border-[#7042f88b] relative aspect-video">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                    >
                        <FiExternalLink />
                        View Live Demo
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0300145e] border border-[#7042f88b] text-white rounded-lg hover:border-purple-500 transition-colors"
                    >
                        <RxGithubLogo className="text-xl" />
                        View Source Code
                    </a>
                </div>

                {/* Technologies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-gray-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Long Description */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
                    <div className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6">
                        <div className="prose prose-invert max-w-none">
                            {project.longDescription.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* More Projects */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">More Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects
                            .filter((p) => p.slug !== project.slug)
                            .slice(0, 2)
                            .map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/projects/${p.slug}`}
                                    className="group block bg-[#0300145e] border border-[#7042f88b] rounded-lg p-4 hover:border-purple-500 transition-colors"
                                >
                                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                                        {p.description}
                                    </p>
                                </Link>
                            ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
