import React from 'react';
import { University, Factory, Package, Landmark } from 'lucide-react';

const KeyPartnerships = () => {
    const partnerships = [
        {
            icon: University,
            type: "Academic",
            entities: "UBDTCE /GMIT Davanagere",
            contributions: "Academic collaboration for the AI & Robotics Energy Lab focused on energy optimization, predictive maintenance, and automation. Co-developing tools for smart microgrids, energy analytics, and solar-bio hybrid models. Providing trained manpower, research outputs, and joint IP development."
        },
        {
            icon: Factory,
            type: "Technology & Implementation",
            entities: "BHEL (Bharat Heavy Electricals Ltd)",
            contributions: "Strategic partner for large-scale project execution across solar, wind, hydro, thermal, and nuclear. Capabilities in substation, transmission line, and infrastructure development. Support for battery energy storage, green hydrogen, and smart grid pilot deployments for Vibhavasu’s utility and microgrid projects."
        },
        {
            icon: Package,
            type: "Technical Vendors",
            entities: "Tier-1 equipment manufacturers",
            contributions: "Solar Modules: LONGi, Trina, Vikram, Waaree. Inverters: Sungrow, SMA, Huawei, Schneider Electric. Batteries: Amara Raja, Exide, Panasonic, Envision (Li-ion & LFP chemistries). Transformers: KPTCL-approved & BIS-certified vendors like Voltamp Transformers, CGL, Urja Techniques, and Techno Electric. Vendor network enables fast procurement, compliance, and lifecycle maintenance."
        },
        {
            icon: Landmark,
            type: "Financial Institutions",
            entities: "PFC, IREDA, REC, and leading private banks/NBFCs",
            contributions: "Engagement for project funding, capex leasing, and green financing. Structuring SPV-level debt, Group Captive equity pooling, and working capital lines. Exploring green bonds, carbon credit monetization, and PPP models for community-based solar or microgrid projects."
        },
        {
            icon: Landmark,
            type: "Government & Regulatory",
            entities: "MNRE, SECI, DISCOMs, State Electricity Boards, SERCs",
            contributions: "Coordination for policy compliance, capital subsidies, national RE missions, tenders, pilot programs, grid integration, open access, net metering approvals, tariff approvals, and energy accounting."
        },
    ];

    return (
        <section id="key-partnerships" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Key Partnerships</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partnerships.map((partner, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                <partner.icon size={36} className="text-blue-600 mr-4" />
                                <h3 className="text-xl font-semibold text-blue-800">{partner.type}</h3>
                            </div>
                            <p className="text-gray-600 mb-2"><strong>Entities:</strong> {partner.entities}</p>
                            <p className="text-gray-600 text-sm"><strong>Contributions:</strong> {partner.contributions}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyPartnerships;
