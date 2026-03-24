import aurora from '../assets/aurora.jpg'
import { Link } from 'react-scroll'

function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={aurora} alt="Aurora Borealis, Sweden 2021" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0c0d18 40%, transparent)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #12131d 5%, transparent)' }} />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-12 w-full">
                <div className="max-w-2xl space-y-8">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#70FFAF' }} />
                            <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: '#70FFAF' }} />
                        </span>
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#70FFAF' }}>
                            Cloud Infrastructure Engineer
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-none" style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}>
                        I build things in the cloud to empower people.
                    </h1>
                    <p className="text-lg font-light leading-relaxed" style={{ color: '#bbcabd' }}>
                        Working at the intersection of engineering and design - building infrastructure and automations that make developers' lives easier, and systems that serve people around the world.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            to="work"
                            smooth="easeInOutQuart"
                            duration={600}
                            offset={-80}
                            className="px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
                            style={{ backgroundColor: '#70FFAF', color: '#00391f' }}
                        >
                            View My Work
                        </Link>
                        <a
                            href="https://linkedin.com/in/augustine-chia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:opacity-80"
                            style={{ border: '1.5px solid #9D7CD8', color: '#9D7CD8' }}
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 right-10 text-right opacity-30 hidden lg:block">
                <div className="text-xs tracking-widest uppercase space-y-1" style={{ color: '#F8F8F2' }}>
                    <p>Status: Systems Nominal</p>
                    <p>Region: AP-SOUTHEAST-1</p>
                    <p>Latency: 14ms</p>
                </div>
            </div>
        </section>
    )
}

export default Hero