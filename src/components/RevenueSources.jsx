import React from 'react';
import { DollarSign, FileText, Wrench, Battery, Lightbulb, Beaker } from 'lucide-react';

const RevenueSources = () => {
    const revenueItems = [
        {
            icon: DollarSign,
            title: "Power Sales (PPA)",
            description: "Core recurring revenue from long-term Power Purchase Agreements (PPAs) with industrial consumers, commercial enterprises, or institutions under group captive or RESCO models. Provides clean solar energy at competitive rates, ensuring steady cash flow over 10-25 years."
        },
        {
            icon: FileText,
            title: "EPC Contracts",
            description: "One-time revenues from Engineering, Procurement, and Construction (EPC) contracts for solar projects. Covers end-to-end project delivery including design, sourcing, and installation for rooftop and ground-mounted systems for various clients."
        },
        {
            icon: Wrench,
            title: "O&M Services",
            description: "Recurring revenue from annual Operation and Maintenance (O&M) contracts. Ensures optimal system performance through preventive maintenance, corrective repairs, monitoring, and upgrades for solar panels, BESS, and microgrids."
        },
        {
            icon: Battery,
            title: "Battery Energy Storage Systems (BESS)",
            description: "Deployment, leasing, and integration of lithium-ion battery storage solutions for peak load shaving, load shifting, grid stability, and backup power. Offers flexible business models like sales, leasing, or energy-as-a-service."
        },
        {
            icon: Lightbulb,
            title: "Consulting & Feasibility Studies",
            description: "Specialized consulting services including Detailed Project Reports (DPRs), feasibility analyses, site assessments, and policy advisory for renewable energy projects. Targets government agencies, public institutions, and private developers."
        },
        {
            icon: Beaker,
            title: "R&D Commercialization",
            description: "Development and licensing of advanced AI-driven tools and automation technologies for energy optimization, predictive maintenance, and smart grid management through academic partnerships and internal innovation."
        },
    ];

    return (
        <section id="revenue-sources" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Revenue Sources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {revenueItems.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl flex flex-col items-center text-center">
                            <item.icon size={48} className="text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RevenueSources;
