import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "../app/feature/navToggleSlice";
import { closes } from "../assets/icons";
import NavList from "./NavList";

export default function SideNav() {
  const [toggle, settoggle] = useState(true);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(close());
  };

  const handleToggle = (opt) => {
    if (opt === "menu") {
      settoggle(true);
    } else {
      settoggle(false);
    }
  };
  return (
    <div>
      <div>
        <button className="ml-auto w-fit block my-3" onClick={handleClose}>
          {closes}
        </button>
      </div>
      <div className="w-fit mx-auto">
        <input
          className="border border-blue-500 focus:outline-none py-1 pl-2 "
          type="search"
          placeholder="Search in"
        />
        <button className="bg-blue-500 text-white py-2 px-2 relative top-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-evenly">
        <button
          className="font-bold capitalize text-gray-500 hover:text-blue-500"
          onClick={() => handleToggle("menu")}
        >
          menu
        </button>
        <button
          className="font-bold capitalize text-gray-500 hover:text-blue-500"
          onClick={() => handleToggle("categories")}
        >
          categories
        </button>
      </div>
      {toggle ? (
        <NavList
          home="home"
          about="about"
          blog="blog"
          shop="shop"
          contact="contact"
        />
      ) : (
        <NavList
          home="shirt"
          about="pant"
          blog="panjabi"
          shop="shoes"
          contact="watch"
        />
      )}
    </div>
  );
}
