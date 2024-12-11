import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ReviewComponent = ({ image, text1, text2, revers = false }) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const boxShadowStyle = revers
    ? {
        WebkitBoxShadow: '24px -13px 12px 8px #EAE7F2',
        boxShadow: '24px -13px 12px 8px #EAE7F2',
      }
    : {
        WebkitBoxShadow: '-21px -12px 7px 5px rgba(234, 231, 242, 0.71)',
        boxShadow: '-21px -12px 7px 5px rgba(234, 231, 242, 0.71)',
      };

  useEffect(() => {
    // GSAP animations when the component comes into view
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 }, // Initial state
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%', // When the image reaches 80% from the top
          end: 'top 30%',
          scrub: true,
        },
      },
    );

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
          start: 'top 80%', // When the text reaches 80% from the top
          end: 'top 30%',
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <div className="ReviewComponent flex justify-center items-center my-32">
      <div
        className={`flex items-center w-full max-w-screen-lg px-6 md:px-32 ${
          revers ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        {/* Left Section (Image) */}
        <div className="left w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            ref={imageRef}
            src={image}
            style={boxShadowStyle}
            alt="Review"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Section (Text) */}
        <div
          ref={textRef}
          className="right w-full md:w-1/2 px-4 md:px-8 text-center md:text-left"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{text1}</h2>
          <p className="text-lg text-gray-600">{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
