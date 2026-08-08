import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalBackgroundCanvas from './components/three/GlobalBackgroundCanvas';
import AiCursor from './components/ui/AiCursor';
import './index.css';
import './styles/terminal.css';

function App() {
  return (
    <div className="min-h-screen bg-void relative">
      {/* AI Bot Emoji Mouse Cursor & Cybernetic Particle Follower */}
      <AiCursor />

      {/* Full-Page Persistent 3D Background Canvas */}
      <GlobalBackgroundCanvas />

      {/* Main Portfolio Sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
