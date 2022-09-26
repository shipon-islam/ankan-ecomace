import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  removeCard,
  totalAmount,
} from "../app/feature/shoppingCardSlice";
import TotalsCard from "../component/TotalsCard";

export default function CardItems() {
  const product = useSelector((state) => state.shoppingCard.product);

  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeCard(id));
  };
  const quantityInc = (id) => {
    dispatch(increament(id));
  };
  const quantityDec = (id) => {
    dispatch(decreament(id));
  };

  useEffect(() => {
    dispatch(totalAmount());
  }, [dispatch, product]);

  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        <section className="text-gray-600 body-font w-full md:w-[70%]">
          <div className="container px-5  mx-auto">
            <div className=" w-full mx-auto overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                      Product
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Quantity
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Price
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Total
                    </th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((curEle) => {
                    const { id, name, image, price, quantity, totalPrice } =
                      curEle;
                    return (
                      <tr key={id}>
                        <td className="px-4 py-3">
                          <div className="flex flex-col md:flex-row gap-2 items-center gap-x-2">
                            <img
                              className="w-[50px] h-[60px] md:w-[100px] md:h-[120px]"
                              src={image}
                              alt="card"
                            />
                            <p className="title-font capitalize">{name}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex bg-gray-200 w-fit rounded-sm px-[2px]">
                            <button onClick={() => quantityDec(id)}>
                              <FaMinusSquare className="text-xl hover:text-blue-500 text-gray-500" />
                            </button>
                            <p className="px-2 text-gray-500 font-bold">
                              {quantity}
                            </p>

                            <button onClick={() => quantityInc(id)}>
                              <FaPlusSquare className="text-xl hover:text-blue-500 text-gray-500" />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 text-md py-3 text-gray-600  font-bold">
                          <TbCurrencyTaka className="text-2xl text-gray-500 inline-block relative bottom-1" />
                          {price}
                        </td>
                        <td className="px-4 py-3 text-md text-gray-600 font-bold">
                          <TbCurrencyTaka className="text-2xl text-gray-500 inline-block relative bottom-1" />
                          {totalPrice}
                        </td>
                        <td className="w-10 text-center">
                          <button onClick={() => removeItem(id)}>
                            <AiOutlineClose className="text-lg text-gray-500 hover:text-red-500" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className="md:w-[30%] w-full mx-auto bg-gray-400/10  px-3 pt-8 border-2 border-gray-400 rounded-md pb-8">
          <TotalsCard />
        </div>
      </div>
    </div>
  );
}
