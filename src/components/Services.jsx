import React from 'react';
import { Sun, Droplets, Building, Lightbulb, Battery, TrendingUp } from 'lucide-react';
import servicesImage from '../assets/services_image.png'; // Import the new image

const Services = () => {
    const backgroundStyle = {
        backgroundImage: `url(${servicesImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.1, // Adjust opacity as needed
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    };
    const serviceItems = [
        {
            icon: Sun,
            title: "Solar Panel Installation",
            description: "Expert installation of high-efficiency solar panels for homes, businesses, and farms."
        },
        {
            icon: Droplets,
            title: "Solar Water Pumps",
            description: "Sustainable irrigation solutions for agriculture, reducing dependency on grid power."
        },
        {
            icon: Building,
            title: "Industrial Solar Solutions",
            description: "Customized solar solutions for industrial complexes, optimizing energy consumption."
        },
        {
            icon: Lightbulb,
            title: "Solar Street Lighting",
            description: "Eco-friendly and cost-effective street lighting solutions for urban and rural areas."
        },
        {
            icon: Battery,
            title: "Energy Storage Systems",
            description: "Advanced battery storage solutions to ensure uninterrupted power supply."
        },
        {
            icon: TrendingUp,
            title: "Consultation & Maintenance",
            description: "Comprehensive consultation and ongoing maintenance for optimal solar performance."
        },
    ];

    return (
        <section id="services" className="relative py-20 bg-white overflow-hidden">
            <div style={backgroundStyle}></div>
            <div className="relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceItems.map((service, index) => (
                        <div key={index} className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-2xl text-center overflow-hidden shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl group">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            <service.icon size={48} className="mx-auto mb-4 text-yellow-400 group-hover:rotate-6 transition-transform duration-300" />
                            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-100">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
};

export default Services;
