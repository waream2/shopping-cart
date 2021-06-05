import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "../Components/Homepage";
import Collection from "../Components/Collection";
import ShoppingCart from "../Components/ShoppingCart";
import { CartContext } from "../Contexts/CartContext";
import { useState } from "react";

const Routes = () => {
  const [cart, setCart] = useState([]);
  const [isCollection, setIsCollection] = useState(false);
  const [cartActive, setCartActive] = useState(true);
  const [totalCartItems, setTotalCartItems] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <CartContext.Provider
          value={{
            cart,
            setCart,
            isCollection,
            setIsCollection,
            cartActive,
            setCartActive,
            totalCartItems,
            setTotalCartItems,
          }}
        >
          <Route exact path="/" component={Homepage} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
        </CartContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
