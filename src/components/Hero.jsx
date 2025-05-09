import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/react.svg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundColor: '#0f0c29', // Solid background color
      }}
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="flex-1 text-white space-y-6">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold">
              Hi, I'm <span className="text-cyan-400">David Jayaraj</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
              And I'm a{' '}
              <span className="text-cyan-300">
                <Typewriter
                  words={['Frontend Developer', 'AI Student', 'Data Analyst', 'Backend Developer']}
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
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white p-2 border-4 border-cyan-400 shadow-xl">
            <img
              src={profileImage}
              alt="David Jayaraj"
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
