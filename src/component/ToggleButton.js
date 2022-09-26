import React from "react";

export default function ToggleButton({ func, text, toggle }) {
  return (
    <div>
      <button
        onClick={() => func(text)}
        className={`${
          toggle
            ? "border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-gray-100"
            : "border-red-500 border-2 text-red-500 hover:bg-red-500 hover:text-gray-100"
        } sm:mx-1 px-12 py-1 text-lg capitalize rounded-md font-bold w-[90%] sm:w-fit block mx-auto transition-colors duration-500`}
      >
        {text}
      </button>
    </div>
  );
}
