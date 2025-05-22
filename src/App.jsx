import React from 'react';
import './App.css';
import './index.css';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-black text-white scroll-smooth">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="internships">
        <Internships />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
