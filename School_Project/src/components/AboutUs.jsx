import React from 'react';
import FullFront from '../assets/Gallery/FullFrontView.jpg';
import FrontCapture from '../assets/Gallery/FrontCaptureFromGate.jpg';
import BottomToTop from '../assets/Gallery/BottomToTopViewMainBuilding.jpg';
import Mission from './Mission';

const AboutUs = () => {
  return (
    <div id="about" className="py-12">
      {/* Section 1: Hero Image with Overlay Text */}
      {/* <div className="relative overflow-hidden">
        <img
          src={FullFront}
          alt="About Us"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white px-8">
            <h2 className="text-4xl font-semibold mb-4">Know About Us</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
              odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
              quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
              mauris. Fusce nec tellus sed augue semper porta.
            </p>
          </div>
        </div>
      </div> */}

      {/* Section 2: Vision and Mission */}
      <div className="container mx-auto px-4 py-12 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-4xl font-extrabold mb-8 text-center">Know About Us</h3>
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 className="text-3xl font-semibold mb-4">Vision</h3>
            <p className="text-lg">
              The Vision of NAIS is to provide opportunities to create Global Citizens and leaders of tomorrow through traditional values of love, empathy, discipline, and respect, and to train the skills required for successful interaction with other individuals.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-2/3">
            <img
              src={FrontCapture}
              alt="Vision"
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 h-2/3 md:pt-20">
            <img
              src={BottomToTop}
              alt="Mission"
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 mb-4 md:mb-0">
            <Mission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
