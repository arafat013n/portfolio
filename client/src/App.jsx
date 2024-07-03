import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import SocialLinksSection from "./components/SocialLinksSection";

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false // Whether animation should happen only once
        });
    }, []);

    return (
        <>
           
            <HeroSection />
            <AboutMeSection />
            <SkillsSection />
            <ProjectSection />
            <ClientsSection />
            <ContactSection />
            <SocialLinksSection />
        </>
    );
}
