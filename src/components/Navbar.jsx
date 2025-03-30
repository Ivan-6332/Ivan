import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaGraduationCap, FaLaptopCode, FaEnvelope } from "react-icons/fa";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = ({ onNavLinkClick, activePage }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Define navigation links with titles and icons
  const navLinks = [
    { id: "home", icon: FaHome, title: "Home" },
    { id: "education", icon: FaGraduationCap, title: "Education" },
    { id: "projects", icon: FaLaptopCode, title: "Projects" },
    { id: "contact", icon: FaEnvelope, title: "Reach Me" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active state when activePage changes
  useEffect(() => {
    const activeLink = navLinks.find(link => link.id === activePage);
    if (activeLink) {
      setActive(activeLink.id);
    }
  }, [activePage]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            onNavLinkClick("home");
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Ivan &nbsp;
            <span className='sm:block hidden'> | De Zoysa</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer flex flex-col items-center gap-1 transition-all duration-300 ease-in-out`}
              onClick={() => {
                setActive(nav.id);
                onNavLinkClick(nav.id);
              }}
            >
              <div className='flex flex-col items-center gap-1 group'>
                <div className={`rounded-lg p-2 transition-transform duration-300 ${
                  active === nav.id ? 'text-white scale-110' : 'text-secondary hover:scale-110'
                }`}>
                  <nav.icon size={20} className={`${active === nav.id ? 'animate-pulse' : ''}`} />
                </div>
                <span className={`text-sm transition-opacity duration-300 ${
                  active === nav.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                }`}>{nav.title}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  } flex items-center gap-3`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                    onNavLinkClick(nav.id);
                  }}
                >
                  <div className={`p-1 rounded-lg ${active === nav.id ? 'text-white' : 'text-secondary'}`}>
                    <nav.icon size={16} />
                  </div>
                  <span>{nav.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;