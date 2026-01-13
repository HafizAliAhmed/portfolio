import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { skills, getSkillsByCategory } from '@/data/skills';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: `Skills & Technologies | ${siteConfig.name}`,
    description: `Technical skills and expertise of ${siteConfig.name} - AI development with LangChain and OpenAI, full-stack development with Next.js and React, and modern backend technologies.`,
    openGraph: {
        title: `Skills & Technologies | ${siteConfig.name}`,
        description: `Technical skills and expertise of ${siteConfig.name} - AI, full-stack, and backend development.`,
        url: `${siteConfig.url}/skills`,
    },
};

function SkillCard({ skill }: { skill: typeof skills[0] }) {
    return (
        <Link
            href={`/skills/${skill.slug}`}
            className="group block"
        >
            <article className="bg-[#0300145e] border border-[#7042f88b] rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 relative flex-shrink-0">
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {skill.name}
                    </h3>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">
                    {skill.description}
                </p>
            </article>
        </Link>
    );
}

export default function SkillsPage() {
    const aiSkills = getSkillsByCategory('ai');
    const frontendSkills = getSkillsByCategory('frontend');
    const backendSkills = getSkillsByCategory('backend');
    const fullstackSkills = getSkillsByCategory('fullstack');
    const toolsSkills = getSkillsByCategory('tools');

    return (
        <main className="min-h-screen py-20 px-5 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                        Skills & Technologies
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        A comprehensive overview of technologies and tools I use to build
                        intelligent AI systems and modern web applications.
                    </p>
                </div>

                {/* AI Skills - Featured */}
                {aiSkills.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            🤖 AI & Machine Learning
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {aiSkills.map((skill) => (
                                <SkillCard key={skill.slug} skill={skill} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Full Stack Skills */}
                {fullstackSkills.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            🔧 Full Stack Development
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {fullstackSkills.map((skill) => (
                                <SkillCard key={skill.slug} skill={skill} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Frontend Skills */}
                {frontendSkills.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            🎨 Frontend Technologies
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {frontendSkills.map((skill) => (
                                <SkillCard key={skill.slug} skill={skill} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Backend Skills */}
                {backendSkills.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            ⚙️ Backend & APIs
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {backendSkills.map((skill) => (
                                <SkillCard key={skill.slug} skill={skill} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Tools */}
                {toolsSkills.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            🛠️ Tools & DevOps
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {toolsSkills.map((skill) => (
                                <SkillCard key={skill.slug} skill={skill} />
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
