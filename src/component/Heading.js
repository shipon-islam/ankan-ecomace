import React from "react";

export default function Heading({ title }) {
  return (
    <div className="font-bold text-2xl capitalize py-10 text-gray-700 text-center sm:text-left">
      {title}-
    </div>
  );
}
