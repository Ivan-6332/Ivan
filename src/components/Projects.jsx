import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaAngular, 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaDatabase,
  FaNodeJs,
  FaCss3
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const TechIcon = ({ Icon, tooltip }) => (
  <div className="group relative">
    <Icon className="w-8 h-8 text-white hover:text-tertiary transition-colors" />
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 
      bg-black-200 text-white text-xs px-2 py-1 rounded opacity-0 
      group-hover:opacity-100 transition-opacity duration-300 
      pointer-events-none">
      {tooltip}
    </span>
  </div>
);

const ProjectCard = ({ title, techStack, year, description, githubLink }) => {
  return (
    <div className="bg-black-200/40 p-6 rounded-2xl border border-tertiary/30 relative flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="mb-4 flex justify-between items-start">
        <div>
          <h3 className="text-white font-bold text-[20px] mb-1">{title}</h3>
          <p className="text-tertiary text-[14px] font-medium">{techStack}</p>
        </div>
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-tertiary transition-colors ml-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
      </div>
      
      <p className="text-secondary text-[14px] mb-4 font-light">{year}</p>

      <p className="text-white-100 text-[15px] flex-grow leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Projects = () => {
  const projectsList = [
    {
      title: "Google Drive Clone",
      techStack: "Next.js, Tailwind CSS, Google API, Appwrite",
      year: "2025",
      description: "A comprehensive Google Drive clone featuring robust user authentication, seamless file upload capabilities, and advanced file sharing functionalities. Leveraging modern web technologies to create an intuitive cloud storage solution."
    },
    {
      title: "Fresh Track SL",
      techStack: "Flutter, Node.js, Supabase, Linear regression",
      year: "On-going",
      description: "An innovative mobile application bridging the gap between farmers and buyers. Provides real-time crop price insights and implements a sophisticated demand management system to optimize agricultural marketplace dynamics."
    },
    {
      title: "Fresh Track SL Website",
      techStack: "React, Tailwind CSS, Node.js",
      year: "2024",
      description: "Companion web platform for the Fresh Track SL mobile application. Delivers comprehensive information, resources, and interactive features to support farmers and buyers in making informed agricultural decisions.",
      githubLink: "https://github.com/yourusername/fresh-track-website"
    },
    {
      title: "Real Estate Web Platform",
      techStack: "Angular, Spring Boot, PostgreSQL",
      year: "2024",
      description: "A sophisticated real estate platform offering comprehensive property listings, secure user authentication, and advanced search capabilities. Designed to provide an seamless property discovery and management experience.",
      githubLink: "https://github.com/yourusername/real-estate-platform"
    },
    {
      title: "Bone Rush 2D Animated Game",
      techStack: "Unity, C#, 2D Game Development",
      year: "2023",
      description: "An engaging 2D animated game featuring unique mechanical interactions and an immersive gameplay experience. Developed with intricate design principles and creative game development techniques.",
      githubLink: "https://github.com/yourusername/bone-rush-game"
    }
  ];

  const techStack = [
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaAngular, name: "Angular" },
    { icon: FaJava, name: "Java" },
    { icon: FaPython, name: "Python" },
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaDatabase, name: "SQL" }
  ];

  const githubProfileUrl = "https://github.com/Ivan-6332";

  const handleGitHubClick = () => {
    window.open(githubProfileUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className='w-full max-w-xl p-6 rounded-2xl pointer-events-auto'
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

      {/* Tech Stack Section */}
      <div className="mb-10">
        <h3 className={`${styles.sectionSubText} text-white mb-8`}>My Tech Stack</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {techStack.map((tech, index) => (
            <TechIcon key={index} Icon={tech.icon} tooltip={tech.name} />
          ))}
        </div>
      </div>

      {/* Scrollable Projects Container */}
      <div className="max-h-[300px] overflow-y-auto space-y-5 pr-3">
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