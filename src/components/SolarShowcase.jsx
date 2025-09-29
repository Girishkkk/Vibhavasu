import React from 'react';
import solarPanelCleaning from '../assets/solar_panel_cleaning.jpg';
import sustainableAgriculture from '../assets/sustainable_agriculture.jpg';
import solarFarm from '../assets/solar_farm.jpg';

const SolarShowcase = () => {
    const projects = [
        {
            image: solarPanelCleaning,
            title: "Residential Rooftop Solar",
            description: "Installed a 10kW rooftop solar system for a residence in Jaipur, significantly reducing their electricity bills.",
            badges: ["On-Grid", "10kW"]
        },
        {
            image: sustainableAgriculture,
            title: "Agricultural Solar Pump Project",
            description: "Implemented solar-powered irrigation for a 50-acre farm in rural Rajasthan, ensuring consistent water supply.",
            badges: ["Off-Grid", "5HP Pump"]
        },
        {
            image: solarFarm,
            title: "Industrial Solar Power Plant",
            description: "Designed and installed a 500kW solar plant for a manufacturing unit in Gujarat, meeting 70% of their energy needs.",
            badges: ["Grid-Tied", "500kW"]
        },
    ];

    return (
        <section id="showcase" className="py-20 bg-gradient-to-br from-gray-50 to-blue-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Solar Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl">
                            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-blue-800 mb-2">{project.title}</h4>
                                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.badges.map((badge, badgeIndex) => (
                                        <span key={badgeIndex} className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolarShowcase;
