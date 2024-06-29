import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import L from '../assets/Logo.png';
import safetyCert from '../assets/Cbse_Corner/BuildingSafetyCertificate.pdf';
import Calend from '../assets/Cbse_Corner/Calendar24-25.pdf';
import Fee from '../assets/Cbse_Corner/FeeStructure.pdf';
import Fire from '../assets/Cbse_Corner/FireNOC.pdf';
import ParentTeacher from '../assets/Cbse_Corner/ParentTeacherAssosciation.pdf';
import RegisterCert from '../assets/Cbse_Corner/RegistrationCertificate.pdf';
import SChoolManaging from '../assets/Cbse_Corner/SchoolManagingCommitte.pdf';
import Water1 from '../assets/Cbse_Corner/WaterAnalysis1.pdf';
import Water2 from '../assets/Cbse_Corner/WaterAnalysis2.pdf';
import LandCertificate from '../assets/Cbse_Corner/LandCertificate.pdf';
import SocietyRegistration from '../assets/Cbse_Corner/SocietyRegistration.pdf';
import SafeDrinkingAndSanitary from '../assets/Cbse_Corner/SafeDrinking.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const navItems = {
    "About Us": 5,
    "Cbse Corner": {
      "Building Safety Certificate": safetyCert,
      "Calendar 24-25": Calend,
      "Fee Structure": Fee,
      "Fire NOC": Fire,
      "Parent Teacher Association": ParentTeacher,
      "Registration Certificate": RegisterCert,
      "School Managing Committee": SChoolManaging,
      "Water Analysis 1": Water1,
      "Water Analysis 2": Water2,
      "Land Certificate": LandCertificate,
      "Society Registration": SocietyRegistration,
      "Safe Drinking And Sanitary": SafeDrinkingAndSanitary,
    },
    "Admission": 6,
    "Gallery": 5,
  };

  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.mobile-sidebar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderSubitems = (subitems) => {
    return Object.keys(subitems).map((key, i) => (
      <a key={i} href={subitems[key]} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
        {key}
      </a>
    ));
  };

  return (
    <nav className="bg-white shadow-lg p-4 px-8 md:px-32 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 text-xl font-bold">
          <a href='/'>
          <img 
          className="w-44" src={L} alt="Logo" />
            </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Sidebar */}
        <div className={`md:hidden fixed inset-y-0 right-0 z-50 bg-white w-2/3 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out mobile-sidebar`}>
          <ul className="flex flex-col mt-4 cursor-pointer">
            {Object.keys(navItems).map((item, index) => (
              <li className="border-b border-gray-200" key={index}>
                <button
                  className="py-3 px-6 w-full flex items-center justify-between text-lg text-gray-800"
                  onClick={() => toggleAccordion(index)}
                >
                  {item}
                  {typeof navItems[item] === 'object' && (
                    <svg className={`w-4 h-4 fill-current transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20">
                      <path d="M5.25 6.75l4.25 4.25 4.25-4.25" />
                    </svg>
                  )}
                </button>
                {typeof navItems[item] === 'object' && (
                  <div className={`ml-6 ${activeIndex === index ? 'block' : 'hidden'}`}>
                    {renderSubitems(navItems[item])}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex w-full md:w-auto">
          <ul className="flex md:flex-row md:space-x-6 text-gray-800 cursor-pointer">
            {Object.keys(navItems).map((item, index) => (
              <li className="relative group" key={index}>
                <button className="py-2 px-2 flex items-center text-lg">
                  {item}
                  {typeof navItems[item] === 'object' && (
                    <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.25 6.75l4.25 4.25 4.25-4.25" />
                    </svg>
                  )}
                </button>
                {typeof navItems[item] === 'object' && (
                  <div className="absolute w-[280px] left-0 top-full hidden bg-white border border-gray-200 group-hover:block min-w-full shadow-md">
                    {renderSubitems(navItems[item])}
                  </div>
                )}
              </li>
            ))}
            <li className="relative py-2 px-2 flex items-center text-lg">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
