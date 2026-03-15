import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaMicrochip } from "react-icons/fa";

const skills = [
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "iOS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg", invert: true },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", invert: true },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", lighten: true },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Assembly", icon: <FaMicrochip className="text-gray-400" /> }
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  return (
    <section id="about" className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16 px-4 md:px-24 overflow-x-hidden flex flex-col relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(250,204,21,0.1)_0%,transparent_50%)]"></div>
      
      <h2 className="text-5xl font-bold text-left mb-8 pb-2 relative z-10" data-aos="fade-up">
        <span className="border-b-4 border-yellow-400 inline-block">About Me</span>
      </h2>

      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-start gap-12 flex-1 relative z-10">
        <div className="w-full md:w-1/2 text-left group" data-aos="fade-right">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/20 transition-all duration-500 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-105">
            <p className="text-lg text-gray-200 leading-relaxed mb-4 text-justify">
              I am a passionate <strong className="text-yellow-400">Mobile App Developer</strong> specializing in <strong className="text-yellow-400">native iOS and Android development</strong> using Swift/SwiftUI and Kotlin/Jetpack Compose. I build elegant, performant cross-platform applications with pixel-perfect UI implementations and comprehensive testing. With a strong foundation in <strong className="text-yellow-400">Full Stack Development and Web Performance Optimization</strong>, I create scalable solutions across both mobile and web platforms.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4 text-justify">
              My expertise spans <strong className="text-yellow-400">design systems, CI/CD pipelines, accessibility standards</strong>, and modern development practices. I excel at <strong className="text-yellow-400">data structures and algorithms</strong>, which enables me to write efficient, optimized code. I thrive in collaborative environments using agile methodologies, and I'm always eager to explore cutting-edge technologies and best practices.
            </p>
          </div>

          <div className="mt-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/20 transition-all duration-500 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-105">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-3">Coursework</h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-300 text-base">
              {[
                "iOS App Development",
                "Android App Development",
                "Mobile UI/UX Design",
                "Full Stack Development",
                "Data Structures & Algorithms",
                "Operating Systems",
                "Computer Networking",
                "Microprocessors & Microcontrollers",
                "Computer Architecture"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 group/item transition-all duration-300 hover:translate-x-2">
                  <span className="text-blue-400 transition-all duration-300 group-hover/item:scale-150 group-hover/item:text-yellow-400">
                    ↠
                  </span>
                  <span className="transition-all duration-300 group-hover/item:text-yellow-400 group-hover/item:font-semibold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-aos="fade-left" className="flex flex-col items-center w-full md:w-1/2">
          <h3 className="text-4xl font-semibold text-yellow-400 mb-6">Skills</h3>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-8 justify-items-center w-full">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center transition-all duration-500 transform 
                hover:scale-150 hover:-translate-y-4 cursor-pointer group/skill relative"
              >
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 scale-150"></div>
                {skill.logo ? (
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className={`w-14 h-14 md:w-16 md:h-16 mb-2 relative z-10 transition-all duration-500 group-hover/skill:rotate-[360deg] ${skill.invert ? 'invert brightness-0' : ''} ${skill.lighten ? 'brightness-150 contrast-125' : ''}`}
                  />
                ) : (
                  <div className="text-5xl mb-2 relative z-10 transition-all duration-500 group-hover/skill:rotate-[360deg]">{skill.icon}</div>
                )}
                <p className="text-sm md:text-base text-center relative z-10 transition-all duration-300 group-hover/skill:text-yellow-400 group-hover/skill:font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
