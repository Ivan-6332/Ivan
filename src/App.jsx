import { BrowserRouter } from "react-router-dom";  // ✅ Add this import
import { Contact, Education, Navbar, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        
        {/* Components in the order they should appear */}
        <Contact />
        <Education />
        
        <div className='relative z-0'>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
