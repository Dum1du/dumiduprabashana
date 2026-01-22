import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import CommentArea from "./components/CommentArea";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && !event.target.closest("nav")) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isNavOpen]);

  const scrollToSection = (section) => {
    const sections = {
      home: heroRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setIsNavOpen(false);
  };

  const downloadCV = () => {
    const cvUrl = " https://drive.google.com/uc?export=download&id=1U4ZPx8DlEAnz0uYWI5HkYmlCASmi9BQv";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Dumidu_Prabhasan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-x-hidden">
      <Navbar
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        scrollToSection={scrollToSection}
        downloadCV={downloadCV}
      />

      <Hero heroRef={heroRef} scrollToSection={scrollToSection} downloadCV={downloadCV} />

      <Skills skillsRef={skillsRef} />

      <Education />

      <Projects projectsRef={projectsRef} />

      <CommentArea scrollToSection={scrollToSection} contactRef={contactRef} />

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
