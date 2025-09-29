import React from 'react';
import { Sun, Building, Wind, Zap, Beaker, Leaf } from 'lucide-react';

const BusinessSegments = () => {
    const segments = [
        {
            icon: Sun,
            title: "EPC & Turnkey Solar Projects",
            description: "Full-spectrum Engineering, Procurement, and Construction (EPC) services for both rooftop and ground-mounted solar power systems. Projects tailored for industries, educational institutions, commercial complexes, and hospitals. Includes site assessment, system design, financial modeling, procurement of Tier-1 components, installation, commissioning, and handover. Adheres to MNRE and IEC standards with remote monitoring and O&M options."
        },
        {
            icon: Building,
            title: "Group Captive Solar Parks",
            description: "Development and operation of multi-megawatt solar parks under the Group Captive Model, in which participating industrial consumers invest minimum 26% equity. Enables clients to access open access solar power at reduced landed tariffs (e.g., ₹5.8/unit vs ₹9–10 grid tariff). Benefits include no capex burden, shared transmission infrastructure, and long-term price stability. Ideal for textile, pharma, steel, FMCG, and tech parks."
        },
        {
            icon: Wind,
            title: "Hybrid Renewable Solutions",
            description: "Integration of solar power with other renewable or storage technologies, creating firm, dispatchable energy for critical or round-the-clock applications. Solutions include: Solar + Lithium-ion BESS for peak load shaving and backup; Solar + Biogas for sustainable fuel and base-load power; Solar + Wind for complementary seasonal generation. Applications: hospitals, data centers, food processing units, and remote industries."
        },
        {
            icon: Zap,
            title: "Microgrid & Smart Grid Projects",
            description: "Planning and deployment of localized microgrids and AI-enhanced smart grids for: Rural electrification in villages and tribal areas; Campus energy networks (colleges, hospitals, SEZs); Smart city blocks with EV integration. Features include real-time load balancing, peer-to-peer energy trading, and predictive fault analytics. Enhances grid independence, resilience, and reliability."
        },
        {
            icon: Beaker,
            title: "R&D & Innovation",
            description: "Joint innovation initiatives with UBDTCE Davanagere and other partners focused on next-gen energy technologies: AI & ML algorithms for solar output forecasting, fault prediction, and load optimization; Robotics for solar panel cleaning and O&M; Smart inverter and microgrid controllers for adaptive energy flow; Prototype labs for energy IoT, battery analytics, and green hydrogen integration."
        },
        {
            icon: Leaf,
            title: "Agribusiness & Agri-Energy Solutions",
            description: "Innovative models combining renewable energy with sustainable agriculture for income diversification and rural upliftment. Includes Agrivoltaics, Solar-Powered Irrigation, Cold Storage & Processing Units, Biogas from Agro-Waste, and Farmer Producer Organizations (FPOs) support."
        },
    ];

    return (
        <section id="business-segments" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Core Business Segments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {segments.map((segment, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl flex flex-col items-center text-center">
                            <segment.icon size={48} className="text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">{segment.title}</h3>
                            <p className="text-gray-600 text-sm">{segment.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessSegments;
