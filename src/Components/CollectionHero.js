import React from "react";

const CollectionHero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-left">
          <h1 className="hero-headline">
            Gravel / <br></br>Beyond Road
          </h1>
          <p className="hero-subheadline">
            These endurance models let you take any path you feel comfortable,
            whether it be on the asphalt or <br></br> up a gravel road with a
            secret view.
          </p>
        </div>
        <div className="hero-container-right">
          <img
            className="hero-image"
            src="https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/bikes/category/header/_hero1149X650/21_Gestalt_Family_1_c.jpg"
            alt="bikers-drinking"
          ></img>
        </div>
      </div>
    </>
  );
};

export default CollectionHero;
