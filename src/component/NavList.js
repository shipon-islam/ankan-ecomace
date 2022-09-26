import React from "react";
import { Link } from "react-router-dom";

export default function NavList({ home, shop, blog, about, contact }) {
  return (
    <div>
      <ul className="bg-white">
        <li className="font-semibold capitalize pl-4 mt-4 hover:text-blue-500">
          <Link to={`/${home === "home" ? "" : home}`}> {home}</Link>
        </li>
        <li className="font-semibold capitalize pl-4 mt-4 after:w-full after:bg-gray-500 after:h-2 hover:text-blue-500">
          <Link to={`/${shop}`}> {shop}</Link>
        </li>
        <li className="font-semibold capitalize pl-4 mt-4 after:w-full after:bg-gray-500 after:h-2 hover:text-blue-500">
          <Link to={`/${blog}`}> {blog}</Link>
        </li>
        <li className="font-semibold capitalize pl-4 mt-4 after:w-full after:bg-gray-500 after:h-2 hover:text-blue-500">
          <Link to={`/${about}`}> {about}</Link>
        </li>
        <li className="font-semibold capitalize pl-4 mt-4 after:w-full after:bg-gray-500 after:h-2 hover:text-blue-500">
          <Link to={`/${contact}`}> {contact}</Link>
        </li>
      </ul>
    </div>
  );
}
