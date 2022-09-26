import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { TbCurrencyTaka } from "react-icons/tb";
import { useSelector } from "react-redux";
import Button from "./Button";

export default function TotalsCard() {
  const all = useSelector((state) => state.shoppingCard);
  return (
    <div>
      <h1 className="md:text-2xl text-xl font-bold text-gray-600  capitalize pb-4">
        card total
        <FiShoppingCart className="inline-block text-2xl font-bold ml-2" />
      </h1>
      <hr />

      <div className="flex justify-between py-2 title-font">
        <div className="capitalize text-lg  md:text-xl font-bold text-gray-500">
          subtotal:
        </div>
        <div className="font-bold text-lg text-gray-600">
          <TbCurrencyTaka className="text-2xl text-gray-500 inline-block relative bottom-1" />
          {all.subTotal}
        </div>
      </div>
      <hr />
      <div>
        <h1 className="capitalize text-lg md:text-xl font-bold text-gray-500 pb-3 pt-1">
          shipping:
        </h1>
        <div className="flex justify-between py-2">
          <div className="capitalize text-lg md:text-xl font-bold text-gray-500 pb-1">
            Delivery charge
          </div>
          <div className="font-bold text-lg text-gray-600">
            <TbCurrencyTaka className="text-2xl text-gray-500 inline-block relative bottom-1" />
            {all.deliveryCharge}
          </div>
        </div>
      </div>
      <hr />
      <div className=" flex justify-between">
        <div className="capitalize text-lg md:text-xl font-bold text-gray-500">
          total:
        </div>
        <div className="font-bold text-lg text-gray-600">
          <TbCurrencyTaka className="text-2xl text-gray-500 inline-block relative bottom-1" />
          {all.totalAmount}
        </div>
      </div>
      <div className="ml-2 mt-8">
        <Button text="proceed to chackout" />
      </div>
    </div>
  );
}
