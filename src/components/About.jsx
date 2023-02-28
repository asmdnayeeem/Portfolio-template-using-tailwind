import React from 'react';
const About = () => {
    return (
    <div className='relative top-[2em]'>
        <div className=' flex  flex-wrap items-center justify-center' id='About'>
            <div className="w-full h-full bg-[#fda521] absolute rotate-45 -translate-x-1/3 rounded-full -translate-y-1/2 shadow-2xl"></div>
            <div className="w-full h-full -z-10 bg-[#6321fd] absolute  -translate-x-1/2 rounded-full translate-y-[10%] shadow-2xl"></div>
            <h1 className=' inset-20 absolute text-5xl font-bold '>Hi! There</h1>
        <div className=' z-10 flex flex-2 flex-wrap flex-col items-center justify-center w-full  h-[30rem]' >
            <p className=' text-center text-3xl'>I am Mahammd Nayeem</p>
            <p className=' text-center mt-5 text-2xl '>Web dev && Tech Enthusiastic</p>
        </div>
        </div>
        </div>
    );
}

export default About;
