import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
      
      // Detect current section
      const sections = ['hero', 'about', 'education', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (section) => {
    const target = document.getElementById(section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - (navbarRef.current?.offsetHeight || 80),
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
          currentSection === 'contact'
            ? 'bg-black border-b border-gray-800'
            : currentSection === 'hero'
              ? "bg-gray-200/90 backdrop-blur-sm"
              : "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <div className="cursor-pointer flex items-center" onClick={() => handleSmoothScroll("hero")}>
            <span className={`text-3xl font-bold tracking-wider transition-colors duration-300 ${
              currentSection === 'hero' ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-yellow-400'
            }`}>
              ANURAG
            </span>
          </div>

          <ul className={`hidden md:flex space-x-8 text-lg font-medium ${
            currentSection === 'hero' ? 'text-gray-900' : 'text-white'
          }`}>
            {["About", "Education", "Projects", "Experience", "Contact"].map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:scale-110 relative group ${
                  currentSection === 'hero' ? 'hover:text-blue-600' : 'hover:text-yellow-400'
                }`}
                onClick={() => handleSmoothScroll(item.toLowerCase())}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  currentSection === 'hero' ? 'bg-blue-600' : 'bg-yellow-400'
                }`}></span>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className={`transition-colors p-2 rounded ${
                currentSection === 'hero' 
                  ? 'text-gray-900 hover:text-blue-600 bg-white' 
                  : 'text-white hover:text-yellow-400 bg-gray-800'
              }`}
              aria-label="Toggle menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div style={{ height: "64px" }}></div> 

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-black/50 backdrop-blur-sm flex justify-end z-40" onClick={() => setMenuOpen(false)}>
          <div className="w-2/3 h-full bg-gray-900 flex flex-col items-center justify-center space-y-8 py-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {["About", "Education", "Projects", "Experience", "Contact"].map((item, index) => (
              <button
                key={index}
                className="text-white text-2xl font-medium cursor-pointer transition-all hover:text-yellow-400 hover:scale-110"
                onClick={() => handleSmoothScroll(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
