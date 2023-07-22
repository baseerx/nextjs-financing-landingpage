"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="mx-auto w-full h-24 fixed flex justify-between items-center">
        <h2 className="text-3xl uppercase font-bold text-[#00df9a] px-4">
          React.
        </h2>
        <ul className="hidden md:flex items-center">
          <li className="uppercase text-sm py-4">
            <a href="#" className="text-sm">
              Home
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm uppercase">
              Company
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm uppercase">
              Resources
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm uppercase">
              About
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-sm uppercase">
              Contact
            </a>
          </li>
        </ul>

        <div className="px-4 md:hidden">
          {!show ? (
            <GiHamburgerMenu onClick={() => setShow(true)} size={30} />
          ) : (
            <RxCross2 onClick={() => setShow(false)} size={30} />
          )}
        </div>
      </div>
      {show && (
        <div className="fixed left-0 top-0 bg-[#000] z-10 border-r border-gray-700 h-screen w-[50%] flex flex-col gap-4">
          <h2 className="text-3xl uppercase font-bold text-[#00df9a] px-4 py-4">
            React.
          </h2>
          <ul className="h-full flex flex-col gap-8 px-4">
            <li className="border-b border-gray-600 uppercase text-sm py-4">
              <a href="#" className="text-md">
                Home
              </a>
            </li>
            <li className="border-b border-gray-600 py-4">
              <a href="#" className="text-sm uppercase">
                Company
              </a>
            </li>
            <li className="border-b border-gray-600 py-4">
              <a href="#" className="text-sm uppercase">
                Resources
              </a>
            </li>
            <li className="border-b border-gray-600 py-4">
              <a href="#" className="text-sm uppercase">
                About
              </a>
            </li>
            <li className="border-b border-gray-600 py-4">
              <a href="#" className="text-sm uppercase">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
