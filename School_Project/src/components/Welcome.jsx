import React from 'react';

const Welcome = () => {
  return (
    <div className='flex md:flex-row flex-col justify-start md:justify-around md:items-center my-8'>
      {/* Director Section */}
      <div className="flex-shrink-0 ">
        <h1 className='text-3xl font-semibold mb-2'>Director</h1>
        <img
          src="https://i.shgcdn.com/daf05704-b87b-44e8-b12f-7f07fb254cbf/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt="Director"
          className=" w-72 h-72 object-cover mb-4"
        />
      </div>

      {/* Welcome Section */}
      <div className="md:w-1/2 ml-4 ">
        <h1 className='text-3xl font-semibold mb-2'>Welcome</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our school! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla convallis libero ut lacus placerat, ac maximus eros tempor.
          Integer nec odio ut urna condimentum ullamcorper.
          In vitae elit sed tortor condimentum eleifend. 
        </p>

        {/* Read More Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Welcome;
