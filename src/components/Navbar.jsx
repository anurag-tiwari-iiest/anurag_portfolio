import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollImageSize = () => {
      const image = document.querySelector('.navbar-image');
      if (window.scrollY > 0) {
        image.style.width = '10rem';  // w-40 (unchanged)
        image.style.height = '3rem';  // h-12
      } else {
        image.style.width = '10rem';  // w-40
        image.style.height = '5rem';  // h-20
      }
    };

    window.addEventListener('scroll', handleScrollImageSize);
    return () => window.removeEventListener('scroll', handleScrollImageSize);
  }, []);

  const handleSmoothScroll = (section) => {
    const target = document.getElementById(section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 ${scrolling ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Name */}
        <img
          src="src/assets/anurag_name.png"
          alt="Anurag"
          className="navbar-image w-40 h-20 cursor-pointer transition-all duration-200 hover:scale-105 drop-shadow-glow filter"
          onClick={() => handleSmoothScroll('hero')}
        />

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          {["About", "Education", "Projects", "Experience", "Contact"].map((item, index) => (
            <li
              key={index}
              className="hover:text-gray-300 cursor-pointer transition duration-200"
              onClick={() => handleSmoothScroll(item.toLowerCase())}
            >
              {item}
            </li>
          ))}
        </ul>
        
        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <p onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FaBars size={24} />
          </p>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-end">
            <div className="w-1/2 h-3/4 bg-black bg-opacity-80 flex flex-col items-center space-y-6 py-8 rounded-l-lg">
                {["About", "Education", "Projects", "Experience", "Contact"].map((item, index) => (
                    <p
                    key={index}
                    className="text-white text-2xl cursor-pointer transition hover:text-gray-300"
                    onClick={() => handleSmoothScroll(item.toLowerCase())}
                    >
                    {item}
                    </p>
                ))}
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
