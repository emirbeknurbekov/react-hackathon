import React from "react";

import "./Brands.css";

import NikeImg from "../../../images/brands-nike-img.png";
import HmImg from "../../../images/brands-hm-img.png";
import LevisImg from "../../../images/brands-levis-img.png";
import PoloImg from "../../../images/brands-polo-img.png";
import PumaImg from "../../../images/brands-puma-img.png";

const Brands = () => {
  return (
    <div className="brands__container">
      <div className="brands__block">
        <h2 className="brands__header">Top Brands Deal</h2>
        <h3 className="brands__subheader">
          Up To <span>60%</span> off on brands
        </h3>
        <div className="brands__img-block">
          <img src={NikeImg} alt="error" />
          <img src={HmImg} alt="error" />
          <img src={LevisImg} alt="error" />
          <img src={PoloImg} alt="error" />
          <img src={PumaImg} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
