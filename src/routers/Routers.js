import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import NavigationBar from "../component/NavigationBar";
import About from "../pages/About";
import Blog from "../pages/Blog";
import CardItems from "../pages/CardItems";
import Contact from "../pages/Contact";
import Cosmetics from "../pages/Cosmetics";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Panjabi from "../pages/Panjabi";
import Pant from "../pages/Pant";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import Watch from "../pages/Watch";
export default function Routers() {
  return (
    <div>
      <Navbar />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardItems />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/panjabi" element={<Panjabi />} />
        <Route path="/pant" element={<Pant />} />
        <Route path="/product/:count" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
