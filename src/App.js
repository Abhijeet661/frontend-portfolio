import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-800">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}