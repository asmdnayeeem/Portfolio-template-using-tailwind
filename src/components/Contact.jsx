import React from "react";
import { Link } from "react-router-dom";
import { logoData } from "../assests/logo.js";
const Contact = () => {

  return (
    <div
      className="bg-white h-full relative bottom-0 flex flex-col justify-center p-16 items-center  "
      id="Contact"
    >
      <div className="w-full h-full z-0 bg-[#6321fd] absolute  -translate-x-[16%] rounded-r-full shadow-2xl "></div>
      <h1 className="z-20 text-black font-bold text-2xl">Contact</h1>
      <p className="z-20 font-light pt-5 pb-5 text-xl">Let's Connect</p>
      {/* <div className=" bg-white  w-full translate-y-[100%] h-full absolute ">
      </div> */}
      <div className="z-20  grid grid-cols-3 gap-9 pb-20 top-3 ">
        {logoData.map((item) => {
          return (
            <Link to={item.link} target="_blank">
              <img
                className="w-14 h-14 box-border  bg-white p-1.5 rounded-full shadow-xl"
                src={item.logo}
                alt=" "
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
