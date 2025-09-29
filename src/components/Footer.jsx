import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-12 text-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="footer-section">
                        <h4 className="text-xl font-semibold text-yellow-400 mb-4">About Vibhavasu Power</h4>
                        <p className="text-gray-300 mb-4">Leading the charge in India's renewable energy sector, providing innovative solar solutions for a brighter, sustainable future.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300"><Facebook size={24} /></a>
                            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300"><Twitter size={24} /></a>
                            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300"><Linkedin size={24} /></a>
                            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300"><Instagram size={24} /></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Home</a></li>
                            <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Services</a></li>
                            <li><a href="#showcase" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Projects</a></li>
                            <li><a href="#why-choose-us" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Why Choose Us</a></li>
                            <li><a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Testimonials</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h4>
                        <p className="flex items-center text-gray-300 mb-2"><MapPin size={18} className="text-yellow-400 mr-2" /> 123 Solar Street, Energy City, India</p>
                        <p className="flex items-center text-gray-300 mb-2"><Phone size={18} className="text-yellow-400 mr-2" /> +91 98765 43210</p>
                        <p className="flex items-center text-gray-300"><Mail size={18} className="text-yellow-400 mr-2" /> info@vibhavasupower.com</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-6 text-center">
                    &copy; {new Date().getFullYear()} Vibhavasu Power. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
