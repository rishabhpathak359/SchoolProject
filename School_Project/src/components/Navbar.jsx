import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

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

  return (
    <nav className="bg-white shadow-lg p-4 px-8 md:px-32 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 text-xl font-bold">MyNavbar</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Sidebar */}
        <div className={`md:hidden fixed inset-y-0 right-0 z-50 bg-white w-2/3 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out mobile-sidebar`}>
          <ul className="flex flex-col mt-4 cursor-pointer">
            {['About Us', 'Online Fees', 'Admission', 'Gallery', 'Alumni'].map((item, index) => (
              <li className="border-b border-gray-200" key={index}>
                <button
                  className="py-3 px-6 w-full flex items-center justify-between text-lg text-gray-800"
                  onClick={() => toggleAccordion(index)}
                >
                  {item}
                  <svg className={`w-4 h-4 fill-current transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20">
                    <path d="M5.25 6.75l4.25 4.25 4.25-4.25" />
                  </svg>
                </button>
                <div className={`ml-6 ${activeIndex === index ? 'block' : 'hidden'}`}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Subitem 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Subitem 2</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Subitem 3</a>
                </div>
              </li>
            ))}
            <li className="py-3 px-6 w-full flex items-center justify-between text-lg text-gray-800">
              Contact Us
            </li>
          </ul>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex w-full md:w-auto">
          <ul className="flex md:flex-row md:space-x-6 text-gray-800 cursor-pointer">
            {['About Us', 'Online Fees', 'Admission', 'Gallery', 'Alumni'].map((item, index) => (
              <li className="relative group" key={index}>
                <button className="py-2 px-2 flex items-center text-lg">
                  {item}
                  <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.25 6.75l4.25 4.25 4.25-4.25" />
                  </svg>
                </button>
                <div className="absolute w-[280px] left-0 top-full hidden bg-white border border-gray-200 group-hover:block min-w-full shadow-md">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Subitem 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Subitem 2</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Subitem 3</a>
                </div>
              </li>
            ))}
            <li className='relative py-2 px-2 flex items-center text-lg'>
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
