import React from "react";
import "./WomenCategories.css";
import "./WomenCategoriesAdaptive.css";

import WomenCategoriesImgFirst from "../../../images/womenctgrs-img1.png";
import WomenCategoriesImgSecond from "../../../images/womenctgrs-img2.png";
import WomenCategoriesImgThird from "../../../images/womenctgrs-img3.png";
import WomenCategoriesImgFourth from "../../../images/womenctgrs-img4.png";
import categoriesArrowIcon from "../../../icons/menctgrs-arrow-icon.svg";
import { useNavigate } from "react-router-dom";

const WomenCategories = () => {
  const navigate = useNavigate();
  return (
    <div className="womenctgrs__container">
      <h2 className="womenctgrs__header">Women Categories</h2>
      <div className="womenctgrs__block">
        <div className="womenctgrs__item">
          <div className="womenctgrs__img">
            <img src={WomenCategoriesImgFirst} alt="error" />
            <div className="womenctgrs__content">
              <div className="womenctgrs__title">
                <h2 className="womenctgrs__title__header">
                  Hoodies & Sweetshirts
                </h2>
                <p className="womenctgrs__title__descr">Explore Now!</p>
              </div>
              <button
                onClick={() =>
                  navigate("/products?gender=women&category=hoodies")
                }
                className="womenctgrs__btn"
              >
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
                <h2 className="womenctgrs__title__header">Coats & Parkas</h2>
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
                <h2 className="womenctgrs__title__header">Tees & T-shirt</h2>
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
                <h2 className="womenctgrs__title__header">Boxers</h2>
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
