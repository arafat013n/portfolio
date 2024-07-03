import React from "react";
import SocialLinks from "./SocialLinks";
import {
    FaGithub,
    FaWhatsapp,
    FaFacebook,
    FaTelegramPlane,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";

const SocialLinksSection = () => {
    return (
        <section className="social-links py-12" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
                    Social Links
                </h2>
                <div className="flex justify-center space-x-4">

                    <SocialLinks />
                </div>
            </div>
        </section>
    );
};

export default SocialLinksSection;
