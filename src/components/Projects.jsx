import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import pic1 from '../assets/project_pics/pic_1.png';
import pic2 from '../assets/project_pics/pic_2.png';
import pic3 from '../assets/project_pics/pic_3.png';
import pic4 from '../assets/project_pics/pic_4.png';
import pic5 from '../assets/project_pics/pic_5.png';

const projectsData = [
  {
  title: "Disappearing Tic-Tac-Toe (Real-time Multiplayer Game)",
  description: "A twist on classic Tic-Tac-Toe with disappearing moves! Only the latest 3 moves stay active. Includes real-time online multiplayer via lobby system.",
  tech: "JavaScript, Node.js, Socket.IO, HTML, CSS, DOM API, Docker(Created image for deployment)",
  image: pic5,
  appLink: "https://twoplayer-ttt-timer.onrender.com",
  codeLink: "https://github.com/anurag-tiwari-iiest/2player-ttt-timer",
  visitText: "Play Game"
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
          className="text-5xl font-bold border-b-4 border-yellow-400 pb-2 text-center mb-16 tracking-wide inline-block"
          data-aos="fade-up"
        >
          Projects
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-[#252525] text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#333333]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-yellow-400">{project.title}</h3>
              <p className="text-[#d1d1d1] text-sm">{project.description}</p>
              <p className="text-yellow-500 text-sm italic">{project.tech}</p>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-white"
                >
                  {project.visitText} <FaExternalLinkAlt size={14} />
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-white"
                >
                  See Code <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
