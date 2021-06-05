import React from "react";
import bikes from "../Data/bikes";
import Header from "./Header";
import { CartContext } from "../Contexts/CartContext";
import { useContext, useEffect } from "react";
import ShoppingCart from "./ShoppingCart";
import classNames from "classnames";
import CollectionHero from "./CollectionHero";
import Footer from "./Footer";

const Collection = () => {
  const { cart, setCart } = useContext(CartContext);
  const { cartActive } = useContext(CartContext);

  const putItemInCart = (name, cost, image, i) => {
    //figure this out
    let isInCart = cart.some((e) => e["name"] === name);

    if (isInCart) {
      const newCart = [...cart];
      //lets figure this out later
      const index = newCart.map((e) => e.name).indexOf(name);
      newCart[index].quantity += 1;
      setCart(newCart);
    } else setCart([...cart, { name, cost, image, quantity: 1 }]);
  };

  const collectionClass = classNames({
    collection: !cartActive,
    "collection-inactive": cartActive,
  });

  if (!cartActive) {
    return (
      <>
        <Header />

        <CollectionHero />
        <div className={collectionClass}>
          <div className="product-grid">
            {bikes.map((item, i) => {
              return (
                <div className="product-card" key={item.name + item.cost}>
                  <img
                    name="image"
                    className="product-image"
                    src={item.image}
                    alt="sick-bike"
                  />
                  <div className="product-details">
                    <span className="name">{item.name}</span>
                    <span className="price">${item.cost}.00</span>
                    <button
                      className="add-to-cart-button"
                      onClick={() =>
                        putItemInCart(item.name, item.cost, item.image, i)
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <ShoppingCart />

        <Header />

        <CollectionHero />
        <div className={collectionClass}>
          <div className="product-grid">
            {bikes.map((item, i) => {
              return (
                <div className="product-card" key={item.name + item.cost}>
                  <img
                    name="image"
                    className="product-image"
                    src={item.image}
                    alt="sick-bike"
                  />
                  <div className="product-details">
                    <span className="name">{item.name}</span>
                    <span className="price">${item.cost}.00</span>
                    <button
                      className="add-to-cart-button"
                      onClick={() =>
                        putItemInCart(item.name, item.cost, item.image, i)
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default Collection;
