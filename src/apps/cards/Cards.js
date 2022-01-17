import React from "react";
import "./cards.css";

const Cards = ({ name, image, text }) => {
  return (
    <div className="portfolio__card">
      <img src={image} />
      <p>{name}</p>
      <h5>{text}</h5>
    </div>
  );
};

export default Cards;
