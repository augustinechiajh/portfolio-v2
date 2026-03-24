import { useState } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Work', to: 'work' },
    { label: 'Certs', to: 'certs' },
]

function Nav() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl"
            style={{ backgroundColor: 'rgba(18, 19, 29, 0.8)' }}>
            <div className="flex justify-between items-center px-12 py-6 max-w-7xl mx-auto">

                <div className="text-xl font-bold" style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}>
                    Augustine
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            spy={true}
                            hashSpy={true}
                            isDynamic={true}
                            smooth="easeInOutQuart"
                            duration={600}
                            offset={-80}
                            className="text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:opacity-100 opacity-60 cursor-pointer"
                            style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}
                            activeStyle={{ color: '#70FFAF', opacity: 1 }}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                    onClick={() => setOpen(prev => !prev)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                >
                    <span
                        className="block w-6 h-0.5 transition-all duration-300 origin-center"
                        style={{
                            backgroundColor: '#F8F8F2',
                            transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
                        }}
                    />
                    <span
                        className="block w-6 h-0.5 transition-all duration-300"
                        style={{
                            backgroundColor: '#F8F8F2',
                            opacity: open ? 0 : 1,
                        }}
                    />
                    <span
                        className="block w-6 h-0.5 transition-all duration-300 origin-center"
                        style={{
                            backgroundColor: '#F8F8F2',
                            transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
                        }}
                    />
                </button>
            </div>

            {/* Mobile dropdown */}
            <div
                className="md:hidden overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: open ? '300px' : '0',
                    backgroundColor: 'rgba(18, 19, 29, 0.97)',
                }}
            >
                <div className="flex flex-col px-12 pb-8 pt-2 gap-6">
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            spy={true}
                            hashSpy={true}
                            isDynamic={true}
                            smooth="easeInOutQuart"
                            duration={600}
                            offset={-80}
                            className="text-sm font-bold tracking-widest uppercase opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer"
                            style={{ color: '#F8F8F2', fontFamily: 'Plus Jakarta Sans' }}
                            activeStyle={{ color: '#70FFAF', opacity: 1 }}
                            onClick={() => setOpen(false)}
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
