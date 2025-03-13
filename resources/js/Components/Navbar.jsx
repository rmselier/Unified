import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'venue', 'tickets', 'hotel', 'contact'];

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="navbar fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    {/* Mobiele menu knop */}
                    <button
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <ul className="menu menu-sm dropdown-content bg-pink-400 text-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                            <li>
                                <details>
                                    <summary className="hover:text-gray-300">Services</summary>
                                </details>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Navbar Center - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-yellow-600">
                    {['home', 'about', 'venue', 'tickets', 'hotel', 'contact'].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={`hover:text-red-700 ${
                                    activeSection === section ? 'text-red-700 font-bold' : ''
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                {/*<a href="#contact" className="btn bg-white text-pink-600 hover:bg-gray-300">Get in Touch</a>*/}
            </div>
        </div>
    );
}
