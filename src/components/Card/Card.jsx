import React from "react";
import "./Card.css";

function Card({ image, children }) {
  return (
    <div className="custom-card" style={{ backgroundImage: `url(${image})` }}/>
  );
}

export default Card;
