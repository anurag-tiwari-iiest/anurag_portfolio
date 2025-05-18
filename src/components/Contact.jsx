import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaPhone, FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const email = "iamanuragtiwari101@gmail.com";
  const phone = "+91-9561116958";

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-screen h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6 md:px-10 lg:px-20 font-sans">
      <h1 className="text-5xl md:text-7xl font-bold mb-3">Anurag Vinod Tiwari</h1> <br />
      <p className="text-xl md:text-2xl text-gray-400">Software Development Engineer</p>
      <p className="text-lg md:text-xl text-gray-400 mt-2 flex items-center justify-center">
        <FaMapMarkerAlt className="mr-2 text-yellow-400" />
        Hyderabad, India
      </p>

      <div className="mt-8 space-y-5">
        <div className="flex items-center justify-center space-x-4 text-xl">
          <motion.span
            animate={{ scale: emailCopied ? 1.2 : 1 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
            onClick={() => copyToClipboard(email, setEmailCopied)}
          >
            {emailCopied ? <FaCheck className="text-green-400 text-2xl" /> : <FaEnvelope className="text-yellow-400 text-2xl" />}
          </motion.span>
          <span className="text-gray-300">{email}</span>
        </div>
        <div className="flex items-center justify-center space-x-4 text-xl">
          <motion.span
            animate={{ scale: phoneCopied ? 1.2 : 1 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
            onClick={() => copyToClipboard(phone, setPhoneCopied)}
          >
            {phoneCopied ? <FaCheck className="text-green-400 text-2xl" /> : <FaPhone className="text-yellow-400 text-2xl" />}
          </motion.span>
          <span className="text-gray-300">{phone}</span>
        </div>
        
        <div className="flex justify-center space-x-8 text-6xl mt-6">
          <a
            href="https://github.com/anurag-tiwari-iiest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-tiwari-84ab3623b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />

      <motion.p 
        className="bottom-10 text-sm text-gray-500 flex items-center space-x-1"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
      >
        <span>Handcrafted with</span>
        <motion.span
          animate={{ scale: [1, 1.4, 1], color: ["#fff", "#ff0000", "#ff0000"] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaHeart className="text-red-500" />
        </motion.span>
        <span> by Anurag Vinod Tiwari</span>
      </motion.p>
    </section>
  );
};

export default Contact;
