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
      title: "Property Finder App",
      techStack: "React, Tailwind CSS, Context API",
      year: "2024",
      description: "A real estate platform allowing users to search and filter properties based on various criteria."
    },
    {
      title: "Ticketing System CLI",
      techStack: "Java, Multithreading, File Handling",
      year: "2023",
      description: "A command-line-based ticketing system with vendors and customers interacting in real-time."
    }
  ];

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

      <h2 className={`${styles.sectionSubText} mb-6`}>
        Some of my recent work
      </h2>
      
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
