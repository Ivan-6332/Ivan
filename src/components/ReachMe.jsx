import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ReachMe = () => {
  // Simple SVG icons
  const icons = {
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    bitbucket: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M2.65 3C2.3 3 2 3.3 2 3.65v.07l2.73 16.7c.07.41.43.73.85.73h13.05c.31 0 .59-.22.64-.53l2.73-16.88v-.09c0-.35-.3-.65-.65-.65zm13.49 12.61h-6.15l-1.27-6.57h8.35z" />
      </svg>
    )
  };

  const contactItems = [
    { icon: icons.email, label: "Email", value: "ivanakalanka@gmail.com", link: "mailto:ivanakalanka@gmail.com" },
    { icon: icons.phone, label: "Phone", value: "+94 772606332" },
    { icon: icons.linkedin, label: "LinkedIn", value: "linkedin.com/in/ivan-de-zoysa", link: "https://www.linkedin.com/in/ivan-de-zoysa-28640b338/" },
    { icon: icons.github, label: "GitHub", value: "github.com/Ivan-6332", link: "https://github.com/Ivan-6332" },
    { icon: icons.bitbucket, label: "Bitbucket", value: "bitbucket.org/example", link: "https://bitbucket.org/example" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className='w-full max-w-2xl bg-black-100 p-6 rounded-2xl pointer-events-auto border-2 border-tertiary'
    >
      <h1 className={`${styles.sectionHeadText} text-white`}>
        Reach Me
      </h1>

      <h2 className={`${styles.sectionSubText} mb-4`}>
        Get in touch
      </h2>

      <p className="text-white-100 text-[15px] mb-5">
        Feel free to reach out to me for any inquiries, collaborations, or just a chat.
      </p>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-3"
      >
        {contactItems.map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="flex items-center space-x-3 group"
          >
            <div className="p-2 rounded-full bg-tertiary/20 text-tertiary group-hover:bg-tertiary group-hover:text-white-100 transition-all duration-300">
              {item.icon}
            </div>
            <div>
              <p className="text-secondary text-[13px]">{item.label}</p>
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-[15px] hover:text-tertiary transition-colors duration-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white text-[15px]">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-4 pt-3 border-t border-tertiary/30 text-center"
      >
        <p className="text-secondary text-xs">Let's create something amazing together!</p>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(ReachMe, "contact");