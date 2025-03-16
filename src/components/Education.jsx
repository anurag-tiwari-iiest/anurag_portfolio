import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Confetti from 'react-confetti';
import { gsap } from "gsap";

// Education Data
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

    // GSAP Timeline Fill Animation
    gsap.fromTo(
      ".timeline-line",
      { height: "0%" },
      { height: "100%", duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <section 
      id="education" 
      className="w-screen h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900 py-8 px-6 relative overflow-hidden font-[Poppins]"
    >
      {/* Section Title */}
      <div className="md:px-24">      <h2 
        className="text-5xl font-bold text-left mb-16 border-b-4 border-yellow-400 pb-2  inline-block" 
        data-aos="fade-up"
      >
        Education
      </h2>
      </div>
      <div className="max-w-5xl mx-auto relative flex flex-col justify-center">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[30%] w-1 bg-gradient-to-b from-yellow-400 to-orange-600 h-[80%] before:bg-inherit"></div>

        {educationData.map((edu, index) => (
          <div 
            key={index}
            className="flex items-start mb-12 relative bg-white shadow-lg rounded-lg p-6
                       transition-all duration-300 ease-in-out transform hover:scale-[1.05] 
                       hover:bg-yellow-400 hover:shadow-2xl hover:text-gray-900 will-change-transform"
            data-aos="fade-up" 
            data-aos-delay={`${index * 200}`}
            onMouseEnter={() => setShowConfetti(true)}
            onMouseLeave={() => setShowConfetti(false)}
          >
            {/* Year on Left Side */}
            <div className="w-[30%] text-right pr-8">
              <p className="text-gray-500 text-xl font-semibold">{edu.year}</p>
            </div>

            {/* Education Details on Right Side */}
            <div className="w-[70%] pl-8">
              <h3 className="text-2xl font-semibold flex items-center">
                <span className="mr-2">{edu.icon}</span> {edu.degree}
              </h3>
              <p className="text-gray-800 text-lg">{edu.institution}</p>
              <p className="text-gray-700 mt-3 italic text-base">{edu.details}</p>
            </div>
          </div>
        ))}

        {/* Confetti Effect */}
        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={50} />}
      </div>
    </section>
  );
};

export default Education;
