import React from "react";

const Plans = () => {
  return (
    <div className="bg-white py-12">
      <div className="flex flex-col flex-wrap md:flex md:flex-row items-center justify-evenly gap-12 h-full w-full">
        <div className="rounded-md shadow-md px-20 h-full shadow-gray-600">
          <div className="flex flex-col flex-wrap h-full text-center text-black">
            <div className="relative flex justify-center">
              <img
                src="./single.png"
                alt="single"
                className="w-[120px] absolute -top-10"
              />
            </div>
            <h1 className="font-bold text-2xl h-full mt-20">Single User</h1>
            <h1 className="font-bold text-2xl h-full py-8">$149</h1>
            <p className="text-lg">500 GB Storage</p>
            <p className="text-lg py-4">1 Granted User</p>
            <p className="text-lg">Send up to 2 GB</p>
            <button
              type="button"
              className="my-6 px-2 py-3 w-full mx-auto bg-[#00df9a] rounded-md"
            >
              Start Trial
            </button>
          </div>
        </div>
        <div className="rounded-md px-20 shadow-md h-full shadow-gray-600">
          <div className="flex flex-col flex-wrap h-full text-center text-black">
            <div className="relative flex justify-center">
              <img
                src="./double.png"
                alt="single"
                className="w-[120px] absolute -top-10"
              />
            </div>
            <h1 className="font-bold text-2xl h-full mt-20">Double User</h1>
            <h1 className="font-bold text-2xl h-full py-8">$149</h1>
            <p className="text-lg">500 GB Storage</p>
            <p className="text-lg py-4">1 Granted User</p>
            <p className="text-lg">Send up to 2 GB</p>
            <button
              type="button"
              className="my-6 md:px-2 py-3 w-full mx-auto bg-[#00df9a] rounded-md"
            >
              Start Trial
            </button>
          </div>
        </div>
        <div className="px-20 rounded-md shadow-md h-full shadow-gray-600">
          <div className="flex flex-col flex-wrap h-full text-center text-black">
            <div className="relative flex justify-center">
              <img
                src="./triple.png"
                alt="single"
                className="w-[120px] absolute -top-10"
              />
            </div>
            <h1 className="font-bold text-2xl h-full mt-20">Triple User</h1>
            <h1 className="font-bold text-2xl h-full py-8">$149</h1>
            <p className="text-lg">500 GB Storage</p>
            <p className="text-lg py-4">1 Granted User</p>
            <p className="text-lg">Send up to 2 GB</p>
            <button
              type="button"
              className="my-6 md:px-2 py-3 w-full mx-auto bg-[#00df9a] rounded-md"
            >
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
