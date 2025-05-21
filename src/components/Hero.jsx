import { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaArrowDown, FaExternalLinkAlt } from "react-icons/fa";
import myPic from "../assets/my_pic.png";

const Hero = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShowWelcome(true), 500);

    const handleMouseMove = (event) => {
      const image = imageRef.current;
      const container = containerRef.current;

      if (!image || !container) return;

      const rect = container.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const imageX = image.offsetLeft + image.offsetWidth / 2;
      const imageY = image.offsetTop + image.offsetHeight / 2;
      const distance = Math.sqrt((mouseX - imageX) ** 2 + (mouseY - imageY) ** 2);

      if (distance < 200) {
        const angle = Math.atan2(mouseY - imageY, mouseX - imageX);
        const moveX = Math.cos(angle) * -100;
        const moveY = Math.sin(angle) * -100;

        const newX = Math.min(Math.max(0, image.offsetLeft + moveX), rect.width - image.offsetWidth);
        const newY = Math.min(Math.max(0, image.offsetTop + moveY), rect.height - image.offsetHeight);

        image.style.transform = `translate(${newX - image.offsetLeft}px, ${newY - image.offsetTop}px)`;
      } else {
        image.style.transform = `translate(0, 0)`;
      }
    };

    const handleMouseLeave = () => {
      const image = imageRef.current;
      if (image) {
        image.style.transform = `translate(0, 0)`;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
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
      ref={containerRef}
      className="w-screen h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 overflow-hidden m-0"
    >
      <br />
      <img
        ref={imageRef}
        src={myPic}
        alt="Anurag Vinod Tiwari"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-white mb-4 transition-transform duration-100"
      />

      <h1
        className={`text-7xl font-extrabold transition-all duration-1000 ${
          showWelcome ? "opacity-100" : "opacity-0"
        }`}
        style={{
          fontFamily: "'Pacifico', cursive",
          background:
            "linear-gradient(45deg, #ff0000, #ff7300, #ffeb00, #a8ff00, #f7ff00, #ffbf47, #ff7b7b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Welcome
      </h1>

      <h2 className="text-4xl font-bold text-white mt-4">Hi, I'm Anurag</h2>

      <p className="text-lg text-gray-200 max-w-2xl mt-4">
        A passionate Machine Learning Enthusiast & Full Stack Developer, eager to build scalable
        solutions and explore new technologies.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="https://github.com/anurag-tiwari-iiest"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white transition flex items-center gap-2"
        >
          <FaGithub size={24} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/anurag-tiwari-84ab3623b"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white transition flex items-center gap-2"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>
      </div>

      <div className="mt-4">
        <a
          href="https://drive.google.com/file/d/1QludFzGybJ6fxBpqPBK1lIGll4heAjcr/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-white font-semibold hover:underline flex items-center gap-2 hover:text-black"
        >
          Resume <FaExternalLinkAlt />
        </a>
      </div>

      <p className="text-white text-lg mt-8 cursor-pointer" onClick={handleScrollToAbout}>
        Scroll to know more about me <FaArrowDown className="ml-2 animate-bounce inline-block" />
      </p>
    </section>
  );
};

export default Hero;
