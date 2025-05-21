import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // ✅ Add this

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Internships />
      <Projects />
      <Contact />
      <Footer /> {/* ✅ Add the MIT License section here */}
    </div>
  );
}

export default App;
