import React from 'react';
import { useState } from 'react';
const About = () => {
    const [active, setActive] = useState(false);
  const effect = () => {
    if (!active) {
      document.querySelector(".abou").classList.add("-translate-x-[90%]");
      document.querySelector(".abou").classList.add("rounded-full")

      setActive(true);
    } else {
      document.querySelector(".abou").classList.remove("-translate-x-[90%]");
      document.querySelector(".abou").classList.remove("rounded-full")

      setActive(false);
    }
  };
    return (
       <div className=" h-full w-full bg-white relative flex flex-row flex-erap justify-around items-center  " id='About'>
           <div
        className="abou  bg-[#fda521] origin-top absolute w-full h-full transition-all transform duration-500 ease-in-out"
        onClick={effect}
      >
        <h1 className=" text-2xl font-bold w-full h-full flex justify-center items-center ">About.Me</h1>
      </div>
        <div className="flex w-max pl-[15%] h-full justify-center flex-col items-center p-20">
        <h1 className="  text-2xl font-bold w-full h-full flex justify-center items-center pb-5 ">About.Me</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus nobis laborum labore magnam aperiam recusandae. Officia facilis quam cumque. Vitae corporis vel culpa voluptates eaque sequi laborum non ad a quod, fuga mollitia in facilis vero porro praesentium iste aliquam, quis, suscipit cumque? Ullam, quae reprehenderit animi dolores repellendus veniam distinctio minus autem impedit accusantium voluptates! Esse quasi culpa, asperiores aliquam quibusdam animi maxime error itaque a nobis cupiditate labore laborum sed veniam blanditiis, doloremque rem! Doloremque distinctio animi, reiciendis optio officia quos eos facere facilis tempora ipsa rerum iusto atque quisquam perspiciatis dignissimos vitae nobis commodi minus! Assumenda.</p>
            </div>
       </div>
            
    );
}

export default About;
