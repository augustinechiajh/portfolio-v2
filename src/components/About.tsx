import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

function About() {
    return (
        <section id="about" className="py-32 px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left — text */}
                <motion.div
                    className="space-y-6"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className="text-sm font-bold tracking-widest uppercase"
                        style={{ color: '#70FFAF', fontFamily: 'Plus Jakarta Sans' }}>
                        About Me
                    </p>
                    <h2 className="text-4xl font-bold leading-tight"
                        style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}>
                        Engineer by training,<br />designer at heart.
                    </h2>
                    <p className="text-base leading-relaxed"
                        style={{ color: '#bbcabd', fontFamily: 'Inter' }}>
                        I'm Augustine, a Cloud/DevOps Engineer at MSD Singapore. I graduated from NUS with a degree in Biomedical Engineering and a second major in Innovation & Design. Design thinking methodologies and user-centric design principles are core to how I approach engineering problems.
                    </p>
                    <p className="text-base leading-relaxed"
                        style={{ color: '#bbcabd', fontFamily: 'Inter' }}>
                        In 2021, I spent three months in Sweden on the NUS Overseas Colleges programme studying entrepreneurship at KTH and interning at a medtech start-up. COVID cut the year short, but on one of those dark winter nights I witnessed an aurora borealis for the first time. Capturing that special moment became the central theme of this portfolio website.
                    </p>
                    <p className="text-base leading-relaxed"
                        style={{ color: '#bbcabd', fontFamily: 'Inter' }}>
                        These days I build cloud infrastructure at scale, most notably an Amazon Security Lake solution spanning across multiple accounts and regions, work that was featured at AWS re:Invent 2025. When I'm not shipping infrastructure, I'm training for triathlons, recording music, or capturing landscapes through photos.
                    </p>
                </motion.div>

                {/* Right — quick facts */}
                <motion.div
                    className="space-y-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                >
                    {[
                        { label: 'Based in', value: 'Singapore' },
                        { label: 'Current role', value: 'Cloud/DevOps Engineer, MSD' },
                        { label: 'Education', value: 'BEng Biomedical Engineering, NUS' },
                        { label: 'Certifications', value: 'AWS Solutions Architect Professional, AWS DevOps Professional, Terraform Associate' },
                        { label: 'Outside work', value: 'Triathlon · Music · Photography' },
                    ].map((fact) => (
                        <div key={fact.label} className="flex flex-col py-4"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                            <span className="text-xs font-bold tracking-widest uppercase mb-1"
                                style={{ color: '#70FFAF', fontFamily: 'Plus Jakarta Sans' }}>
                                {fact.label}
                            </span>
                            <span className="text-base"
                                style={{ color: '#F8F8F2', fontFamily: 'Inter' }}>
                                {fact.value}
                            </span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default About
