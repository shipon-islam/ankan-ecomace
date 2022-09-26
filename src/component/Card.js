import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, image, category, name, price, totalPrice }) {
  return (
    <div className="basis-[280px]">
      <Link to={`/product/${id}`}>
        <div className="mx-2 shadow-sm shadow-gray-500 ">
          <img className="w-full h-[250px]" src={image} alt="card" />
          <div className="pl-2 pb-8">
            <p className="capitalize font-semibold text-gray-400">{category}</p>
            <p className="text-gray-600 font-bold capitalize sm:text-lg">
              {name}
            </p>
            <p className="text-yellow-500 font-semibold">{price}&#2547;</p>
            <p className="text-yellow-500 font-semibold">
              {totalPrice && `${totalPrice}$`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
