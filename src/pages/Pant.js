import React from "react";
import { allProduct } from "../component/allProduct";
import Card from "../component/Card";

export default function Pant() {
  return (
    <div>
      <div className="flex flex-wrap gap-x-2 gap-y-6 justify-center sm:justify-start">
        {allProduct
          .filter((ele) => ele.category === "pant")
          .map((ele) => (
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
      </div>
    </div>
  );
}
