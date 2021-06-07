import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import ShoppingCart from "./ShoppingCart";
import HomeHero from "./HomeHero";

const Homepage = () => {
  const { cartActive } = useContext(CartContext);

  if (!cartActive)
    return (
      <>
        <Header />
        <HomeHero />
        <div className="home-body">
          <h1 className="homepage-subhead">MADE FOR FUN SINCE 1986</h1>
          <p className="homepage-copy">
            Marin Bikes are Made For Fun. Since the first mountain bikes bearing
            the Marin Bikes name debuted in 1986, the brand has been dedicated
            to enriching the lives of our riders by making fun, high caliber
            bicycles, which provide years of riding enjoyment. We operate a
            business based on hard work, fueled by passion, and fulfilled by the
            satisfaction of bringing the joy of cycling to riders across the
            world. Whether your idea of fun involves riding rugged trails to
            that high alpine lake, pinning on a race number and entering your
            first race, taking the long way home on your commuter bike,
            bikepacking to that remote campsite, or just exploring the
            neighborhood bike paths, Marin brings the fun to your ride. It’s the
            principle that guides us when developing new bikes, from
            long-travel, trail-devouring machines that are at home in some of
            the world’s most challenging race circuits to the multi-surface
            capable pavement collection. Each model is designed to be playful
            and to maximize the opportunities for two-wheeled fun.
          </p>
          <img
            className="featured-product"
            src="https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/bikes/grid/_bikesBikeGrid1x/2021_Nicasio_plus_Grid.jpg"
            alt="sweet bike"
          ></img>
          <Link to="/shopping-cart/collection">
            <button className="home-cta">See Collection</button>
          </Link>
        </div>
      </>
    );
  else
    return (
      <>
        <ShoppingCart />
        <Header />
        <HomeHero />
        <div className="home-body">
          <h1 className="homepage-subhead">MADE FOR FUN SINCE 1986</h1>
          <p className="homepage-copy">
            Marin Bikes are Made For Fun. Since the first mountain bikes bearing
            the Marin Bikes name debuted in 1986, the brand has been dedicated
            to enriching the lives of our riders by making fun, high caliber
            bicycles, which provide years of riding enjoyment. We operate a
            business based on hard work, fueled by passion, and fulfilled by the
            satisfaction of bringing the joy of cycling to riders across the
            world. Whether your idea of fun involves riding rugged trails to
            that high alpine lake, pinning on a race number and entering your
            first race, taking the long way home on your commuter bike,
            bikepacking to that remote campsite, or just exploring the
            neighborhood bike paths, Marin brings the fun to your ride. It’s the
            principle that guides us when developing new bikes, from
            long-travel, trail-devouring machines that are at home in some of
            the world’s most challenging race circuits to the multi-surface
            capable pavement collection. Each model is designed to be playful
            and to maximize the opportunities for two-wheeled fun.
          </p>
          <img
            className="featured-product"
            src="https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/bikes/grid/_bikesBikeGrid1x/2021_Nicasio_plus_Grid.jpg"
            alt="sweet bike"
          ></img>
          <Link to="/shopping-cart/collection">
            <button className="home-cta">See Collection</button>
          </Link>
        </div>
      </>
    );
};

export default Homepage;
