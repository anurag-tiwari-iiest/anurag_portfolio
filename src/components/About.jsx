import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaMicrochip } from "react-icons/fa";

const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Assembly", icon: <FaMicrochip className="text-gray-400" /> },
  { name: "Microcontrollers", icon: <FaMicrochip className="text-yellow-500" /> }
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  return (
    <section id="about" className="w-screen min-h-screen bg-gradient-to-r from-black to-gray-600 text-white py-20 px-10 md:px-24">
      {/* Section Title */}
      <h2
        className="text-5xl font-bold text-left mb-10 border-b-4 border-yellow-400 pb-2 inline-block"
        data-aos="fade-up"
        >
        About Me
      </h2>


      {/* About Content */}
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-start gap-16">
        {/* About Text */}
        <div className="w-full md:w-1/2 text-left" data-aos="fade-right">
          <p className="text-lg text-gray-200 leading-relaxed mb-4 text-justify">
            I am a passionate Software Developer, always eager to learn and create scalable solutions. I love exploring <strong>Machine Learning, Full Stack Development, and Web Performance Optimization</strong>. With experience in <strong>front-end, back-end, and database management</strong>, I strive to build efficient applications that improve user experience. I have a keen interest in <strong>data analysis and visualization</strong>, which helps me make data-driven decisions. My projects often involve <strong>cutting-edge technologies</strong>, and I enjoy staying up-to-date with the latest trends in the tech industry. 
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-4 text-justify">
            During my academic journey, I have honed my skills in <strong>software engineering principles</strong> and <strong>algorithm design</strong>. I am committed to continuous learning and professional development. I am a <strong>problem-solver</strong>, a <strong>collaborative team player</strong>, and always <strong>eager to learn new skills</strong>.
          </p>

          {/* Coursework */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-yellow-400">Coursework</h3>
            <ul className="list-disc pl-5 text-gray-300 text-lg">
              <li>Full Stack Web Development</li>
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
              <li>Computer Architecture & Organization</li>
              <li>Computer Networking</li>
              <li>Microprocessors & Microcontrollers</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h3 className="text-4xl font-semibold text-yellow-400 text-center mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center m-2 transition-transform duration-300 transform hover:scale-110 hover:rotate-6"
              >
                {skill.logo ? (
                  <img src={skill.logo} alt={skill.name} className="w-16 h-16 md:w-25 md:h-25 mb-2" />
                ) : (
                  <div className="text-5xl mb-2">{skill.icon}</div>
                )}
                <p className="text-lg">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;