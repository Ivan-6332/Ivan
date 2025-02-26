import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ title, techStack, year, description }) => {
  return (
    <div className="bg-black-200 p-4 rounded-2xl flex-1 border border-tertiary">
      <div className="mb-3">
        <h3 className="text-white font-bold text-[18px]">{title}</h3>
        <p className="text-secondary text-[13px]">{techStack}</p>
      </div>
      
      <p className="text-white-100 font-medium text-[15px] mb-2">{year}</p>

      <p className="text-secondary text-[13px] mb-3">{description}</p>
    </div>
  );
};

const Projects = () => {
  // List of projects
  const projectsList = [
    {
      title: "Google Drive Clone",
      techStack: "Next.js, Tailwind CSS, Google API, Appwrite",
      year: "2025",
      description: "A Google Drive clone with user authentication, file upload, and sharing capabilities."
    },
    {
      title: "Fresh Track SL",
      techStack: "Flutter, Node.js, Supabase, Linear regression",
      year: "On-going",
      description: "A mobile app that conntects farmers with buyers, providing real-time crop prices.Also this will work as a demand management system for farmers."
    }
  ];

  // GitHub profile link
  const githubProfileUrl = "https://github.com/Ivan-6332";

  // Function to handle GitHub button click
  const handleGitHubClick = () => {
    window.open(githubProfileUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className='w-full max-w-2xl bg-black-100 p-6 rounded-2xl pointer-events-auto border-2 border-tertiary'
    >
      <h1 className={`${styles.sectionHeadText} text-white`}>
        Projects
      </h1>

      <div className="flex justify-between items-center mb-6">
        <h2 className={`${styles.sectionSubText}`}>
          Some of my recent work
        </h2>
        
        <button 
          onClick={handleGitHubClick}
          className="bg-tertiary py-2 px-5 rounded-lg text-white font-bold shadow-md hover:bg-opacity-80 transition-all flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Interested
        </button>
      </div>
      
      <p className="text-white-100 text-lg mb-6">
        These projects showcase my expertise in web development and software engineering, focusing on clean code and scalability.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        {projectsList.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            {...project} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Projects, "projects");