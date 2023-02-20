import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import footerimage from '../images/footer.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
      <div className="h-60 z-10 flex justify-around p-10">
        <div className="flex flex-col text-left">
          <div className="text-2xl text-white">Socials</div>
          <div className="flex space-x-4 mt-3">
            <BsLinkedin size={40} color={"white"} />
            <BsGithub size={40} color={"white"} />
            <BsInstagram size={40} color={"white"} />
          </div>
        </div>
        <div className="flex flex-col text-left">
          <div className="text-2xl text-white">Projects</div>
          <div className="text-sm text-white mt-3"><Link to={"/fakestore"}>Fake PC Store</Link></div>
          <div className="text-sm text-white">Whack-a-Mole</div>
          <div className="text-sm text-white">Tic-tac-toe</div>
          <div className="text-sm text-white hover:text-gray-300">
            <Link to={"/reader"}>Reader App</Link>
          </div>
          <div className="text-sm text-white">Pro-Programming Bubbles</div>
        </div>

        <div className="flex flex-col text-left">
          <div className="text-2xl text-white">Contact</div>
          <div className="text-sm text-white mt-3">
            Email: ivan.v.prodanov@gmail.com
          </div>
          <div className="text-sm text-white">Telephone: iPhone 12</div>
          <div className="text-sm text-white">Location: Bern</div>
        </div>
      </div>
    </div>
  );
};
