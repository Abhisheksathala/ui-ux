import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image1 from './../assets/Frame 314.png';
import Image2 from './../assets/Rectangle 57.png';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
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
    <div
      style={{
        backgroundImage: `url(${Image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="bg-cover bg-center w-[80%] rounded-2xl my-10 mx-auto py-4 px-6 md:px-12"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Right Section: Image */}
        <div
          ref={imageRef}
          className="right w-full md:w-1/2 flex justify-center"
        >
          <img
            src={Image2}
            alt="Work Illustration"
            className="w-full max-w-md md:max-w-lg object-contain rounded-lg shadow-lg"
          />
        </div>
        {/* Left Section: Text */}
        <div
          ref={textRef}
          className="left w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We work on a month-to-month basis, try for free with no commitments
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
            14 Free Trials
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
