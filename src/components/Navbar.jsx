import React from "react";
import { useState , useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect (() => {
        const handleScroll = () => {
            if(window.scrollY > 150 ) {
                setActive(true)
            } else {
                setActive(false); 
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[]);


  return (
    <div className="navbar flex justify-between text-white py-7 items-center">
      <div className="logo ">
        <h1 className='font-mulish-800 text-3xl hidden md:block bg-white text-black p-1 md:bg-transparent md:text-white'>Portofolio</h1>
      </div>
      <ul className={`menu flex items-center sm:gap-10 gap-4 font-mulish-700 sm:text-xl text-base md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 -top-10 opacity-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}> 
        <li>
          <a href="#beranda">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
