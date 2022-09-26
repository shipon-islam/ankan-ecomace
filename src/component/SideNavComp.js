import React from "react";
import { useSelector } from "react-redux";
import SideNav from "./SideNav";

export default function SideNavComp({ children }) {
  const menu = useSelector((state) => state.menu.toggle);
  return (
    <div
      className={`absolute h-full bg-white z-10 shadow-sm shadow-gray-500 top-0  w-[300px] transition-all duration-500 ${
        menu ? "left-0" : "-left-96"
      }`}
    >
      <SideNav>{children}</SideNav>
    </div>
  );
}
