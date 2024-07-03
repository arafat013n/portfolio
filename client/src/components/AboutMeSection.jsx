import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported

const AboutMeSection = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className="about-me py-12" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
                    About Me
                </h2>
                <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-8">
                    <p>
                        Hello! I am Obaydul Haque Akash, a passionate web
                        developer and UI/UX designer with a focus on creating
                        clean and user-friendly interfaces. I have experience
                        with frontend and backend technologies, and I enjoy
                        turning complex problems into simple, beautiful, and
                        intuitive designs.
                    </p>
                </div>
                <div className="container gap-8 mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-center">
                    <div
                        data-aos="fade-up"
                        className="overflow-hidden rounded-lg card-container"
                    >
                        <div className="card">
                            <img
                                src="/hero2.jpg"
                                alt="Gallery Image 1"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="card card-overlay">
                            <img
                                src="https://via.placeholder.com/200x200"
                                alt="Gallery Image 2"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up" className="overflow-hidden rounded-lg card-container">
                        <div className="card">
                            <img
                                src="/hero.jpg"
                                alt="Gallery Image 3"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="card card-overlay">
                            <img
                                src="https://via.placeholder.com/200x200"
                                alt="Gallery Image 4"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up" className="overflow-hidden rounded-lg card-container">
                        <div className="card">
                            <img
                                src="/hero3.jpg"
                                alt="Gallery Image 5"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="card card-overlay">
                            <img
                                src="https://via.placeholder.com/200x200"
                                alt="Gallery Image 6"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
