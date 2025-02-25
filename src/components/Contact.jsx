import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// You'll need to import your own icons or use a library like react-icons
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const BitbucketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.9 13.2L8.2 5.8h8l1.3 7.4M18.4 13.2h-13"></path>
    <path d="M8.2 5.8c5.4-2.5 13.7 2.7 0 7.4"></path>
  </svg>
);

const Contact = () => {
  // Replace these with your actual information
  const personalInfo = {
    name: "Your Name",
    title: "Software Developer",
    description: "I'm a passionate software developer focused on creating elegant, efficient solutions. With expertise in React, Node.js, and cloud technologies, I build responsive web applications that deliver exceptional user experiences.",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    bitbucket: "https://bitbucket.org/yourusername"
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>
          {personalInfo.name}
        </h1>
        <h2 className={`${styles.sectionSubText} mb-4`}>
          {personalInfo.title}
        </h2>
        
        <p className="text-white-100 text-lg mb-8">
          {personalInfo.description}
        </p>
        
        <div className="flex flex-wrap gap-6 items-center">
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-tertiary py-3 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-primary transition-colors duration-300"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-tertiary py-3 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-primary transition-colors duration-300"
          >
            <GitHubIcon />
            GitHub
          </a>
          
          <a 
            href={personalInfo.bitbucket} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-tertiary py-3 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-primary transition-colors duration-300"
          >
            <BitbucketIcon />
            Bitbucket
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "home");