import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
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
    link: "https://google.com"
  },
  {
    title: "E-Commerce Platform",
    description: "An online shopping platform with real-time payment integration.",
    tech: "Next.js, Firebase, Stripe",
    image: pic2,
    link: "https://google.com"
  },
  {
    title: "AI Chatbot",
    description: "A chatbot powered by OpenAI API, providing smart responses.",
    tech: "Node.js, Express, OpenAI API",
    image: pic3,
    link: "https://google.com"
  },
  {
    title: "Social Media App",
    description: "A social media platform to connect with friends and share updates.",
    tech: "React Native, Firebase",
    image: pic4,
    link: "https://google.com"
  },
  {
    title: "Blog Platform",
    description: "A platform to write, share, and read blogs.",
    tech: "Gatsby, GraphQL, Contentful",
    image: pic5,
    link: "https://google.com"
  },
  {
    title: "Weather App",
    description: "A weather forecasting app with real-time data.",
    tech: "Vue.js, Axios, OpenWeatherMap API",
    image: pic6,
    link: "https://google.com"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 200, once: true, offset: 50, }); // Initialize AOS animations
  }, []);

  return (
    <section 
      id="projects" 
      className="w-screen min-h-screen bg-gradient-to-r from-black via-gray-600 to-black text-white py-24 px-10 font-[Poppins]"
    >
      {/* Section Title */}
      <h2 
        className="text-5xl font-bold border-b-4 border-yellow-400 pb-2 text-center mb-20 tracking-wide"
        data-aos="fade-up"
      >
        Projects
      </h2>

      {/* Project Cards Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up" 
            data-aos-delay={index * 200} // Adjust delay for staggered effect
          >
            <div className="overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-2">{project.description}</p>
              <p className="text-yellow-500 text-sm italic mb-4">{project.tech}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
              >
                See Code or Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
