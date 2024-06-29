import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed md:bottom-10 md:right-10 bottom-8 right-5 bg-blue-500 text-white py-3 px-4 rounded-full shadow-lg transition-opacity duration-300 z-50 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default ScrollToTop;
