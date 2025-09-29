import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-yellow-400 mt-1" size={24} />
                            <div>
                                <h4 className="font-semibold mb-2">Address</h4>
                                <p className="text-gray-300">
                                    #304, Agate 1<br />
                                    Kristal Agate & Jasper<br />
                                    Kasavanahalli, Bangalore<br />
                                    Karnataka, PIN 560035
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Phone className="text-yellow-400 mt-1" size={24} />
                            <div>
                                <h4 className="font-semibold mb-2">Phone</h4>
                                <p className="text-gray-300">8197119988 (Avinash)</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Mail className="text-yellow-400 mt-1" size={24} />
                            <div>
                                <h4 className="font-semibold mb-2">Email</h4>
                                <p className="text-gray-300">avimvpr@gmail.com</p>
                            </div>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg">
                            <h4 className="font-semibold mb-2">Company Details</h4>
                            <p className="text-gray-300 text-sm">
                                <strong>CIN:</strong> U35105KA2025PTC206201<br />
                                <strong>PAN:</strong> AALCV2935P<br />
                                <strong>TAN:</strong> BLRV32237C
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300 resize-none"
                                    placeholder="Tell us about your solar energy needs..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
