import React from "react";
import Category from "../component/Category";
import NewArrivals from "../component/NewArrivals";
import ProductCarousel from "../component/ProductCarousel";
import Tending from "../component/Tending";

export default function Home() {
  document.title = "home";
  return (
    <div>
      <div>
        <ProductCarousel />
        <Category />
        <NewArrivals />
        <Tending />
      </div>
    </div>
  );
}
