import React from "react";
import Typed from 'react-typed';
const Hero = () => {
  return ( 
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">Growing with data analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4">Grow with data.</h1>
        <div className="flex justify-center">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold pr-2 md:pr-4">Fast, flexible finacing for </p>
          <Typed strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} className="md:text-5xl sm:text-3xl text-xl font-bold text-gray-500" loop/>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 py-2">
          Monitor your data analytics to increase revenue for BTB,BTC & SASS platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-4 py-3 text-black">Get Started</button>
      </div>
    </div>
   );
}
 
export default Hero;