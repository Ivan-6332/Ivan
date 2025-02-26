import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Education, Navbar, StarsCanvas, EarthCanvas, Projects, ReachMe } from "./components";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home"; // Importing Home component

const App = () => {
  // State to track which page is currently active
  const [activePage, setActivePage] = useState("home");

  // Function to handle page navigation
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary h-screen'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar onNavLinkClick={handlePageChange} activePage={activePage} />
        </div>

        {/* Earth and stars background (persistent) */}
        <div className='fixed inset-0 z-0'>
          <StarsCanvas />
        </div>

        {/* Main content layout */}
        <div className='fixed inset-0 z-10 pt-16 flex'>
          <div className='w-full lg:w-1/2 h-full pt-2 pb-4 px-4'>
            <AnimatePresence mode="wait">
              {/* Home Page */}
              {activePage === "home" && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex justify-center items-center"
                >
                  <Home />
                </motion.div>
              )}

              {/* Education Page */}
              {activePage === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex justify-center items-center"
                >
                  <Education />
                </motion.div>
              )}

              {/* Projects Page */}
              {activePage === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex justify-center items-center"
                >
                  <Projects />
                </motion.div>
              )}

              {/* Reach Me (Contact) Page */}
              {activePage === "contact" && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex justify-center items-center"
                >
                  <ReachMe />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Earth canvas - right side with increased size */}
          <div className='hidden lg:block lg:w-1/2 h-full'>
            <div className="w-full h-full scale-90 origin-center flex justify-center items-center">
              <EarthCanvas />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
