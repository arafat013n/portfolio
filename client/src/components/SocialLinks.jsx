import React from "react";

import {
    FaGithub,
    FaWhatsapp,
    FaFacebook,
    FaTelegramPlane,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className="flex justify-center space-x-4 mb-8">
            <a
                href="https://github.com/arafat013n?tab=followers"
                className="social-btn bg-gray-800 text-white hover:bg-gray-700 transition duration-300 rounded-full p-3"
            >
                <FaGithub />
            </a>
            <a
                href="https://wa.me/qr/SMJZGAPN6TYHF1"
                className="social-btn bg-green-500 text-white hover:bg-green-600 transition duration-300 rounded-full p-3"
            >
                <FaWhatsapp />
            </a>
            <a
                href="https://www.facebook.com/akash06r"
                className="social-btn bg-blue-500 text-white hover:bg-blue-600 transition duration-300 rounded-full p-3"
            >
                <FaFacebook />
            </a>
            <a
                href="https://t.me/akash06r"
                className="social-btn bg-blue-400 text-white hover:bg-blue-500 transition duration-300 rounded-full p-3"
            >
                <FaTelegramPlane />
            </a>
            <a
                href="#"
                className="social-btn bg-blue-400 text-white hover:bg-blue-500 transition duration-300 rounded-full p-3"
            >
                <FaTwitter />
            </a>
            <a
                href="#"
                className="social-btn bg-red-600 text-white hover:bg-red-700 transition duration-300 rounded-full p-3"
            >
                <FaYoutube />
            </a>
        </div>
    );
};

export default SocialLinks;
