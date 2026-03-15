import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import pic1 from '../assets/project_pics/pic_1.png';
import pic2 from '../assets/project_pics/pic_2.png';
import pic3 from '../assets/project_pics/pic_3.png';
import pic4 from '../assets/project_pics/pic_4.png';
import pic5 from '../assets/project_pics/pic_5.png';
import boxmaster from '../assets/project_pics/boxmaster.png';

const projectsData = [
  {
    title: "BoxMaster (Dots & Boxes Strategy Game)",
    description: "A polished mobile version of the classic Dots & Boxes strategy game where players compete to capture boxes by completing edges on the grid. Features smooth touch controls, intelligent turn handling, score tracking, and a visually engaging UI for a competitive experience.",
    tech: "Kotlin, Android Studio, Android SDK, Custom UI Components, Canvas Drawing, Game State Management",
    image: boxmaster,
    appLink: "https://play.google.com/store/apps/details?id=com.yoink.dotsandboxes",
    visitText: "Play on Android",
    hideCode: true
  },
  {
    title: "CrazyToe (Real-time Multiplayer Game)",
    description: "A unique twist on classic Tic-Tac-Toe where only the latest three moves remain visible, adding a strategic memory challenge. Supports real-time multiplayer with dynamic room/lobby creation, synchronized gameplay, and timer-based turn handling via WebSocket. Includes a Minimax-powered AI opponent with seamless gameplay across both web and Android platforms.",
    tech: "Kotlin, Android Studio, Android SDK, JavaScript, Node.js, Socket.IO, HTML, CSS, DOM API, Docker",
    image: pic5,
    androidLink: "https://twoplayer-ttt-timer-1.onrender.com/",
    appLink: "https://play.google.com/store/apps/details?id=com.anuragtiwari.crazytoe",
    codeLink: "https://github.com/anurag-tiwari-iiest/2player-ttt-timer",
    visitText: "Play on Android",
    hasAndroid: true
  },
  {
    title: "Virtual Plant Care Assistant (with AI-powered chatbot)",
    description: "A web application that provides plant care recommendations based on weather and species, along with an AI-powered chatbot for queries.",
    tech: "React, Flask, Huggingface API, PostgreSQL",
    image: pic1,
    appLink: "https://v2-plant-1.onrender.com",
    codeLink: "https://github.com/anurag-tiwari-iiest/v2-plant",
    visitText: "Try App"
  },
  {
    title: "AI-Powered Superhero Guesser using Bayesian Algorithm",
    description: "A web-based game where the system asks dynamic Yes/No questions to guess a Superhero using bayesian algorithm.",
    tech: "Flask, SQLite, NumPy, Bayesian Algorithm, HTML",
    image: pic3,
    appLink: "https://medium.com/@iamanuragtiwari101/how-i-built-an-akinator-style-ai-using-bayes-theorem-and-a-little-bit-of-magic-df2273e3f580",
    codeLink: "https://github.com/anurag-tiwari-iiest/akinator_bayes_theorem",
    visitText: "Read Article"
  },
  {
    title: "Voltage Control for Microgrid (College Major Project)",
    description: "Implemented Reinforcement Learning techniques for optimizing voltage control in a Microgrid environment, using Q-learning and Deep Deterministic Policy Gradient (DDPG) algorithms.",
    tech: "MATLAB, Reinforcement Learning, Q-learning, DDPG",
    image: pic4,
    appLink: "https://drive.google.com/file/d/1LgpgTmAfimIr4634B_rcp_QUgIeTGPAR/view?usp=sharing",
    codeLink: "https://github.com/anurag-tiwari-iiest/Voltage_Control",
    visitText: "View Report"
  },
  {
    title: "Interactive and Responsive Portfolio Website",
    description: "A fully responsive and interactive personal portfolio website built using React, Tailwind CSS, AOS, and Vite for optimized performance.",
    tech: "React (Vite), Tailwind CSS, AOS",
    image: pic2,
    appLink: "https://anurag-portfolio-vert.vercel.app/",
    codeLink: "https://github.com/anurag-tiwari-iiest/anurag_portfolio",
    visitText: "Visit Site"
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 150, once: true, offset: 30 });
  }, []);

  return (
    <section 
      id="projects" 
      className="w-screen min-h-screen bg-gradient-to-r from-gray-950 via-gray-900 to-black text-white py-10 px-8 font-sans"
    >
      <div className="md:px-12">
        <h2 
          className="text-5xl font-bold pb-2 text-left mb-16 tracking-wide"
          data-aos="fade-up"
        >
          <span className="border-b-4 border-yellow-400 inline-block">Projects</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 auto-rows-fr">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group perspective-1000"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="bg-[#252525] text-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-[0_25px_70px_rgba(250,204,21,0.6)] group-hover:bg-[#333333] group-hover:z-10 flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">{project.title}</h3>
                <p className="text-[#d1d1d1] text-sm mt-3 flex-1">{project.description}</p>
                <p className="text-yellow-500 text-sm italic mt-3">{project.tech}</p>

                <div className={`flex flex-col gap-3 mt-6`}>
                  {project.hideCode ? (
                    <a
                      href={project.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
                    >
                      {project.visitText} <FaExternalLinkAlt size={14} />
                    </a>
                  ) : project.hasAndroid ? (
                    <>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
                      >
                        See Code <FaGithub size={18} />
                      </a>
                      <div className="flex gap-3">
                        <a
                          href={project.androidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black whitespace-nowrap text-sm"
                        >
                          Play on Web <FaExternalLinkAlt size={14} />
                        </a>
                        <a
                          href={project.appLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black whitespace-nowrap text-sm"
                        >
                          {project.visitText} <FaExternalLinkAlt size={14} />
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="flex gap-3">
                      <a
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black whitespace-nowrap text-sm"
                      >
                        {project.visitText} <FaExternalLinkAlt size={14} />
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black whitespace-nowrap text-sm"
                      >
                        See Code <FaGithub size={18} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
