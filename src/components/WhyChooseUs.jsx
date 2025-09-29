import React from 'react';
import { Award, Leaf, Handshake, IndianRupee } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: Award,
            title: "Proven Expertise",
            description: "Over a decade of experience in delivering high-quality solar and agricultural solutions across India."
        },
        {
            icon: Leaf,
            title: "Sustainable Impact",
            description: "Committed to eco-friendly practices, contributing to a greener and more sustainable future."
        },
        {
            icon: Handshake,
            title: "Customer-Centric Approach",
            description: "We prioritize your needs, offering tailored solutions and exceptional support from start to finish."
        },
        {
            icon: IndianRupee,
            title: "Cost-Effective Solutions",
            description: "Maximize your savings with our efficient and affordable solar energy systems."
        },
    ];

    return (
        <section id="why-choose-us" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Why Choose Vibhavasu Power?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md transition-all duration-300 hover:scale-102 hover:shadow-lg flex items-start space-x-4">
                            <reason.icon size={36} className="text-blue-800 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">{reason.title}</h3>
                                <p className="text-gray-600">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
