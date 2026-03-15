import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown, FaExternalLinkAlt } from "react-icons/fa";
import myPic from "../assets/my_pic.png";

const Hero = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowWelcome(true), 500);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="w-screen min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4 md:px-6 py-20 overflow-y-auto m-0 relative"
    >
      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
        <img
          src={myPic}
          alt="Anurag Vinod Tiwari"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-2xl border-4 border-blue-500 mb-4 md:mb-6 hover:border-purple-500 hover:shadow-blue-500/50 cursor-pointer transition-all duration-300"
        />

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-3 md:mb-4 transition-all duration-1000 ${
            showWelcome ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          style={{
            fontFamily: "'Pacifico', cursive",
            background:
              "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: showWelcome ? "gradientShift 3s ease infinite" : "none",
          }}
        >
          Welcome
        </h1>

        <style>{`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% center; }
            50% { background-position: 100% center; }
          }
        `}</style>

        <h2 
          className={`text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-3 md:mb-4 transition-all duration-1000 delay-200 ${
            showWelcome ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Hi, I'm <span className="text-blue-600">Anurag</span>
        </h2>

        <p 
          className={`text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mt-3 md:mt-4 leading-relaxed px-4 transition-all duration-1000 delay-400 ${
            showWelcome ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          A passionate <span className="text-blue-600 font-semibold">Mobile App Developer</span> & <span className="text-purple-600 font-semibold">Full Stack Engineer</span>, specializing in building elegant iOS & Android applications and scalable web solutions.
        </p>

        <div className={`mt-6 md:mt-8 flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto px-4 transition-all duration-1000 delay-600 ${
          showWelcome ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <a
            href="https://github.com/anurag-tiwari-iiest"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-xl shadow-lg hover:shadow-gray-800/50 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-110 transform"
          >
            <FaGithub size={24} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-tiwari-84ab3623b"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-110 transform"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>
        </div>

        <div className={`mt-4 md:mt-6 transition-all duration-1000 delay-700 ${
          showWelcome ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <a
            href="https://drive.google.com/file/d/1VHa4rrzfNuMLnvi3t-1iIwy80OqjCdbB/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-2xl text-gray-800 font-semibold hover:text-blue-600 flex items-center gap-3 transition-colors duration-300 hover:scale-105 inline-flex border-2 border-gray-400 hover:border-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-xl"
          >
            Resume <FaExternalLinkAlt />
          </a>
        </div>

        <p 
          className={`text-gray-700 text-base md:text-lg mt-8 md:mt-12 cursor-pointer flex items-center justify-center gap-3 transition-all duration-1000 delay-800 hover:text-blue-600 ${
            showWelcome ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleScrollToAbout}
        >
          Scroll to know more about me <FaArrowDown className="animate-bounce" />
        </p>
      </div>
    </section>
  );
};

export default Hero;
