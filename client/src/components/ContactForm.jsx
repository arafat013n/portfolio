import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/send", formData); // Replace with your server endpoint
            alert("Message sent successfully");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            alert("Error sending message");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md md:w-1/2 md:ml-8"
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
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 w-full"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
