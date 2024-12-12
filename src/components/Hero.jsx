import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import arrow from '../assets/Group 73.png';
import table from '../assets/Group 151.png';
import greatedient from '../assets/Rectangle 6.png';

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
    <div className="flex flex-col items-center min-h-screen mt-20 bg-gray-50">
      {/* Text Section */}
      <div
        className="px-4 text-center text-section"
        ref={textSectionRef} // Attach ref for animation
      >
        <h1 className="text-5xl font-bold leading-tight text-gray-800 sm:text-6xl md:text-7xl">
          Medical software to attract
        </h1>
        <h1 className="mt-2 text-5xl font-bold leading-tight text-gray-800 sm:text-6xl md:text-7xl">
          And <span className="text-blue-600">more patients</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 sm:text-xl">
          Patientgrid’s communication platform helps improve patient experience
          while saving staff hours.
        </p>
        <div className="flex items-center justify-center mt-6 space-x-4 start-section">
          <button className="px-8 py-3 font-medium text-white transition-transform transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105">
            Start For Free
          </button>
          <img src={arrow} className="w-6 h-6" alt="Arrow icon" />
        </div>
      </div>

      {/* Image Section */}
      <div
        className="flex items-center justify-center w-full px-6 py-8 mt-12 image-section"
        style={{
          backgroundImage: `url(${greatedient})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          overflow: 'hidden',
          height: '100vh',
        }}
        ref={imageSectionRef} // Attach ref for animation
      >
        <img
          src={table}
          className="max-w-full rounded-lg shadow-lg md:max-w-4xl"
          alt="Dashboard Preview"
        />
      </div>
    </div>
  );
};

export default Hero;
