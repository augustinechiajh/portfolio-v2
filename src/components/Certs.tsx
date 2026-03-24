import AWSDevOpsPro from '../assets/AWSDevOpsPro.png'
import AWSSAPro from '../assets/AWSSAPro.png'
import HCTA003 from '../assets/HCTA-003.png'

const certs = [
    {
        name: 'AWS Certified DevOps Engineer - Professional',
        issuer: 'Amazon Web Services',
        validity: 'Nov 2025 - Nov 2028',
        description: 'Validates expertise in automating CI/CD pipelines, managing infrastructure as code, and implementing secure, resilient systems on AWS.',
        url: 'https://www.credly.com/badges/c4203b0a-6ffa-4836-a879-2771e1c409dd',
        badge: AWSDevOpsPro,
        tags: ['CI/CD', 'IaC', 'Monitoring', 'Security', 'Automation'],
    },
    {
        name: 'AWS Certified Solutions Architect - Professional',
        issuer: 'Amazon Web Services',
        validity: 'Aug 2025 - Aug 2028',
        description: 'Validates expertise in designing scalable AWS architectures, optimizing existing solutions, and leading complex multi-account migrations.',
        url: 'https://www.credly.com/badges/f927ea8a-f173-462f-b24d-9df326d6e2da',
        badge: AWSSAPro,
        tags: ['Cloud Architecture', 'Multi-Account', 'Cost Optimisation', 'Migration'],
    },
    {
        name: 'HashiCorp Certified: Terraform Associate (003)',
        issuer: 'HashiCorp',
        validity: 'Mar 2025 - Mar 2027',
        description: 'Validates foundational knowledge of Terraform, including infrastructure as code concepts, and best practices for managing infrastructure.',
        url: 'https://www.credly.com/badges/a41a3731-355d-4180-8a32-66e7602818a3',
        badge: HCTA003,
        tags: ['Terraform', 'IaC', 'Provisioning', 'Automation'],
    },
]

function Certs() {
    return (
        <section
            id="certs"
            style={{ backgroundColor: '#12131d' }}
            className="py-32 px-12"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <div className="mb-16">
                    <p
                        className="text-sm font-bold tracking-widest uppercase mb-4"
                        style={{ color: '#70FFAF', fontFamily: 'Plus Jakarta Sans' }}
                    >
                        Certifications
                    </p>
                    <h2
                        className="text-4xl font-bold leading-none"
                        style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}
                    >
                        Credentials that back the work.
                    </h2>
                </div>

                {/* Certs grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certs.map((cert) => (
                        <div
                            key={cert.name}
                            className="group flex flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-2"
                            style={{ backgroundColor: '#1a1b26' }}
                        >
                            {/* Top row: badge + details */}
                            <div className="flex gap-5 mb-5">
                                <img
                                    src={cert.badge}
                                    alt={cert.name}
                                    className="w-20 h-20 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="flex flex-col justify-center min-w-0">
                                    <h3
                                        className="text-base font-bold leading-snug mb-1"
                                        style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}
                                    >
                                        {cert.name}
                                    </h3>
                                    <p
                                        className="text-xs font-bold tracking-widest uppercase mb-1"
                                        style={{ color: '#70FFAF', fontFamily: 'Plus Jakarta Sans' }}
                                    >
                                        {cert.issuer}
                                    </p>
                                    <p
                                        className="text-xs"
                                        style={{ color: '#bbcabd', fontFamily: 'Inter' }}
                                    >
                                        {cert.validity}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p
                                className="text-sm leading-relaxed mb-5 flex-1"
                                style={{ color: '#bbcabd', fontFamily: 'Inter' }}
                            >
                                {cert.description}
                            </p>

                            {/* Skill tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {cert.tags.map((tag) => (
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

                            {/* Verify link */}
                            <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-opacity duration-200 hover:opacity-70 self-start"
                                style={{ color: '#9D7CD8', fontFamily: 'Plus Jakarta Sans' }}
                            >
                                Verify on Credly
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <path d="M1.5 10.5L10.5 1.5M10.5 1.5H4.5M10.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Certs
