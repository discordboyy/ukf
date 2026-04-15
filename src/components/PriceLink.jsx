// PriceLink.jsx
import React from "react";
import { Link } from "react-router-dom";

const PriceLink = ({ link = "/priser", buttonImage, arrowImage, altButton = "", altArrow = "Pil" }) => {
  return (
    <Link to={link} className="price-href">
      <img
        className="romber-knapp-2-2-1"
        src={buttonImage}
        alt={altButton}
      />
      <div className="frame-47">
        <div className="pris">PRIS</div>
        <img
          className="pile-full-bla-1"
          src={arrowImage}
          alt={altArrow}
        />
      </div>
    </Link>
  );
};

export default PriceLink;