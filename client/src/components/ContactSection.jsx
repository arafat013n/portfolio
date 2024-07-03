import React, { useState } from "react";
import axios from "axios";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false); // State for loading animation

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true before sending

        try {
            await axios.post("http://localhost:5000/send", formData);
            alert("Message sent successfully");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            alert("Error sending message");
        } finally {
            setIsLoading(false); // Set loading state back to false after sending
        }
    };

    return (
        <section id="contact" className="py-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
                Contact
            </h2>
            <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="/contact.jpeg"
                        alt="Contact Image"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg md:w-1/2 md:ml-8"
                >
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-gray-800 font-medium mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-800 font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="block text-gray-800 font-medium mb-2"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-gray-800 font-medium mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 w-full relative"
                        disabled={isLoading} // Disable button when loading
                    >
                        {isLoading && (
                            <span className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="animate-spin h-5 w-5 mr-3"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8a7.96 7.96 0 01-4-1.07"
                                    ></path>
                                </svg>
                                Sending...
                            </span>
                        )}
                        {!isLoading && "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
