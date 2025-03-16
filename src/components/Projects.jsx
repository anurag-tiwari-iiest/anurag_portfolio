import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import pic1 from '../assets/project_pics/pic_1.png';
import pic2 from '../assets/project_pics/pic_2.png';
import pic3 from '../assets/project_pics/pic_3.png';
import pic4 from '../assets/project_pics/pic_4.png';
import pic5 from '../assets/project_pics/pic_5.png';
import pic6 from '../assets/project_pics/pic_6.png';

// Sample Projects Data
const projectsData = [
  {
    title: "Portfolio Website",
    description: "A fully responsive and interactive personal portfolio website.",
    tech: "React, Tailwind CSS, AOS",
    image: pic1,
    appLink: "https://google.com",
    codeLink: "https://github.com"
  },
  {
    title: "E-Commerce Platform",
    description: "An online shopping platform with real-time payment integration.",
    tech: "Next.js, Firebase, Stripe",
    image: pic2,
    appLink: "https://google.com",
    codeLink: "https://github.com"
  },
  {
    title: "AI Chatbot",
    description: "A chatbot powered by OpenAI API, providing smart responses.",
    tech: "Node.js, Express, OpenAI API",
    image: pic3,
    appLink: "https://google.com",
    codeLink: "https://github.com"
  },
  {
    title: "Social Media App",
    description: "A social media platform to connect with friends and share updates.",
    tech: "React Native, Firebase",
    image: pic4,
    appLink: "https://google.com",
    codeLink: "https://github.com"
  },
  {
    title: "Blog Platform",
    description: "A platform to write, share, and read blogs.",
    tech: "Gatsby, GraphQL, Contentful",
    image: pic5,
    appLink: "https://google.com",
    codeLink: "https://github.com"
  },
  {
    title: "Weather App",
    description: "A weather forecasting app with real-time data.",
    tech: "Vue.js, Axios, OpenWeatherMap API",
    image: pic6,
    appLink: "https://google.com",
    codeLink: "https://github.com"
  }
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
      {/* Section Title */}
      <h2 
        className="text-5xl font-bold border-b-4 border-yellow-400 pb-2 text-center mb-16 tracking-wide inline-block"
        data-aos="fade-up"
      >
        Projects
      </h2>

      {/* Project Cards Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#252525] text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#333333]"
            data-aos="fade-up" 
            data-aos-delay={index * 100} 
          >
            <div className="overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-40 object-cover transition-transform duration-200 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{project.title}</h3>
              <p className="text-[#d1d1d1] text-sm mb-2">{project.description}</p>
              <p className="text-yellow-500 text-sm italic mb-4">{project.tech}</p>
              
              {/* Buttons Section */}
              <div className="flex gap-4 justify-center">
                <a 
                  href={project.appLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-white"
                >
                  Visit App <FaExternalLinkAlt size={14} />
                </a>
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 hover:bg-black hover:text-white"
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
