import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectsByCategory } from '@/data/projects';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: `Projects | ${siteConfig.name}`,
    description: `Explore projects by ${siteConfig.name} - AI applications, full-stack development, and modern web solutions built with Next.js, React, and Python.`,
    openGraph: {
        title: `Projects | ${siteConfig.name}`,
        description: `Explore projects by ${siteConfig.name} - AI applications, full-stack development, and modern web solutions.`,
        url: `${siteConfig.url}/projects`,
    },
};

export default function ProjectsPage() {
    const fullstackProjects = getProjectsByCategory('fullstack');
    const aiProjects = getProjectsByCategory('ai');

    return (
        <main className="min-h-screen py-20 px-5 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                        My Projects
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        A collection of projects showcasing expertise in AI development, full-stack applications,
                        and modern web technologies. Each project demonstrates practical implementation of cutting-edge tools.
                    </p>
                </div>

                {/* Full Stack Projects */}
                {fullstackProjects.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Full Stack Applications
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {fullstackProjects.map((project) => (
                                <Link
                                    key={project.slug}
                                    href={`/projects/${project.slug}`}
                                    className="group block"
                                >
                                    <article className="bg-[#0300145e] border border-[#7042f88b] rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300 hover:scale-[1.02]">
                                        <div className="aspect-video relative overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded">
                                                        +{project.technologies.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* AI Projects */}
                {aiProjects.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            AI & Machine Learning
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {aiProjects.map((project) => (
                                <Link
                                    key={project.slug}
                                    href={`/projects/${project.slug}`}
                                    className="group block"
                                >
                                    <article className="bg-[#0300145e] border border-[#7042f88b] rounded-lg overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02]">
                                        <div className="aspect-video relative overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-white rounded-lg hover:scale-105 transition-transform"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
