import React from "react";
import "./WomenCategories.css";

import WomenCategoriesImgFirst from "../../../images/womenctgrs-img1.svg";
import WomenCategoriesImgSecond from "../../../images/womenctgrs-img2.svg";
import WomenCategoriesImgThird from "../../../images/womenctgrs-img3.svg";
import WomenCategoriesImgFourth from "../../../images/womenctgrs-img4.svg";
import categoriesArrowIcon from "../../../icons/menctgrs-arrow-icon.svg";

const WomenCategories = () => {
  return (
    <div className="womenctgrs__container">
      <h2 className="womenctgrs__header">Women Categories</h2>
      <div className="womenctgrs__block">
        <div className="womenctgrs__item">
          <div className="womenctgrs__img">
            <img src={WomenCategoriesImgFirst} alt="error" />
            <div className="womenctgrs__content">
              <div className="womenctgrs__title">
                <h2 className="womenctgrs__title__header">Activewear</h2>
                <p className="womenctgrs__title__descr">Explore Now!</p>
              </div>
              <button className="womenctgrs__btn">
                <img src={categoriesArrowIcon} alt="error" />
              </button>
            </div>
          </div>
        </div>

        <div className="womenctgrs__item">
          <div className="womenctgrs__img">
            <img src={WomenCategoriesImgSecond} alt="error" />
            <div className="womenctgrs__content">
              <div className="womenctgrs__title">
                <h2 className="womenctgrs__title__header">Activewear</h2>
                <p className="womenctgrs__title__descr">Explore Now!</p>
              </div>
              <button className="womenctgrs__btn">
                <img src={categoriesArrowIcon} alt="error" />
              </button>
            </div>
          </div>
        </div>

        <div className="womenctgrs__item">
          <div className="womenctgrs__img">
            <img src={WomenCategoriesImgThird} alt="error" />
            <div className="womenctgrs__content">
              <div className="womenctgrs__title">
                <h2 className="womenctgrs__title__header">Activewear</h2>
                <p className="womenctgrs__title__descr">Explore Now!</p>
              </div>
              <button className="womenctgrs__btn">
                <img src={categoriesArrowIcon} alt="error" />
              </button>
            </div>
          </div>
        </div>

        <div className="womenctgrs__item">
          <div className="womenctgrs__img">
            <img src={WomenCategoriesImgFourth} alt="error" />
            <div className="womenctgrs__content">
              <div className="womenctgrs__title">
                <h2 className="womenctgrs__title__header">Activewear</h2>
                <p className="womenctgrs__title__descr">Explore Now!</p>
              </div>
              <button className="womenctgrs__btn">
                <img src={categoriesArrowIcon} alt="error" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenCategories;
