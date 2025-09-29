import React from 'react';
import { Factory, HeartPulse, GraduationCap, Tent, Building, Home, Leaf } from 'lucide-react';

const TargetMarkets = () => {
    const markets = [
        {
            icon: Factory,
            title: "Industrial Estates",
            examples: "Textile, pharma, automotive, FMCG, steel sectors, SEZs, and MSMEs.",
            needs: "High power costs, need for clean energy, predictable tariffs, ESG compliance pressure, and improved reliability.",
            solution: "Group Captive Solar Parks offering power at ₹5.80/kWh (vs ₹8–₹10 grid rates), BESS for load shifting, and digital dashboards for energy monitoring."
        },
        {
            icon: HeartPulse,
            title: "Healthcare Sector",
            examples: "Private and public hospitals (e.g., Rainbow Children's Hospital, multispecialty clinics, diagnostics labs).",
            needs: "Continuous power supply for critical systems, demand for green certifications, and lowering operational energy expenses.",
            solution: "Hybrid solar + battery systems with 100% uptime, AI-enabled O&M, and cost-effective energy under long-term PPAs."
        },
        {
            icon: GraduationCap,
            title: "Educational Campuses",
            examples: "Technical colleges, engineering universities (e.g., UBDTCE Davanagere), and central/state institutions.",
            needs: "Lower energy costs, model green campuses, student-facing live labs for sustainability, and reliable electricity in tier-2/3 cities.",
            solution: "Campus-wide rooftop solar, STP-powered biogas, smart microgrids, and student skill-building labs with automation and predictive maintenance demos."
        },
        {
            icon: Tent,
            title: "Rural Electrification",
            examples: "Villages, tribal belts in Karnataka, AP, Telangana, and off-grid areas in Africa (e.g., Uganda).",
            needs: "Basic power access, reliable electricity for schools and clinics, enable local livelihood, and energy independence.",
            solution: "Decentralized solar microgrids with community-operated billing and maintenance, solar + battery + biogas configurations as per load and sustainability goals."
        },
        {
            icon: Building,
            title: "Urban Smart Cities",
            examples: "Bengaluru, Hyderabad, Amaravati, and upcoming tier-2 smart zones.",
            needs: "EV-readiness, grid stability, rooftop solar compliance, AI-based grid control, energy monitoring for smart meters and buildings.",
            solution: "Smart grid solutions with solar + BESS, EV chargers, IoT monitoring, and municipal building integration using real-time energy and carbon footprint data."
        },
        {
            icon: Home,
            title: "Apartment Complexes (Open Access)",
            examples: "Large gated communities and housing societies with 200+ flats or >1 MW connected load.",
            needs: "Lowering bulk energy bills, independence from grid fluctuations, interest in sustainable living, and central solar plant access via open access.",
            solution: "Group Captive Open Access Model: Shared stake in offsite solar park; clean power delivered via DISCOM, monthly savings of 20–30%, ESG branding for resident welfare groups."
        },
        {
            icon: Home,
            title: "Individual Housing & Villas",
            examples: "Independent homes, villa communities, farmhouses in peri-urban and rural zones.",
            needs: "Need for power reliability, green energy preference, backup power during outages, and long-term cost savings.",
            solution: "Rooftop solar + hybrid inverter + battery setup (Li-ion or tubular), optional IoT-based monitoring, AMC plans, and green certifications for premium housing developments."
        },
        {
            icon: Leaf,
            title: "Agribusiness & FPOs",
            examples: "Turmeric & ginger farms, dairy cooperatives, farmer groups in Karnataka, AP, Telangana.",
            needs: "Reliable irrigation, solar processing units, lower input costs, year-round income, energy independence.",
            solution: "Agrivoltaics (solar + crops), solar water pumps, solar cold storage, agri-biogas units, FPO-level solar microgrids, and tech integration for traceability & pricing intelligence."
        },
    ];

    return (
        <section id="target-markets" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Target Markets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {markets.map((market, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                <market.icon size={36} className="text-blue-600 mr-4" />
                                <h3 className="text-xl font-semibold text-blue-800">{market.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-2"><strong>Examples:</strong> {market.examples}</p>
                            <p className="text-gray-600 mb-2"><strong>Market Needs:</strong> {market.needs}</p>
                            <p className="text-gray-600"><strong>Vibhavasu’s Solution:</strong> {market.solution}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetMarkets;
