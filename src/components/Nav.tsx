import { Link } from 'react-scroll'

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Work', to: 'work' },
    { label: 'Certs', to: 'certs' },
]

function Nav() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl"
            style={{ backgroundColor: 'rgba(18, 19, 29, 0.8)' }}>
            <div className="flex justify-between items-center px-12 py-6 max-w-7xl mx-auto">

                <div className="text-xl font-bold" style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}>
                    Augustine
                </div>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            smooth="easeInOutQuart"
                            duration={600}
                            offset={-80}
                            className="text-sm font-bold tracking-widest uppercase transition-opacity duration-200 hover:opacity-100 opacity-60 cursor-pointer"
                            style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Nav
