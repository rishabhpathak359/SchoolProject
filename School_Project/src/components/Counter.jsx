import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Slider from "./Slider/Slider";
import { Trophy, Users, User, GraduationCap } from "lucide-react"; // Importing Lucide React icons

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const images = [
    "https://picsum.photos/id/23",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-gray-300 shadow-md text-black w-full py-5">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-1/2 border bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-center mb-4">
              <Trophy size={32} className="mr-2 text-blue-700" />
              <h1 className="text-3xl">Awards & Recognition</h1>
            </div>
            <Slider images={images} />
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-0">
          <ScrollTrigger
            style={{ width: "100%" }}
            onEnter={() => setCounterOn(true)}
          >
            <div className="flex md:flex-row flex-col items-center justify-center gap-5 md:gap-48 text-lg md:text-xl rounded-lg shadow-md p-4">
              <CounterItem
                count={50}
                label="Students"
                icon={<GraduationCap size={40} className="text-blue-700" />}
                counterOn={counterOn}
              />
              <CounterItem
                count={300}
                label="Faculty"
                icon={<User size={40} className="text-blue-700" />}
                counterOn={counterOn}
              />
              <CounterItem
                count={1000}
                label="Staff"
                icon={<Users size={40} className="text-blue-700" />}
                counterOn={counterOn}
              />
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

const CounterItem = ({ count, label, icon, counterOn }) => (
  <div className="text-center">
    <div className="font-extrabold text-3xl mb-2 flex flex-col items-center justify-center">
      <div className="mt-2">
        {icon}
      </div>
      <div className="flex items-center justify-center mt-2">
        {counterOn && (
          <>
            <CountUp start={0} end={count} duration={5} delay={0.5} />
            <span className="ml-1">+</span>
          </>
        )}
      </div>
    </div>
    <div className="text-lg">{label}</div>
  </div>
);

export default Counter;
