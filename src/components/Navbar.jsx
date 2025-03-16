import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (section) => {
    const target = document.getElementById(section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - (navbarRef.current?.offsetHeight || 80), // Adjust for navbar height
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 p-4 ${scrolling ? "bg-black shadow-lg" : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"}`}
        style={{ height: "4rem" }}
      >
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Name / Image */}
          <div className="cursor-pointer flex items-center">
            {imageLoaded ? (
              <img
                src="src/assets/anurag_name.png"
                alt="Anurag"
                className="w-36 h-12 transition-all duration-200 hover:scale-105 drop-shadow-glow filter"
                onClick={() => handleSmoothScroll("hero")}
                onError={() => setImageLoaded(false)}
              />
            ) : (
              <h1 className="text-white text-4xl font-bold uppercase">ANURAG</h1>
            )}
          </div>

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
      </nav>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: "4rem" }}></div> 

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
    </>
  );
};

export default Navbar;
