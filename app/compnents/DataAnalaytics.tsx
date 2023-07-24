import React from 'react'

const DataAnalaytics = () => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 md:p-12">
      <div>
        <img src="./laptop.jpg" className="md:w-[500px] w-full mx-auto" />
      </div>
      <div className='space-y-3 h-full md:pt-14 px-4'>
        <p className="text-lg font-bold text-[#00df9a] uppercase">
          Data Analytics Dashboard
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-black pt-2">
          Manage Data Analytics Centrally
        </h1>
        <p className="text-black py-1 text-md text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, illo?
          Nisi repudiandae totam, fugit, blanditiis tenetur rerum, repellat
          ullam illum nemo necessitatibus distinctio consequuntur illo
          voluptatibus labore maxime deleniti eaque!
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <button
            type="button"
            className="bg-black py-4 px-16 rounded-md text-sm text-white my-4 font-bold"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default DataAnalaytics