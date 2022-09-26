import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCard, removeCard } from "../app/feature/shoppingCardSlice";
import { allProduct } from "../component/allProduct";
import Button from "../component/Button";
import ToggleButton from "../component/ToggleButton";

export default function Product() {
  const dispatch = useDispatch();

  const { count } = useParams();
  const myProduct = useSelector((state) => state.shoppingCard.product);
  const product = allProduct.find((ele) => ele.id === Number(count));
  let myItem = [];
  const addCard = (btn) => {
    if (btn === "add to card") {
      dispatch(addToCard(product));
    } else {
      const prod = product.id;
      dispatch(removeCard(prod));
    }
  };
  for (let items of myProduct) {
    myItem.push(items.id);
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div className="sm:w-2/4 w-full">
          <img
            className="sm:h-[500px] h-[200px] w-full object-cover"
            src={product && product.image}
            alt="product"
          />
        </div>
        <div className="sm:w-2/4 w-full">
          <div className="lg:text-4xl md:text-3xl text-2xl capitalize font-bold text-blue-600">
            {product.name}
          </div>
          <div className="font-semibold capitalize text-gray-500">
            category:
            <Link
              className="text-blue-500 pl-1 font-normal title-font line-through"
              to={`/${product.category}`}
            >
              {product.category}
            </Link>
          </div>
          <div className="sm:text-lg text-md font-sans  text-gray-600 capitalize py-3">
            {product.title}
          </div>
          <div className="text-yellow-500 text-xl sm:text-2xl font-bold">
            Price:
            <TbCurrencyTaka className="text-2xl text-gray-500 inline-block relative bottom-1" />
            <span className="text-gray-500">{product.price}</span>
          </div>

          <div className="mt-10 flex flex-col space-y-5">
            {myItem.includes(Number(count)) ? (
              <ToggleButton text="remove from card" func={addCard} />
            ) : (
              <ToggleButton
                text="add to card"
                func={addCard}
                toggle={!myItem.includes(Number(count))}
              />
            )}
            <hr />

            <Button text="buy now" />
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-center font-semibold text-gray-600 text-xl capitalize py-5">
          description
        </h5>
        <hr />
        <p className="text-lg text-gray-500 capitalize py-8">
          {product && product.desc}
        </p>
      </div>
    </div>
  );
}
