import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import PDF from "../images/cv.pdf";
import DropdownComponent from "./DropDown";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleOpen = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="container flex mx-auto p-4 bg-black justify-between">
        <div className="flex flex-col -mt-2">
          <div className="text-2xl text-yellow-400 text-left ml-1">
            Ivan says
          </div>
          <div className="cheers flex">
            <h1 className="text-yellow-400 text-6xl font-bold mt-1">C</h1>
            <div className="duration-200 hover:rotate-45 hover:scale-125">
              <FaBeer size={"3rem"} color={"white"} className="mt-3" />
            </div>
            <h1 className="text-yellow-400 text-6xl font-bold mt-1">eers.</h1>
          </div>
        </div>
        <div className="hidden md:block text-2xl text-white font-medium mt-4 space-x-5">
          <a href="#" className="hover:text-yellow-400">
            About
          </a>
          <a href="#" className="hover:text-red-400">
            Contact
          </a>
          <a href={PDF} target="_blank" className="hover:text-lime-400">
            CeeVee
          </a>
          <a href="#" className="hover:text-sky-400">
            <DropdownComponent/>
          </a>
        </div>

        {!nav ? (
          <BiMenuAltRight
            size={"2.5rem"}
            color={"white"}
            className="mt-3 md:hidden ease-in"
            onClick={handleOpen}
          />
        ) : (
          <AiOutlineClose
            size={"2.5rem"}
            color={"white"}
            className="mt-3 md:hidden"
            onClick={handleOpen}
          />
        )}
      </div>
      {/* {nav &&  */}
      <div
        className={
          nav
            ? "md:hidden text-2xl text-black font-medium mt-4 space-x-5 bg-amber-400 flex flex-col ease-in-out duration-500"
            : "fixed top-[-100%]"
        }
      >
        <a href="#" className="hover:text-yellow-400">
          About
        </a>
        <a href="#" className="hover:text-sky-400">
          Projects
        </a>
        <a href="#" className="hover:text-red-400">
          Contact
        </a>
        <a href={PDF} target="_blank" className="hover:text-lime-400">
          CeeVee
        </a>
      </div>
      {/* } */}
    </div>
  );
};
