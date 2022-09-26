import React from "react";
import { allProduct } from "../component/allProduct";
import Card from "../component/Card";

export default function Cosmetics() {
  return (
    <div>
      <div className="flex flex-wrap">
        {allProduct
          .filter((ele) => ele.category === "cosmetics")
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
