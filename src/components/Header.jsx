import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        setMenuOpen(false);
    };

    return (
        <header className={`fixed w-full top-0 z-1000 backdrop-filter backdrop-blur-lg transition-all duration-300 ${scrolled ? 'bg-blue-900 bg-opacity-95 py-2' : 'bg-blue-900 bg-opacity-80 py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">Vibhavasu Power</div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#hero" onClick={(e) => handleNavLinkClick(e, '#hero')} className="text-white hover:text-yellow-400 transition-colors duration-300">Home</a>
                    <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className="text-white hover:text-yellow-400 transition-colors duration-300">Services</a>
                    <a href="#showcase" onClick={(e) => handleNavLinkClick(e, '#showcase')} className="text-white hover:text-yellow-400 transition-colors duration-300">Projects</a>
                    <a href="#why-choose-us" onClick={(e) => handleNavLinkClick(e, '#why-choose-us')} className="text-white hover:text-yellow-400 transition-colors duration-300">Why Us</a>
                    <a href="#testimonials" onClick={(e) => handleNavLinkClick(e, '#testimonials')} className="text-white hover:text-yellow-400 transition-colors duration-300">Testimonials</a>
                    <a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')} className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</a>
                </nav>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <nav className="md:hidden bg-blue-900 bg-opacity-95 py-4">
                    <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
                        <a href="#hero" onClick={(e) => handleNavLinkClick(e, '#hero')} className="text-white hover:text-yellow-400 transition-colors duration-300">Home</a>
                        <a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className="text-white hover:text-yellow-400 transition-colors duration-300">Services</a>
                        <a href="#showcase" onClick={(e) => handleNavLinkClick(e, '#showcase')} className="text-white hover:text-yellow-400 transition-colors duration-300">Projects</a>
                        <a href="#why-choose-us" onClick={(e) => handleNavLinkClick(e, '#why-choose-us')} className="text-white hover:text-yellow-400 transition-colors duration-300">Why Us</a>
                        <a href="#testimonials" onClick={(e) => handleNavLinkClick(e, '#testimonials')} className="text-white hover:text-yellow-400 transition-colors duration-300">Testimonials</a>
                        <a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')} className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
