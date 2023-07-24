import React from 'react'

const NewsLetter = () => {
  return (
    <div className="h-72 w-full bg-black py-8 text-white flex flex-col items-start md:items-center md:flex-row gap-8 md:gap-4 px-4">
      <div className='w-full'>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
          Want tips & tricks to optimize your flow?
        </h1>
        <p>Sign up to our newsletter and stay up to date.</p>
      </div>
      <div className='w-full'>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-white text-black py-3 px-4 rounded-md w-[75%]"
          />
          <button
            type="button"
            className="rounded-md py-2 px-4 bg-[#00df9a] text-black w-[25%]"
          >
            Notify me
          </button>
        </div>
        <p>
          We care bout the protection of your data. Read our{" "}
          <span className="text-[##00df9a]">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default NewsLetter