import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-left">
          <h1 className="hero-headline">Marin</h1>
          <p className="hero-subheadline">Made For Fun</p>
          <Link to="/shopping-cart/collection">
            <button className="hero-button">See Collection</button>
          </Link>
        </div>
        <div className="hero-container-right">
          <img
            className="hero-image"
            src="https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/mod/hero/image/_heroStandard1676X786/21-sausalito-action-33.jpeg"
            alt="bikers-drinking"
          ></img>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
