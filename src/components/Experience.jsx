import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [hoveredTCS, setHoveredTCS] = useState(false);
  const [hoveredHesten, setHoveredHesten] = useState(false);

  return (
    <section 
      id="experience" 
      className="w-screen min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-100 text-gray-800 py-16 px-12 md:px-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,_rgba(6,182,212,0.3)_0%,transparent_50%)]"></div>
      
      <h2 
        className="text-5xl font-bold text-left mb-16 tracking-wide pb-2 relative z-10 md:px-24"
      >
        <span className="border-b-4 border-cyan-500 inline-block">Experience</span>
      </h2>

      <div className="space-y-12 relative z-10">
        <div 
          className={`max-w-5xl mx-auto backdrop-blur-md rounded-2xl shadow-xl p-8 transition-all duration-500 border-2 border-transparent ${
            hoveredTCS ? "md:scale-105 bg-white shadow-2xl border-cyan-400 md:-translate-y-2" : "bg-cyan-50/80"
          }`}
          onMouseEnter={() => setHoveredTCS(true)}
          onMouseLeave={() => setHoveredTCS(false)}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h3 className="text-3xl font-semibold flex items-center space-x-3">
              <FaBriefcase className="text-cyan-500 transition-transform duration-300 group-hover:rotate-12" />
              <span className="transition-all duration-300 hover:text-cyan-600">
                Mobile App Developer
              </span>
            </h3>
            <p className="text-gray-600 flex items-center space-x-2 mt-2 md:mt-0">
              <FaCalendarAlt className="text-cyan-500" />
              <span className="font-semibold">April 2025 - Present</span>
            </p>
          </div>

          <h4 className="text-2xl text-cyan-600 font-semibold mb-4">
            <span className={`transition-all duration-300 ${hoveredTCS ? "md:text-3xl" : "text-2xl"}`}>
              Tata Consultancy Services (Hyderabad)
            </span>
          </h4>

          <p className="text-gray-700 text-lg leading-relaxed transition-all duration-200 md:block hidden">
            {hoveredTCS
              ? "Building cross-platform mobile design systems and reusable UI components for iOS and Android with comprehensive testing and CI/CD integration."
              : <>
                  Working on the <span className="text-cyan-600 font-semibold">Mobile Application Development</span> team, specializing in native iOS and Android development. Building scalable, production-ready UI component libraries with cross-platform feature parity and comprehensive testing coverage.
                </>
            }
          </p>

          <p className="text-gray-700 text-lg leading-relaxed md:hidden">
            Building cross-platform mobile design systems and reusable UI components for iOS and Android with comprehensive testing and CI/CD integration.
          </p>

          <ul className={`text-gray-700 text-lg space-y-3 list-disc pl-5 mt-5 transition-all duration-300 md:block hidden ${hoveredTCS ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 overflow-hidden"}`}>
            <li>Developed <span className="text-cyan-600 font-semibold">30+ reusable UI components</span> in Swift/SwiftUI for iOS and Kotlin/Jetpack Compose for Android with complete feature parity.</li>
            <li>Implemented comprehensive testing using <span className="text-cyan-600 font-semibold">XCTest and JUnit</span>, achieving high code coverage for critical components.</li>
            <li>Built a <span className="text-cyan-600 font-semibold">cross-platform design system</span> supporting multiple states, light/dark modes, and platform-specific theming.</li>
            <li>Created interactive sample applications with preview screens to streamline design review and reduce QA validation cycles.</li>
            <li>Integrated <span className="text-cyan-600 font-semibold">Bitrise CI/CD pipelines</span> for automated builds and testing, eliminating manual deployment errors.</li>
            <li>Packaged components as <span className="text-cyan-600 font-semibold">Swift Package Manager library</span> and <span className="text-cyan-600 font-semibold">Gradle module</span> for seamless cross-team integration.</li>
            <li>Optimized rendering performance ensuring <span className="text-cyan-600 font-semibold">60fps animations</span> and smooth scrolling across all devices.</li>
            <li>Implemented <span className="text-cyan-600 font-semibold">VoiceOver and TalkBack</span> accessibility support for inclusive user experience.</li>
          </ul>

          <ul className="text-gray-700 text-lg space-y-3 list-disc pl-5 mt-5 md:hidden">
            <li>Developed <span className="text-cyan-600 font-semibold">30+ reusable UI components</span> in Swift/SwiftUI for iOS and Kotlin/Jetpack Compose for Android with complete feature parity.</li>
            <li>Implemented comprehensive testing using <span className="text-cyan-600 font-semibold">XCTest and JUnit</span>, achieving high code coverage for critical components.</li>
            <li>Built a <span className="text-cyan-600 font-semibold">cross-platform design system</span> supporting multiple states, light/dark modes, and platform-specific theming.</li>
            <li>Created interactive sample applications with preview screens to streamline design review and reduce QA validation cycles.</li>
            <li>Integrated <span className="text-cyan-600 font-semibold">Bitrise CI/CD pipelines</span> for automated builds and testing, eliminating manual deployment errors.</li>
            <li>Packaged components as <span className="text-cyan-600 font-semibold">Swift Package Manager library</span> and <span className="text-cyan-600 font-semibold">Gradle module</span> for seamless cross-team integration.</li>
            <li>Optimized rendering performance ensuring <span className="text-cyan-600 font-semibold">60fps animations</span> and smooth scrolling across all devices.</li>
            <li>Implemented <span className="text-cyan-600 font-semibold">VoiceOver and TalkBack</span> accessibility support for inclusive user experience.</li>
          </ul>
        </div>

        <div 
          className={`max-w-5xl mx-auto backdrop-blur-md rounded-2xl shadow-xl p-8 transition-all duration-500 border-2 border-transparent ${
            hoveredHesten ? "md:scale-105 bg-white shadow-2xl border-teal-400 md:-translate-y-2" : "bg-teal-50/80"
          }`}
          onMouseEnter={() => setHoveredHesten(true)}
          onMouseLeave={() => setHoveredHesten(false)}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h3 className="text-3xl font-semibold flex items-center space-x-3">
              <FaBriefcase className="text-teal-500" />
              <span className="transition-all duration-300 hover:text-teal-600">
                Software Developer Intern
              </span>
            </h3>
            <p className="text-gray-600 flex items-center space-x-2 mt-2 md:mt-0">
              <FaCalendarAlt className="text-teal-500" />
              <span className="font-semibold">May 2023 - July 2023</span>
            </p>
          </div>

          <h4 className="text-2xl text-teal-600 font-semibold mb-4">
            <span className={`transition-all duration-300 ${hoveredHesten ? "md:text-3xl" : "text-2xl"}`}>
              Hesten Solutions Pvt. Ltd. (Nagpur)
            </span>
          </h4>

          <p className="text-gray-700 text-lg leading-relaxed transition-all duration-200 md:block hidden">
            {hoveredHesten
              ? "Worked on optimizing web performance and improving scalability for high-traffic applications."
              : <>
                  Worked in the <span className="text-teal-600 font-semibold">Web Application Development</span> team for 8 weeks, focusing on designing and developing scalable web solutions. Contributed to building responsive and dynamic applications while collaborating with experienced developers.
                </>
            }
          </p>

          <p className="text-gray-700 text-lg leading-relaxed md:hidden">
            Worked on optimizing web performance and improving scalability for high-traffic applications.
          </p>

          <ul className={`text-gray-700 text-lg space-y-3 list-disc pl-5 mt-5 transition-all duration-300 md:block hidden ${hoveredHesten ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 overflow-hidden"}`}>
            <li>Optimized an e-commerce website's loading time by <span className="text-teal-600 font-semibold">26%</span> using code minification, lazy loading, and browser caching.</li>
            <li>Conducted a performance audit using <span className="text-teal-600 font-semibold">Google PageSpeed Insights</span> to identify bottlenecks.</li>
            <li>Reduced page load times, improving response rates during peak traffic periods.</li>
            <li>Implemented <span className="text-teal-600 font-semibold">CDNs</span> to distribute content closer to users, reducing latency.</li>
            <li>Utilized <span className="text-teal-600 font-semibold">Web Performance Optimization, JavaScript, and Git</span> to enhance website scalability.</li>
          </ul>

          <ul className="text-gray-700 text-lg space-y-3 list-disc pl-5 mt-5 md:hidden">
            <li>Optimized an e-commerce website's loading time by <span className="text-teal-600 font-semibold">26%</span> using code minification, lazy loading, and browser caching.</li>
            <li>Conducted a performance audit using <span className="text-teal-600 font-semibold">Google PageSpeed Insights</span> to identify bottlenecks.</li>
            <li>Reduced page load times, improving response rates during peak traffic periods.</li>
            <li>Implemented <span className="text-teal-600 font-semibold">CDNs</span> to distribute content closer to users, reducing latency.</li>
            <li>Utilized <span className="text-teal-600 font-semibold">Web Performance Optimization, JavaScript, and Git</span> to enhance website scalability.</li>
          </ul>

          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1EbjWo-5qNtOBUpB9OhMWBYKVTRbDdx9O/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg font-semibold text-teal-600 hover:text-teal-700 hover:underline transition-all duration-200 hover:scale-105"
            >
              View Internship Certificate <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;