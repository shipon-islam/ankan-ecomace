import React from "react";

export default function Button({ func, text }) {
  return (
    <div>
      <button
        onClick={() => func(text)}
        className={`border-blue-500 block sm:w-fit w-[90%] mx-auto border-2 text-blue-500 hover:bg-blue-500 hover:text-gray-100
            sm:mx-1 px-12 py-1 text-lg capitalize rounded-md font-bold    transition-colors duration-500`}
      >
        {text}
      </button>
    </div>
  );
}
