import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image from '../assets/Group 25.png';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ColabSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%', // Trigger when the section reaches 80% of the viewport
          end: 'top 30%',
          scrub: true,
        },
      },
    );

    // GSAP animation for the image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 }, // Initial state
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%', // Trigger when the section reaches 80% of the viewport
          end: 'top 30%',
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <div className="colab-section">
      <div className="container rounded-2xl bg-[#dde9ff] w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 lg:px-20">
        {/* Left Section */}
        <div ref={textRef} className="left w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Seamless collaboration for healthcare teams
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            With shared inboxes, any team member can resolve the team’s pending
            tasks. Individual staff members don’t get overwhelmed, and patients
            are always taken care of.
          </p>
        </div>

        {/* Right Section */}
        <div
          ref={imageRef}
          className="right w-full md:w-1/2 flex justify-center"
        >
          <img
            src={image}
            alt="Collaboration"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ColabSection;
