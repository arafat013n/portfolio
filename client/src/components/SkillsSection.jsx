import React from "react";

const SkillsSection = () => {
    return (
        <section className="bg-white py-12" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
                    Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        data-aos="fade-up"
                        className="bg-gray-100 rounded-lg p-6 text-center"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Frontend Development
                        </h3>
                        <p className="text-gray-700">
                            HTML, CSS, JavaScript, React
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="bg-gray-100 rounded-lg p-6 text-center"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Backend Development
                        </h3>
                        <p className="text-gray-700">
                            Node.js, Express, MongoDB
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="bg-gray-100 rounded-lg p-6 text-center"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            UI/UX Design
                        </h3>
                        <p className="text-gray-700">Figma, Adobe XD, Sketch</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
