import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black h-full w-full py-12 text-white container mx-auto">
      <div className="flex flex-col md:flex-row md:gap-12 gap-8 justify-center items-center sm:px-4 max-sm:4">
        <div className="flex flex-col flex-wrap w-full md:w-[30%] gap-6">
          <h2 className="text-3xl uppercase font-bold text-[#00df9a] px-4">
            React.
          </h2>
          <p className="text-justify leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            molestias ex cupiditate labore maxime, totam minus quo, neque iste
            et fuga veniam magni repudiandae optio, hic aliquam quasi eveniet
            ratione.
          </p>
          <div className="flex flex-row gap-4 md:gap-6">
            
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
              <FaDribbbleSquare size={30} />
          
          </div>
              </div>
              
              <div className="flex flex-row justify-evenly md:w-[70%] w-full py-6">
                  <div className="flex flex-col gap-3">
                      <p className="text-xl text-gray-300">Solutions</p>
                      <p className="text-sm text-gray-300">Analytics</p>
                      <p className="text-sm text-gray-300">Marketing</p>
                      <p className="text-sm text-gray-300">Commerce</p>
                      <p className="text-sm text-gray-300">Insights</p>
                  </div>
                  <div className="flex flex-col gap-3">
                      <p className="text-xl text-gray-300">Support</p>
                      <p className="text-sm text-gray-300">Pricing</p>
                      <p className="text-sm text-gray-300">Documentation</p>
                      <p className="text-sm text-gray-300">Guides</p>
                      <p className="text-sm text-gray-300">API Status</p>
                  </div>
                  <div className="flex flex-col gap-3">
                      <p className="text-xl text-gray-300">Company</p>
                      <p className="text-sm text-gray-300">About</p>
                      <p className="text-sm text-gray-300">Blog</p>
                      <p className="text-sm text-gray-300">Jobs</p>
                      <p className="text-sm text-gray-300">Press</p>
                      <p className="text-sm text-gray-300">Careers</p>
                  </div>
                  <div className="flex flex-col gap-3">
                      <p className="text-xl text-gray-300">Legal</p>
                      <p className="text-sm text-gray-300">Claim</p>
                      <p className="text-sm text-gray-300">Policy</p>
                      <p className="text-sm text-gray-300">Terms</p>
                  </div>
              </div>
      </div>
    </div>
  );
};

export default Footer;
