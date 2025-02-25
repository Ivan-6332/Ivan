import React, { useState } from "react"; 
import { BrowserRouter } from "react-router-dom"; 
import { Contact, Education, Navbar, StarsCanvas, EarthCanvas } from "./components"; 
import { AnimatePresence, motion } from "framer-motion";  

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
        
        {/* Main content layout with adjusted positioning */}         
        <div className='fixed inset-0 z-10 pt-16 flex'>           
          {/* Content area - removed overflow-y-auto */}           
          <div className='w-full lg:w-3/5 h-full pt-2 pb-4 px-4'>             
            <AnimatePresence mode="wait">               
              {activePage === "home" && (                 
                <motion.div                   
                  key="home"                   
                  initial={{ opacity: 0 }}                   
                  animate={{ opacity: 1 }}                   
                  exit={{ opacity: 0 }}                   
                  transition={{ duration: 0.5 }}                   
                  className="h-full flex justify-center items-center"                 
                >                   
                  <Contact />                 
                </motion.div>               
              )}                              
              
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
            </AnimatePresence>           
          </div>                      
          
          {/* Earth canvas - right side with reduced size */}           
          <div className='hidden lg:block lg:w-2/5 h-full'>             
            <div className="w-full h-full scale-75 origin-center">               
              <EarthCanvas />             
            </div>           
          </div>         
        </div>       
      </div>     
    </BrowserRouter>   
  ); 
};  

export default App;