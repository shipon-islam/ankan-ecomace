import React from "react";
import { allProduct } from "./allProduct";
import Card from "./Card";
import Heading from "./Heading";

export default function Tending() {
  return (
    <div>
      <div>
        <Heading title="tending product" />
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-6 justify-center sm:justify-start ">
        {allProduct.slice(Math.max(allProduct.length - 5, 0)).map((ele) => (
          <React.Fragment key={ele.id}>
            <Card
              id={ele.id}
              image={ele.image}
              category={ele.category}
              name={ele.name}
              price={ele.price}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
