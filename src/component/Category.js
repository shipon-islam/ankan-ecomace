import React from "react";
import { allCategoryList as list } from "./allCategoryList";
import CategoryCard from "./CategoryCard";

export default function Category() {
  return (
    <div>
      <div className="py-12">
        <div className="font-bold text-center capitalize text-2xl text-gray-700">
          exploring our categories
        </div>
      </div>
      <div className="flex gap-x-6 gap-y-10 flex-wrap mx-auto">
        {list &&
          list.map((cat) => (
            <div key={cat.id}>
              <CategoryCard
                category={cat.category}
                link={cat.link}
                image={cat.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
