import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Confetti from 'react-confetti';
import { gsap } from "gsap";

const educationData = [
  {
    year: "2020 - 2024",
    degree: "B.Tech in Electrical Engineering",
    institution: "Indian Institute of Engineering Science and Technology (IIEST), Shibpur",
    details: "CGPA: 8.43",
    icon: "🎓"
  },
  {
    year: "2019 - 2020",
    degree: "Higher Secondary Education (12th Grade)",
    institution: "St. Paul Junior College, Nagpur",
    details: "Percentage: 86.46%",
    icon: "🏫"
  },
  {
    year: "2017 - 2018",
    degree: "Senior Secondary Education (10th Grade)",
    institution: "Jawaharlal Darda Convent, Nagpur",
    details: "Percentage: 94.40%",
    icon: "📖"
  }
];

const Education = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 300, once: false, offset: 50 });

    gsap.fromTo(
      ".timeline-line",
      { height: "0%" },
      { height: "100%", duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <section 
      id="education" 
      className="w-screen min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100 text-gray-900 py-16 px-6 relative overflow-hidden font-[Poppins] flex flex-col"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,_rgba(251,146,60,0.3)_0%,transparent_50%)]"></div>
      
      <div className="md:px-24 relative z-10">      
        <h2 
          className="text-5xl font-bold text-left mb-12 pb-2" 
          data-aos="fade-up"
        >
          <span className="border-b-4 border-orange-500 inline-block">Education</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative flex flex-col justify-center flex-1 px-4">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 via-pink-400 to-purple-500 hidden md:block"></div>

        {educationData.map((edu, index) => (
          <div 
            key={index}
            className="relative mb-16 flex items-center"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block z-20">
              <div 
                className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-4 border-white shadow-lg hover:scale-150 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setShowConfetti(true)}
                onMouseLeave={() => setShowConfetti(false)}
              ></div>
            </div>

            {/* Year Badge - Left side for even, Right for odd */}
            <div className={`absolute ${index % 2 === 0 ? 'left-0 md:right-1/2 md:mr-12' : 'right-0 md:left-1/2 md:ml-12'} w-full md:w-auto hidden md:block`}>
              <div 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-bold text-xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                onMouseEnter={() => setShowConfetti(true)}
                onMouseLeave={() => setShowConfetti(false)}
              >
                <span className="text-3xl">{edu.icon}</span>
                <span>{edu.year}</span>
              </div>
            </div>

            {/* Content Card - Right side for even, Left for odd */}
            <div 
              className={`w-full ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'} md:w-[58%] group`}
              onMouseEnter={() => setShowConfetti(true)}
              onMouseLeave={() => setShowConfetti(false)}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:rotate-1 border-2 border-transparent hover:border-orange-400 relative overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-pink-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Mobile Year Badge */}
                  <div className="md:hidden inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-bold text-lg mb-4 shadow-md">
                    <span className="text-2xl">{edu.icon}</span>
                    <span>{edu.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 mb-3 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-base text-orange-600 font-bold bg-orange-50 inline-block px-4 py-2 rounded-lg">
                    {edu.details}
                  </p>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-300 opacity-20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        ))}

        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={100} recycle={false} gravity={0.3} />}
      </div>
    </section>
  );
};

export default Education;
