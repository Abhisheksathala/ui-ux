import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import arrow from '../assets/Group 73.png';
import table from '../assets/Group 151.png';

const Hero = () => {
  // Create refs for animation
  const textSectionRef = useRef(null);
  const imageSectionRef = useRef(null);

  useEffect(() => {
    // Animate the text section
    gsap.fromTo(
      textSectionRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
    );

    // Animate the image section
    gsap.fromTo(
      imageSectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 },
    );
  }, []);

  return (
    <div className="min-h-screen mt-20 flex flex-col items-center bg-gray-50">
      {/* Text Section */}
      <div
        className="text-section text-center px-4"
        ref={textSectionRef} // Attach ref for animation
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 leading-tight">
          Medical software to attract
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 leading-tight mt-2">
          And <span className="text-blue-600">more patients</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-6">
          Patientgrid’s communication platform helps improve patient experience
          while saving staff hours.
        </p>
        <div className="start-section flex justify-center items-center space-x-4 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            Start For Free
          </button>
          <img src={arrow} className="h-6 w-6" alt="Arrow icon" />
        </div>
      </div>

      {/* Image Section */}
      <div
        className="image-section w-full flex justify-center items-center mt-12 px-6 py-8"
        style={{
          background:
            'linear-gradient(288deg, rgba(24,16,163,1) 0%, rgba(97,97,204,1) 36%, rgba(0,212,255,1) 100%)',
        }}
        ref={imageSectionRef} // Attach ref for animation
      >
        <img
          src={table}
          className="max-w-full md:max-w-4xl rounded-lg shadow-lg"
          alt="Dashboard Preview"
        />
      </div>
    </div>
  );
};

export default Hero;
