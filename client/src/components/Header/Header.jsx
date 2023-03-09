import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const numberCart = useSelector((state) => state.numberItems);
  return (
    <header>
      <Link to="/">
        <h1>Sneaker Shop</h1>
      </Link>
      <Link to="/cart" title="Shopping cart" id="cartIconContainer">
        <img
          src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png"
          alt="shopping cart"
        />
        <span>{numberCart}</span>
      </Link>
    </header>
  );
};

export default Header;
