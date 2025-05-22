import React from "react";
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
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px)",
        backgroundSize: "40px 40px",
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

        {/* Resume Download Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg hover:brightness-110 hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
