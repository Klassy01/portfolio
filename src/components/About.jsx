import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaDownload,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import resumePDF from "../assets/DJ_Resume.pdf";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "DJ_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="py-20 text-gray-100"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 0, 100, 0.15), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(0, 255, 200, 0.15), transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(0, 100, 255, 0.1), transparent 50%),
          #000000
        `,
        backgroundBlendMode: "screen",
      }}
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-semibold mb-6 text-center">About Me</h2>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          I am an <strong>Aspiring Full Stack Developer and AI Engineer</strong>{" "}
          with a solid foundation in software development, data analytics, and
          machine learning. I’m passionate about building{" "}
          <strong>intelligent, scalable, and user-centric systems</strong> that
          address real-world challenges through technology.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          With hands-on experience in{" "}
          <strong>
            data visualization, predictive modeling, and AI-integrated platforms
          </strong>
          , I've developed solutions across domains including educational tools,
          content moderation, and real-time applications. I'm proficient in{" "}
          <strong>SQL, Python, and JavaScript</strong>, and I enjoy working
          across both frontend and backend stacks to deliver cohesive,
          high-performing systems.
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 text-2xl mb-8">
          <a
            href="https://www.linkedin.com/in/davidjayaraja01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Klassy01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/david_jayaraj_01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/klassydj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/919840488355"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Resume Download Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-2xl shadow-md hover:bg-blue-700 transition"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
