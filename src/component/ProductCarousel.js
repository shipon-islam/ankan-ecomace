import React, { useLayoutEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "../app/feature/sliderSlice";
import panjabi from "../assets/images/panjabi.png";
import panjabi2 from "../assets/images/panjabi2.jpeg";
import shirt from "../assets/images/shirt.jpg";
import tshirt from "../assets/images/t-shirt.jpeg";

const totalImages = [
  { id: 1, image: panjabi, title: "mordern punjabi" },
  { id: 2, image: shirt, title: "new shirt" },
  { id: 3, image: tshirt, title: "new t-shirt" },
  { id: 4, image: panjabi2, title: "new style panjabi" },
];

export default function ProductCarousel() {
  const [images, setImage] = useState(totalImages[0]);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.slider.count);

  const nextFunc = () => {
    dispatch(next(totalImages.length));
  };
  const prevFunc = () => {
    dispatch(prev(totalImages.length));
  };

  useLayoutEffect(() => {
    setImage(totalImages[count]);
  }, [count]);

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[400px] object-cover "
          src={totalImages && images.image}
          alt="panjabi"
        />
        <div className="absolute w-full justify-between flex inset-0">
          <button
            className=" text-3xl text-gray-500 hover:text-gray-800"
            onClick={prevFunc}
          >
            <MdArrowBackIos />
          </button>{" "}
          <button
            className=" text-3xl text-gray-500 hover:text-gray-800"
            onClick={nextFunc}
          >
            <MdArrowForwardIos />
          </button>
        </div>
        <p className="absolute bottom-3 left-2/4 right-2/4 text-white w-fit text-2xl capitalize">
          {images && images.title}
        </p>
      </div>
    </div>
  );
}
