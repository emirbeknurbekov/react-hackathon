import React from "react";
import "./MenCategories.css";

import categoriesArrowIcon from "../../../icons/menctgrs-arrow-icon.svg";
import menCategoriesImgFirst from "../../../images/menctgrs_img1.svg";
import menCategoriesImgSecond from "../../../images/menctgrs-img2.svg";
import menCategoriesImgThird from "../../../images/menctgrs-img3.svg";
import menCategoriesImgFourth from "../../../images/menctgrs-img4.svg";
import menCategoriesImgFifth from "../../../images/menctgrs-img5.svg";
import menCategoriesImgSixth from "../../../images/menctgrs-img6.svg";
import menCategoriesImgSeventh from "../../../images/menctgrs-im7.svg";
import menCategoriesImgEighth from "../../../images/menctgrs-img8.svg";

const MenCategories = () => {
  return (
    <>
      <div className="menctgrs__container">
        <h2 className="menctgrs__header">Categories For Men</h2>
        <div className="menctgrs__block">
          <div className="menctgrs__item">
            <div className="menctgrs__img">
              <img src={menCategoriesImgFirst} alt="error" />
              <div className="menctgrs__content">
                <div className="menctgrs__title">
                  <h2 className="menctgrs__title__header">Shirts</h2>
                  <p className="menctgrs__title__descr">Explore Now!</p>
                </div>
                <button className="menctgrs__btn">
                  <img src={categoriesArrowIcon} alt="error" />
                </button>
              </div>
            </div>
          </div>

          <div className="menctgrs__item">
            <div className="menctgrs__img">
              <img src={menCategoriesImgSecond} alt="error" />
              <div className="menctgrs__content">
                <div className="menctgrs__title">
                  <h2 className="menctgrs__title__header">Shirts</h2>
                  <p className="menctgrs__title__descr">Explore Now!</p>
                </div>
                <button className="menctgrs__btn">
                  <img src={categoriesArrowIcon} alt="error" />
                </button>
              </div>
            </div>
          </div>

          <div className="menctgrs__item">
            <div className="menctgrs__img">
              <img src={menCategoriesImgThird} alt="error" />
              <div className="menctgrs__content">
                <div className="menctgrs__title">
                  <h2 className="menctgrs__title__header">Shirts</h2>
                  <p className="menctgrs__title__descr">Explore Now!</p>
                </div>
                <button className="menctgrs__btn">
                  <img src={categoriesArrowIcon} alt="error" />
                </button>
              </div>
            </div>
          </div>

          <div className="menctgrs__item">
            <div className="menctgrs__img">
              <img src={menCategoriesImgFourth} alt="error" />
              <div className="menctgrs__content">
                <div className="menctgrs__title">
                  <h2 className="menctgrs__title__header">Shirts</h2>
                  <p className="menctgrs__title__descr">Explore Now!</p>
                </div>
                <button className="menctgrs__btn">
                  <img src={categoriesArrowIcon} alt="error" />
                </button>
              </div>
            </div>
          </div>

          <div className="menctgrs__item">
            <div className="menctgrs__img">
              <img src={menCategoriesImgFifth} alt="error" />
              <div className="menctgrs__content">
                <div className="menctgrs__title">
                  <h2 className="menctgrs__title__header">Shirts</h2>
                  <p className="menctgrs__title__descr">Explore Now!</p>
                </div>
                <button className="menctgrs__btn">
                  <img src={categoriesArrowIcon} alt="error" />
                </button>
              </div>
            </div>
          </div>

          <div className="menctgrs__item">
            <div className="menctgrs__img">
              <img src={menCategoriesImgSixth} alt="error" />
              <div className="menctgrs__content">
                <div className="menctgrs__title">
                  <h2 className="menctgrs__title__header">Shirts</h2>
                  <p className="menctgrs__title__descr">Explore Now!</p>
                </div>
                <button className="menctgrs__btn">
                  <img src={categoriesArrowIcon} alt="error" />
                </button>
              </div>
            </div>
          </div>

          <div className="menctgrs__item">
            <div className="menctgrs__img">
              <img src={menCategoriesImgSeventh} alt="error" />
              <div className="menctgrs__content">
                <div className="menctgrs__title">
                  <h2 className="menctgrs__title__header">Shirts</h2>
                  <p className="menctgrs__title__descr">Explore Now!</p>
                </div>
                <button className="menctgrs__btn">
                  <img src={categoriesArrowIcon} alt="error" />
                </button>
              </div>
            </div>
          </div>

          <div className="menctgrs__item">
            <div className="menctgrs__img">
              <img src={menCategoriesImgEighth} alt="error" />
              <div className="menctgrs__content">
                <div className="menctgrs__title">
                  <h2 className="menctgrs__title__header">Shirts</h2>
                  <p className="menctgrs__title__descr">Explore Now!</p>
                </div>
                <button className="menctgrs__btn">
                  <img src={categoriesArrowIcon} alt="error" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenCategories;
