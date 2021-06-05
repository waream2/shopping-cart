import React from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "../Contexts/CartContext";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { cartActive, setCartActive } = useContext(CartContext);

  const toggleCart = () => {
    cartActive ? setCartActive(false) : setCartActive(true);
  };

  const deleteCartItem = (i) => {
    const tempCart = [...cart];
    tempCart.splice(i, 1);
    setCart(tempCart);
  };

  const incrementItem = (i) => {
    const tempCart = [...cart];
    tempCart[i].quantity += 1;
    setCart(tempCart);
  };

  const decrementItem = (i) => {
    const tempCart = [...cart];
    tempCart[i].quantity -= 1;
    if (tempCart[i].quantity === 0) {
      tempCart.splice(i, 1);
    }
    setCart(tempCart);
  };

  const sum = () => {
    let value;
    if (cart.length > 0) {
      value = cart.map((p) => p.cost * p.quantity).reduce((a, b) => a + b);
    } else {
      value = 0;
    }
    return value;
  };

  const cartTotal = cart.reduce(function (prev, cur) {
    return prev + cur.quantity;
  }, 0);

  if (cart.length > 0) {
    return (
      <>
        <div className="shopping-cart-container">
          <div className="cart-header">
            <h1 className="cart-title">Your Cart: {cartTotal} Items</h1>
            <button className="cart-exit" onClick={toggleCart}>
              X
            </button>
          </div>
          <div className="cart-items-container">
            {cart.map((item, i) => {
              return (
                <div
                  className="cart-item-container"
                  key={item.name + item.cost}
                >
                  <img
                    name="image"
                    className="product-cart-image"
                    src={item.image}
                    alt="sick-bike"
                  />
                  <div className="product-cart-details">
                    <span name="name">{item.name}</span>
                    <br></br>
                    <span name="price">${item.cost}.00</span>
                    <div className="add-substract-container">
                      <button
                        className="add-subtract-button"
                        onClick={() => decrementItem(i)}
                      >
                        -
                      </button>
                      <div className="total-items-container">
                        {item.quantity}
                      </div>
                      <button
                        className="add-subtract-button"
                        onClick={() => incrementItem(i)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => deleteCartItem(i)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="sub-total">
            <h1>Total: ${sum()}.00 </h1>
            <button className="checkout-button-cart">Check Out</button>
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="shopping-cart-container">
          <div className="cart-header">
            <h1 className="cart-title">Your Cart: {cart.length} Items</h1>
            <button className="cart-exit" onClick={toggleCart}>
              X
            </button>
          </div>
          <div className="cart-items-container">
            <div className="no-items-container">
              <span> Your Cart is Empty</span>
              <button className="go-shop-button" onClick={toggleCart}>
                {" "}
                <p className="go-shop">Go Shop Stupid</p>
              </button>
            </div>
          </div>
          <div className="sub-total">
            <h1>Total: </h1>
            <button className="checkout-button-cart">Check Out</button>
          </div>
        </div>
      </>
    );
};

export default ShoppingCart;
