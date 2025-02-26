import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ReachMe = () => {
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

      <h2 className={`${styles.sectionSubText} mb-6`}>
        Get in touch
      </h2>

      <p className="text-white-100 text-lg mb-6">
        Feel free to reach out to me for any inquiries, collaborations, or just a chat.
      </p>

      <div className="text-secondary text-[15px] space-y-4">
        <p><strong>Email:</strong> example@email.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/example</p>
        <p><strong>GitHub:</strong> github.com/example</p>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(ReachMe, "contact");
