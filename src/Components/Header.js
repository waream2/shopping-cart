import React from "react";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { cartActive, setCartActive } = useContext(CartContext);

  const toggleCart = () => {
    cartActive ? setCartActive(false) : setCartActive(true);
  };

  const cartTotal = cart.reduce(function (prev, cur) {
    return prev + cur.quantity;
  }, 0);

  return (
    <>
      <div className="header">
        <Link to="/shopping-cart">
          <img
            className="logo-wrapper"
            src="http://cdn.shopify.com/s/files/1/0001/4928/files/marin-logo-black_6a842783-faa5-49d3-a4c8-5bcaf9da7763_1200x1200.png?v=1618364185"
            alt="Logo"
          ></img>
        </Link>
        <div className="header-content">
          <Link to="/shopping-cart/collection">
            <p className="collection-nav">See Collection</p>
          </Link>
          <span className="shopping-cart-header">
            Shopping Cart: {cartTotal}{" "}
          </span>
          <button className="checkout-button" onClick={toggleCart}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
