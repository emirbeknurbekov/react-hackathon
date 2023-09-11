import React from "react";
import "./BannerBlock.css";
import "./BannerBlockAdaptive.css";
import bannerBlockImgSecond from "../../../images/banner-block-img2.png";

const BannerBlock = () => {
  return (
    <>
      <div className="banner__block__container">
        <div className="banner__block__item_first">
          <div className="banner__block__content">
            <h2 className="banner__block__header">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </h2>
            <p className="banner__block__descr">
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </p>
            <button className="banner__block__btn">Shop Now</button>
          </div>
        </div>
        <div className="banner__block__item_second">
          <img src={bannerBlockImgSecond} alt="error" />
        </div>
      </div>
    </>
  );
};

export default BannerBlock;
