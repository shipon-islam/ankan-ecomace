import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bulb, closes, downArrow, menu, upArrow } from "../assets/icons";

export default function NavigationBar() {
  const [toggle, settoggle] = useState(true);
  const handleMouse = () => {
    settoggle(!toggle);
  };
  const handleMouseLeave = () => {
    settoggle(!toggle);
  };
  return (
    <div>
      <div className="justify-between py-5 items-center lg:flex hidden">
        <div
          className="bg-gray-400/10 flex w-[250px] py-2 px-2 justify-between items-center 
          transition-all duration-500 hover:bg-blue-400 hover:text-white text-gray-500 cursor-pointer relative"
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouseLeave}
        >
          <button className="">{toggle ? menu : closes}</button>
          <div className="font-bold justify-self-start  ">
            Browse Categories
          </div>
          <div>{toggle ? downArrow : upArrow}</div>
          <ul
            className={`absolute z-20
          top-10 left-0 bg-white shadow-sm w-full pb-8  text-gray-600 capitalize ${
            toggle ? "hidden" : "block"
          }`}
          >
            <li className="mt-2 border-b hover:text-blue-500 font-bold border-gray-400/30 pl-4">
              cosmetics
            </li>
            <li className="mt-2 border-b hover:text-blue-500 font-bold border-gray-400/30 pl-4">
              watch
            </li>
            <li className="mt-2 border-b hover:text-blue-500 font-bold border-gray-400/30 pl-4">
              leather belt
            </li>
            <li className="mt-2 border-b hover:text-blue-500 font-bold border-gray-400/30 pl-4">
              panjabi
            </li>
            <li className="mt-2 border-b hover:text-blue-500 font-bold border-gray-400/30 pl-4">
              pant
            </li>
            <li className="mt-2 border-b hover:text-blue-500 font-bold border-gray-400/30 pl-4">
              mobile
            </li>
            <li className="mt-2 border-b hover:text-blue-500 font-bold border-gray-400/30 pl-4">
              shirt
            </li>
          </ul>
        </div>
        <ul className="nav">
          <Link className="ml-6 font-bold  text-gray-600" to="/">
            Home
          </Link>
          <Link className="ml-6 font-bold text-gray-600" to="/shop">
            Shop
          </Link>
          <Link className="ml-6 font-bold text-gray-600" to="/blog">
            Blog
          </Link>
          <Link className="ml-6 font-bold text-gray-600" to="/about">
            About
          </Link>
          <Link className="ml-6 font-bold text-gray-600" to="/contact">
            Contact
          </Link>
        </ul>
        <div className="border-l border-gray-400 pl-28">
          <p>
            <span className="inline-block">{bulb}</span> <span>Enjoy</span> Free
            Shipping
          </p>
        </div>
      </div>
    </div>
  );
}
