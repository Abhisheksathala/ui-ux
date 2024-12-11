import React from 'react';
import ReviewComponent from './ReviewComponent';
import Image1 from '../assets/Group 159.png';

const ReviewSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* First Review Component (Default order) */}
      <ReviewComponent
        image={Image1}
        text1={'Bring new business in by getting more online reviews'}
        text2={'94% Use review to choose new doctor.'}
      />
      {/* Second Review Component (Reversed order) */}
      <ReviewComponent
        image={Image1}
        text1={'Bring new business in by getting more online reviews'}
        text2={'94% Use review to choose new doctor.'}
        revers={true}
      />
      <ReviewComponent
        image={Image1}
        text1={'Bring new business in by getting more online reviews'}
        text2={'94% Use review to choose new doctor.'}
      />
    </div>
  );
};

export default ReviewSection;
