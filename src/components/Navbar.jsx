import React from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Sling as Hamburger } from 'hamburger-react'
const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  const expand = () => {
    if (isOpen) {
      document.querySelector('.navbar').classList.add('sm:hidden')
      document.querySelector('.navbar').classList.remove('sm:flex')
    } else {
      document.querySelector('.navbar ').classList.remove('sm:hidden')
      document.querySelector('.navbar ').classList.add('sm:flex')
    }
  }
  return (

    <>
      <div className="w-full h-18 bg-[#fda521]  z-30  sm:fixed  shadow-sm  ">
         
        <ul>
          <div className="navbar z-50 bg-[#fda521] flex-row gap-10 text-lg font-light h-18 w-full  fixed justify-center flex  text-black p-4  shadow-sm sm:hidden sm:items-center sm:flex-col duration-600 pt-6">

          
          <li>
            <Link className="hover:font-medium" to="#Home" smooth>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:font-medium" to="#Skills" smooth>
              Skills
            </Link>
          </li>
          <li>
            <Link className="hover:font-medium" to="#About" smooth>
              About
            </Link>
          </li>
       
          <li>
            <Link className="hover:font-medium" to="#Contact" smooth>
              Contact
            </Link>
          </li>
          </div>
          <li className=" z-50  fixed top-0 right-5 pb-4 hidden sm:flex "><Hamburger toggled={isOpen} toggle={setOpen} onToggle={expand}/></li>
        </ul>



      </div>
    </>
 
  );
};

export default NavBar;
