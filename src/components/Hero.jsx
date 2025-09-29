import React from 'react';
import heroVision from '../assets/hero_vision.png'; // Using one of the downloaded images

const Hero = () => {
    return (
        <section id="hero" className="relative bg-cover bg-center text-white py-32 md:py-48 flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `linear-gradient(135deg, rgba(30, 60, 114, 0.9) 0%, rgba(42, 82, 152, 0.9) 100%), url(${heroVision})` }}>
            <div className="absolute inset-0 bg-pattern opacity-10 animate-float"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-slideInUp">
                    Vibhavasu Power: Pioneering Clean, Intelligent, and Inclusive Energy Solutions
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 animate-slideInUp delay-300">
                    Our Vision: To be a pioneering force in delivering clean, intelligent, and inclusive energy solutions that empower industries, communities, and future generations. We aspire to create a world where renewable energy is the default, not the alternative—driving economic growth, environmental restoration, and energy independence across all segments of society.
                </p>
                <a href="#contact" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slideInUp delay-600">
                    Get a Free Quote
                </a>
            </div>
        </section>
    );
};

export default Hero;
