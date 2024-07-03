import React from "react";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
    return (
        <section
            className="relative bg-cover bg-center h-96"
            style={{
                backgroundImage: "url('/hero.jpg')"
            }}
            data-aos="fade-in"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Obaydul Haque Akash
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Web Developer | UI/UX Designer
                    </p>
                    <div className="flex justify-center space-x-4 mb-8">
                        <SocialLinks />
                    </div>
                    <div className="animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
