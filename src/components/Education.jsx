import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, title, institution, date, description, logo }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="flex items-center gap-4 mb-4">
        {logo && (
          <div className="w-14 h-14 rounded-full flex justify-center items-center bg-tertiary">
            <img src={logo} alt={institution} className="w-10 h-10 object-contain" />
          </div>
        )}
        <div>
          <h3 className="text-white font-bold text-[20px]">{title}</h3>
          <p className="text-secondary text-[14px]">{institution}</p>
        </div>
      </div>
      
      <p className="text-white-100 font-medium text-[16px] mb-2">{date}</p>
      <p className="text-secondary text-[14px]">{description}</p>
    </motion.div>
  );
};

const Education = () => {
  // Replace with your actual education information
  const educationList = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      date: "2018 - 2022",
      description: "Specialized in software engineering and web development. Completed coursework in data structures, algorithms, database systems, and web technologies. Graduated with honors and received the Outstanding Achievement Award.",
      logo: "/university-logo.png" // Replace with your actual logo path
    },
    {
      title: "Full Stack Web Development",
      institution: "Tech Academy",
      date: "2017 - 2018",
      description: "Intensive bootcamp focused on modern web development technologies including React, Node.js, and cloud infrastructure. Completed 5 major projects and collaborated with industry partners.",
      logo: "/academy-logo.png" // Replace with your actual logo path
    },
    {
      title: "High School Diploma",
      institution: "Central High School",
      date: "2014 - 2018",
      description: "Focused on computer science and mathematics. Participated in national programming competitions and led the school's tech club.",
      logo: "/school-logo.png" // Replace with your actual logo path
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My academic journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My educational background has provided me with a strong foundation in computer science 
          principles and practical development skills. Each program has contributed to my growth 
          as a developer and prepared me for the challenges of the tech industry.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {educationList.map((education, index) => (
          <EducationCard 
            key={`education-${index}`} 
            index={index} 
            {...education} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");