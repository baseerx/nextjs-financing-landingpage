'use client'
import React from 'react'
import {TypeAnimation} from "react-type-animation";
const Hero = () => {
  return (
    <div className="h-screen -mt-16 w-full relative flex flex-col justify-center items-center gap-4 pt-8">
      <p className="uppercase text-[#00df9a] text-lg font-bold">
        Growing with data analytics
      </p>
      <h1 className="font-bold text-6xl text-white">Grow with data.</h1>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          "Fast,flexible financing for BTB",
          1000,
          "Fast,flexible financing for BTC",
          1000,
          "Fast,flexible financing for Guinea SASS",
          1000,
        ]}
        className="font-bold"
        speed={25}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />
      <p className='text-xl text-gray-600 text-center font-bold'>
        Monitor your data analytics to increase revenue for BTB, BTC, & SASS
        platforms.
          </p>
          <button type="button" className='bg-[#00df9a] py-3 px-14 rounded-md text-sm text-black font-bold'>Get Started</button>
    </div>
  );
}

export default Hero