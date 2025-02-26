import React, { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageUrl = "/Ivan-Ivan.jpg"; // Path from the 'public' folder

  const toggleSize = () => {
    setIsExpanded(!isExpanded);
  };

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
        initial={{ width: "50%", height: "60%" }} // Increased height from 50% to 60%
        animate={{
          width: isExpanded ? "80%" : "50%",
          height: isExpanded ? "85%" : "60%", // Increased both sizes
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="relative rounded-lg overflow-hidden shadow-2xl z-10"
        onClick={toggleSize}
      >
        <motion.img
          src={imageUrl}
          alt="Ivan"
          className="w-full h-full object-cover cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-4 left-0 right-0 text-center text-white text-xl font-bold"
        >
          IVAN
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
