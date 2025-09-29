import React, { useRef, useEffect } from 'react';

const Testimonials = () => {
    const testimonialSliderRef = useRef(null);

    useEffect(() => {
        const slider = testimonialSliderRef.current;
        if (!slider) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
            slider.classList.remove('active');
        };

        const handleMouseUp = () => {
            isDown = false;
            slider.classList.remove('active');
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mouseleave', handleMouseLeave);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mousemove', handleMouseMove);

        // Auto-scroll for testimonials
        let scrollInterval;
        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (slider.scrollWidth - slider.scrollLeft === slider.clientWidth) {
                    slider.scrollLeft = 0;
                } else {
                    slider.scrollLeft += slider.clientWidth / 2; // Scroll half a card
                }
            }, 5000); // Change slide every 5 seconds
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        slider.addEventListener('mouseenter', stopAutoScroll);
        slider.addEventListener('mouseleave', startAutoScroll);

        startAutoScroll(); // Start auto-scroll on page load

        return () => {
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mouseleave', handleMouseLeave);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mousemove', handleMouseMove);
            slider.removeEventListener('mouseenter', stopAutoScroll);
            slider.removeEventListener('mouseleave', startAutoScroll);
            stopAutoScroll();
        };
    }, []);

    const testimonials = [
        {
            text: "Vibhavasu Power transformed our energy consumption. Our electricity bills have plummeted, and their service was impeccable!",
            author: "Ramesh Kumar",
            role: "Homeowner, Jaipur"
        },
        {
            text: "The solar water pump from Vibhavasu Power has been a game-changer for our farm. Reliable and truly sustainable.",
            author: "Priya Sharma",
            role: "Farmer, Rajasthan"
        },
        {
            text: "Excellent industrial solar solution. Vibhavasu Power delivered on time and within budget, significantly boosting our energy independence.",
            author: "Anil Singh",
            role: "Factory Owner, Gujarat"
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">What Our Clients Say</h2>
                <div ref={testimonialSliderRef} className="flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 md:-mx-0">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex-none w-11/12 md:w-1/2 lg:w-1/3 px-4 snap-center">
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:scale-102 hover:shadow-xl h-full flex flex-col justify-between">
                                <p className="text-lg text-gray-700 italic mb-6">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-bold text-blue-800 mb-1">{testimonial.author}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
