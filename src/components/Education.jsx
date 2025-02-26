import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const EducationCard = ({ institution, degree, date, description }) => {
  return (
    <div className="bg-black-200 p-4 rounded-2xl flex-1 border border-tertiary">
      <div className="mb-3">
        <h3 className="text-white font-bold text-[18px]">{institution}</h3>
        <p className="text-secondary text-[13px]">{degree}</p>
      </div>
      
      <p className="text-white-100 font-medium text-[15px] mb-2">{date}</p>

      {/* Added extra blank line for spacing */}
      <p className="text-secondary text-[13px] mb-3">{description}</p>
    </div>
  );
};

const Education = () => {
  // Education information - only school and university
  const educationList = [
    {
      institution: "Dharmashoka College",
      degree: "Grade 1 - 13",
      date: "2008 - 2021",
      description: "Done my school education Including GCE O/L and A/L exams. Participated in various extracurricular activities and sports."
    },
    {
      institution: "IIT-Sri Lanka",
      degree: "BSc. in Computer Science",
      date: "2024 - 2027",
      description: "Currently following the degree program in Computer Science. Learning various programming languages and software development concepts."
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
        Education
      </h1>

      {/* Added extra margin for more space below this title */}
      <h2 className={`${styles.sectionSubText} mb-6`}>
        My academic journey
      </h2>
      
      <p className="text-white-100 text-lg mb-6">
        Here are the details of my academic journey from school to university.
      </p>

      {/* Displaying education cards in a straight line on larger screens */}
      <div className="flex flex-col sm:flex-row gap-5">
        {educationList.map((education, index) => (
          <EducationCard 
            key={`education-${index}`}
            {...education} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Education, "education");
