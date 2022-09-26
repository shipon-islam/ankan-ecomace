import React from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../app/feature/shoppingCardSlice";
import panjabi from "../assets/images/panjabi.png";

export default function CatCard() {
  const dispatch = useDispatch();
  const add = (cardDetails) => {
    dispatch(addToCard(cardDetails));
  };
  return (
    <div className="bg-gray-400/30 py-1 px-2">
      <div>
        <div>
          <img className="object-cover w-48 h-28" src={panjabi} alt="card" />
        </div>
        <div className="flex justify-between px-2 py-3">
          <div className="font-bold text-gray-700 capitalize  ">panjabi</div>

          <div className="font-thin text-gray-600">40$</div>
        </div>
        <div className="px-1">
          <button
            className="bg-lime-500 text-gray-700 block w-full py-1 rounded-md font-bold capitalize hover:bg-lime-400"
            onClick={() => add({ image: panjabi, price: 40 })}
          >
            add to card
          </button>
        </div>
      </div>
    </div>
  );
}
