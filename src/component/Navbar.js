import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { open } from "../app/feature/navToggleSlice";
import { menu, search, shopping } from "../assets/icons";
import navLogo from "../assets/logos/main_logo.png";
import SideNavComp from "./SideNavComp";

export default function Navbar() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.shoppingCard.product);

  const handleClick = () => {
    dispatch(open());
  };

  return (
    <div>
      <nav className="grid  lg:grid-cols-[1fr,3fr,1fr] grid-cols-[1fr,4fr,8fr] justify-between pt-14 items-center">
        <div className="block lg:hidden cursor-pointer" onClick={handleClick}>
          {menu}
        </div>
        <div>
          <Link to="/">
            <img className="w-[100px]" src={navLogo} alt="band" />
          </Link>
        </div>
        <div className="mx-auto hidden lg:block">
          <input
            className="border  border-gray-300 lg:w-[500px] xl:w-[580px] focus:outline-none placeholder:font-semibold px-16 py-2 rounded-3xl "
            type="search"
            placeholder="Search product"
          />
          <button
            className="relative xl:right-[550px] lg:right-[475px]  top-2"
            type=""
          >
            {search}
          </button>
        </div>
        <div className="flex justify-between w-[200px] items-center justify-self-end">
          <div>
            <Link className="text-blue-500 font-bold capitalize" to="/signup">
              sign up
            </Link>
          </div>
          <div>
            <Link className="text-blue-500 font-bold capitalize" to="/login">
              login
            </Link>
          </div>
          <div>
            <Link to="/card">
              <div className="text-gray-700 relative hover:text-blue-500">
                {shopping}
                <div className="absolute -top-1 left-5 rounded-full bg-blue-500 text-white text-[11px] px-1">
                  {product.length}
                </div>
              </div>
            </Link>
            <div className="text-gray-500 capitalize text-sm font-mono">
              card
            </div>
          </div>
        </div>
      </nav>
      <SideNavComp />
    </div>
  );
}
