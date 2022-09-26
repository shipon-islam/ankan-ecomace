import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { allProduct } from "./allProduct";
import Card from "./Card";
import Heading from "./Heading";

export default function NewArrivals() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1024, min: 720 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 720, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div>
      <Heading title="new arrivals" />
      <Carousel responsive={responsive}>
        {allProduct.map((ele) => (
          <div key={ele.id}>
            <Card
              id={ele.id}
              image={ele.image}
              category={ele.category}
              name={ele.name}
              price={ele.price}
            />
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
}
