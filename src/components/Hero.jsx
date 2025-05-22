import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/djportn.jpg';

const Hero = () => {
  return (
    <section
      id="home"
             className="min-h-screen flex items-center justify-center text-white"
 style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold">
              Hi, I'm <span className="text-cyan-400">David Jayaraj A</span>
            </h1>
            <h2 className="text-2xl sm:text-4xl font-semibold mt-2">
              And I'm a{' '}
              <span className="text-cyan-300">
                <Typewriter
                  words={['Frontend Developer', 'AI Enthusiast', 'Data Analyst', 'Backend Developer']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-72 h-96 sm:w-96 sm:h-[28rem] border shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-400/50 rounded-xl overflow-hidden"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(0, 255, 255, 0.3)',
              borderWidth: '4px',
            }}
          >
            <img
              src={profileImage}
              alt="David Jayaraj"
              className="w-full h-full object-cover object-center rounded-xl"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
