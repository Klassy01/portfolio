import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/djportn.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white"
      style={{
  background: `
    radial-gradient(circle at 20% 30%, rgba(255, 0, 100, 0.15), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(0, 255, 200, 0.15), transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(0, 100, 255, 0.1), transparent 50%),
    #000000
  `,
  backgroundBlendMode: 'screen',
}}


    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold">
              Hi, I'm <span className="text-cyan-400">David Jayaraj</span>
            </h1>
            <h2 className="text-2xl sm:text-4xl font-semibold mt-2">
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
          <div className="w-72 h-96 sm:w-96 sm:h-[28rem] border-4 border-cyan-400 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-400/50 rounded-xl overflow-hidden">
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
