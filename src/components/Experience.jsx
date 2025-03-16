import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [hovered, setHovered] = useState(false);

  return (
    <section 
      id="experience" 
      className="w-screen min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800 py-8 px-12 md:px-24"
    >
      <h2 className="text-5xl font-bold text-center mb-16 tracking-wide border-b-4 border-yellow-500 inline-block mx-auto pb-2">
        Experience
      </h2>

      <div 
        className={`max-w-4xl mx-auto backdrop-blur-md rounded-xl shadow-lg p-8 transition-all ${
          hovered ? "scale-105 bg-white bg-opacity-90" : "scale-100 bg-gray-100 bg-opacity-70"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h3 className="text-3xl font-semibold flex items-center space-x-3">
            <FaBriefcase className="text-yellow-500" />
            <span className="transition-all duration-200">
              Software Developer Intern
            </span>
          </h3>
          <p className="text-gray-600 flex items-center space-x-2">
            <FaCalendarAlt className="text-yellow-500" />
            <span>May 2023 - July 2023</span>
          </p>
        </div>

        <h4 className={`text-2xl text-yellow-500 font-semibold mb-4 transition-all ${hovered ? "text-3xl" : "text-2xl"}`}>
          Hesten Solutions Pvt. Ltd. (Nagpur)
        </h4>

        <p className="text-gray-700 text-lg leading-relaxed transition-all duration-200">
          {hovered
            ? "Worked on optimizing web performance and improving scalability for high-traffic applications."
            : <>
                Worked in the <span className="text-yellow-500 font-semibold">Web Application Development</span> team for 8 weeks, focusing on designing and developing scalable web solutions. Contributed to building responsive and dynamic applications while collaborating with experienced developers.
              </>
          }
        </p>

        <ul className={`text-gray-700 text-lg space-y-3 list-disc pl-5 mt-5 transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <li>Optimized an e-commerce website's loading time by <span className="text-yellow-500 font-semibold">26%</span> using code minification, lazy loading, and browser caching.</li>
          <li>Conducted a performance audit using <span className="text-yellow-500 font-semibold">Google PageSpeed Insights</span> to identify bottlenecks.</li>
          <li>Reduced page load times, improving response rates during peak traffic periods.</li>
          <li>Implemented <span className="text-yellow-500 font-semibold">CDNs</span> to distribute content closer to users, reducing latency.</li>
          <li>Utilized <span className="text-yellow-500 font-semibold">Web Performance Optimization, JavaScript, and Git</span> to enhance website scalability.</li>
        </ul>

        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1EbjWo-5qNtOBUpB9OhMWBYKVTRbDdx9O/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-semibold text-yellow-500 hover:underline hover:text-yellow-600 transition duration-200"
          >
            View Internship Certificate <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;