import React from 'react';

const AboutUs = () => {
  return (
    <div className=" py-12">
      {/* Section 1: Hero Image with Overlay Text */}
      <div className="relative overflow-hidden">
        <img
          src="https://via.placeholder.com/1600x900"
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
      </div>

      {/* Section 2: Our Story and Image */}
      <div className="container bg-gray-100 mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center">
        {/* Our Story */}
        <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 h-auto">
          <img
            src="https://via.placeholder.com/600x600"
            alt="Our Story"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
