import React from 'react';
import Director from '../assets/Director2.jpg';
import { Quote } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center my-8">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl  font-extrabold mb-10 text-center">Welcome</h1>

      {/* Container for Director Section and Quote */}
      <div className="flex md:flex-row flex-col justify-start md:justify-around items-center  w-full bg-gray-100 p-8 rounded-lg shadow-md">
        {/* Director Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src={Director}
            alt="Director"
            className="w-72 h-72 rounded-full shadow-lg"
          />
        </div>

        {/* Quote Section */}
        <div className="md:w-1/2 ml-0 md:ml-8 flex flex-col items-start">
          <div className="flex items-center">
            <Quote className="text-blue-500 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 ml-2">
              To be the light of the world.
            </h2>
          </div>
          <p className="text-lg text-gray-700 italic pl-8 mb-4">
            No one puts a lamp under a bowl because a lamp is designed to help people see in dark places.
          </p>
          <p className="text-lg text-gray-700 font-semibold">~ Dr. Rakesh Sharma</p>
          <p className="text-lg text-gray-700">Director</p>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="md:w-3/4 w-full mt-8">
        <p className="text-lg text-gray-700">
          Welcome to our school! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla convallis libero ut lacus placerat, ac maximus eros tempor.
          Integer nec odio ut urna condimentum ullamcorper. In vitae elit sed tortor condimentum eleifend.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
