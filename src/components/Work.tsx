const projects = [
    {
        category: 'Cloud Infrastructure',
        title: 'AWS Central Logging Using Amazon Security Lake',
        description:
            'Deployed Amazon Security Lake across multiple AWS Organizations, regions, and accounts using Terraform, resulting in 47% infrastructure cost reduction. Led development of self-service CloudFormation templates enabling teams to query log data with a single click.',
        tags: ['Terraform', 'AWS', 'CI/CD', 'Security'],
        reInvent: 'Presented at AWS re:Invent 2025 — SEC347',
        link: null,
    },
    {
        category: 'Developer Experience',
        title: 'Self-Service Infrastructure Provisioner',
        description:
            'Built a personal project to help developers provision infrastructure through API calls. Instead of knowing which Terraform modules to use, developers call an API with their specifications and compliant Terraform modules automatically provisions the infrastructure for them.',
        tags: ['Terraform', 'Python', 'API', 'Developer Experience'],
        reInvent: null,
        link: 'https://github.com/augustinechiajh/infra-provisioner-mockup',
    },
    {
        category: 'Learning by Experimentation',
        title: 'Portfolio Site Revamp',
        description:
            'Rebuilt my portfolio to experience AI-assisted development first hand, using Google Stitch for design prototyping, Claude Code with spec-driven development, and React + TypeScript replacing a previous Hugo template.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Google Stitch', 'Claude Code'],
        reInvent: null,
        link: 'https://github.com/augustinechiajh/portfolio-v2',
    },
]

function Work() {
    return (
        <section
            id="work"
            style={{ backgroundColor: '#1a1b26' }}
            className="py-32 px-12"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <div className="mb-16">
                    <p
                        className="text-sm font-bold tracking-widest uppercase mb-4"
                        style={{ color: '#70FFAF', fontFamily: 'Plus Jakarta Sans' }}
                    >
                        Work
                    </p>
                    <h2
                        className="text-4xl font-bold leading-none"
                        style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}
                    >
                        Things I've shipped.
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group relative flex flex-col rounded-xl p-8 transition-transform duration-300 hover:-translate-y-1"
                            style={{ backgroundColor: '#12131d' }}
                        >
                            {/* Category label */}
                            <p
                                className="text-xs font-bold tracking-widest uppercase mb-5"
                                style={{ color: '#70FFAF', fontFamily: 'Plus Jakarta Sans' }}
                            >
                                {project.category}
                            </p>

                            {/* Title */}
                            <h3
                                className="text-xl font-bold leading-snug mb-4"
                                style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}
                            >
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-sm leading-relaxed mb-6 flex-1"
                                style={{ color: '#bbcabd', fontFamily: 'Inter' }}
                            >
                                {project.description}
                            </p>

                            {/* re:Invent badge */}
                            {project.reInvent && (
                                <div
                                    className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg"
                                    style={{ backgroundColor: 'rgba(112,255,175,0.08)' }}
                                >
                                    <span
                                        className="text-xs font-bold tracking-wide"
                                        style={{ color: '#70FFAF', fontFamily: 'Plus Jakarta Sans' }}
                                    >
                                        {project.reInvent}
                                    </span>
                                </div>
                            )}

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                                        style={{
                                            color: '#9D7CD8',
                                            border: '1.5px solid #9D7CD8',
                                            fontFamily: 'Plus Jakarta Sans',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold transition-opacity duration-200 hover:opacity-70"
                                    style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}
                                >
                                    View on GitHub
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                        <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work
