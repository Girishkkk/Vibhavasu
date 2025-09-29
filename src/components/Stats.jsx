import React from 'react';

const Stats = () => {
    return (
        <section id="stats" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="text-5xl font-bold text-blue-800 mb-2">10+</div>
                        <div className="text-lg text-gray-600">Years in Business</div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="text-5xl font-bold text-blue-800 mb-2">500+</div>
                        <div className="text-lg text-gray-600">Projects Completed</div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="text-5xl font-bold text-blue-800 mb-2">20MW+</div>
                        <div className="text-lg text-gray-600">Solar Capacity Installed</div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="text-5xl font-bold text-blue-800 mb-2">100%</div>
                        <div className="text-lg text-gray-600">Customer Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
