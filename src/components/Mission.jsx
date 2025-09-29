import React from 'react';

const Mission = () => {
    return (
        <section id="mission" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Mission</h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    At Vibhavasu, our mission is to:
                    <ul className="list-disc list-inside text-left mx-auto max-w-3xl mt-4 space-y-2">
                        <li>Enable businesses, large housing complexes, and industrial facilities to transition to clean energy with lower costs, higher reliability, and carbon neutrality.</li>
                        <li>Design and deploy customizable solutions using solar, battery storage, hybrid microgrids, and AI-optimized smart grid technologies.</li>
                        <li>Promote inclusive energy models by integrating rural communities, empowering youth and women, and ensuring energy access through microgrids and decentralized systems.</li>
                        <li>Drive innovation through partnerships with academia and industry, turning R&D into scalable commercial solutions.</li>
                        <li>Support our customers not just with energy, but with a platform for sustainability leadership in a net-zero future.</li>
                    </ul>
                </p>
            </div>
        </section>
    );
};

export default Mission;
