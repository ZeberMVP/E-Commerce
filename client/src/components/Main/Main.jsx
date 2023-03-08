import React from 'react';
import Products from "./Products/Products";
import Cart from './Cart/Cart';
import Details from './Products/Details/Details';
import { Route, Routes, useParams } from "react-router-dom";


const Main = () => {
  const { product_name } = useParams();
  return (
    <main>
      <Routes>
        <Route element={<Products />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route path="/product/:product_name" element={<Details product_name={product_name} />} />
      </Routes>
    </main>
  )
}

export default Main
