import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles"; // Importing styles from Education page

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageUrl = "/Ivan-Ivan.jpg"; // Path from the 'public' folder

  const toggleSize = () => {
    setIsExpanded(!isExpanded);
  };

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Bitbucket",
      url: "https://bitbucket.org/yourusername",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.03 8.73c-.29 0-.51.24-.47.51l2.54 15.47c.06.35.38.6.74.6h12.4c.27 0 .5-.19.55-.45l2.54-15.62c.04-.27-.18-.51-.47-.51H3.03z"></path>
          <path d="M14.22 15.95H9.78L8.5 10.14h6.94l-1.22 5.81z"></path>
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen flex justify-center items-center relative overflow-hidden bg-transparent"
    >
      {/* Transparent blurred background */}
      <div className="absolute inset-0 backdrop-blur-3xl"></div>

      {/* Foreground content */}
      <motion.div
        initial={{ width: "50%", height: "60%" }}
        animate={{
          width: isExpanded ? "80%" : "50%",
          height: isExpanded ? "85%" : "60%",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="relative rounded-lg overflow-hidden shadow-2xl z-10"
      >
        {/* Profile Image (Clicking this toggles details zoom) */}
        <motion.img
          src={imageUrl}
          alt="Ivan"
          className="w-full h-full object-cover cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={toggleSize}
        />

        {/* Details Section (Zooms in when clicked) */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-center items-center bg-black-100 p-6 rounded-2xl pointer-events-auto border-2 border-tertiary"
          >
            <h1 className={`${styles.sectionHeadText} text-white`}>Ivan De Zoysa</h1>

            <h2 className={`${styles.sectionSubText} mb-3`}>
              Full Stack Developer
            </h2>

            <p className="text-white-100 text-lg text-center mb-6">
              Passionate about building scalable web applications and
              continuously learning new technologies. Specializing in React,
              Node.js, and cloud computing.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-white-100 hover:bg-opacity-10"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Home;