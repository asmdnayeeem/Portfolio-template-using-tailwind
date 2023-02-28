import React from "react";
import { useState } from "react";
import { logo } from "../assests/skill";
const Skills = () => {
  const [active, setActive] = useState(false);
  const effect = () => {
    if (!active) {
      document.querySelector(".eff").classList.add("-translate-x-1/2");
      document.querySelector(".eff").classList.add("-translate-y-10");
      document.querySelector(".eff").classList.add("rotate-45")
      document.querySelector(".eff").classList.add("rounded-full")
      document.querySelector(".ski").classList.add("z-20")

      setActive(true);
    } else {
      document.querySelector(".eff").classList.remove("-translate-x-1/2");
      document.querySelector(".eff").classList.remove("rotate-45");
      document.querySelector(".eff").classList.remove("-translate-y-10");
      document.querySelector(".ski").classList.remove("z-20")

      document.querySelector(".eff").classList.remove("rounded-full")

      setActive(false);
    }
  };
  return (
    <div
      className=" bg-[white] flex justify-center p-10  w-full flex-col relative  items-center mt-10"
      id="Skills"
    >
      <div
        className="eff  bg-[#fda521] origin-top absolute w-full h-full transition-all transform duration-500 ease-in-out"
        onClick={effect}
      >
        <h1 className=" text-black text-2xl font-bold w-full h-full flex justify-center items-center ">My.Skills</h1>
      </div>
      <h1 className=" text-black text-2xl font-bold">My Skills</h1>
      <div className="ski flex  flex-wrap gap-10 justify-center  mt-6">
        {logo.map((item) => {
          return (
            <img
              className="w-14 h-14 box-border  bg-white p-1.5 rounded-full shadow-xl"
              src={item.image}
              alt=" "
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
