import React from "react";
import "./AdvertisingBlock.css";
import "./AdvertisingAdaptive.css";

import advertisingIcon from "../../../icons/advertising-block__icon.svg";
import advertisingIconDark from "../../../icons/advertising-arrow-icon-dark.svg";
import { useNavigate } from "react-router-dom";

const advertisingBlock = () => {
  return (
    <>
      <div className="home-pages__advertising__block">
        <h2 className="home-pages__advertising__header">Big Saving Zone</h2>
        <div className="home-pages__advertising__wrapper">
          <div className="home-pages__advertising__block_first">
            <div className="home-pages__advertising__block_first__item">
              <div className="home-pages__advertising__block_first__content">
                <h2 className="home-pages__advertising__block_first__header">
                  Hawaiian Shirts
                </h2>
                <h3 className="home-pages__advertising__block_first__subheader">
                  Dress up in summer vibe
                </h3>
                <h2 className="home-pages__advertising__block_first__link">
                  UPTO 50% OFF
                </h2>
                <div className="home-pages__advertising__block_first__icon">
                  <img src={advertisingIcon} alt="error" />
                </div>
                <button className="home-pages__advertising__block_first__button">
                  SHOP NOW
                </button>
              </div>
            </div>

            <div className="home-pages__advertising__block_first__item_second">
              <div className="home-pages__advertising__block_first__content_second">
                <h3 className="home-pages__advertising__block_first__header_second">
                  Limited Stock
                </h3>
                <h3 className="home-pages__advertising__block_first__subheader_second">
                  Printed T-Shirt
                </h3>
                <h2 className="home-pages__advertising__block_first__link_second">
                  UPTO 40% OFF
                </h2>
                <div className="home-pages__advertising__block_first__icon_second">
                  <img src={advertisingIcon} alt="error" />
                </div>
                <button className="home-pages__advertising__block_first__button_second">
                  SHOP NOW
                </button>
              </div>
            </div>

            <div className="home-pages__advertising__block_first__item_third">
              <div className="home-pages__advertising__block_first__content_third">
                <h3 className="home-pages__advertising__block_first__header_third">
                  Cargo Joggers
                </h3>
                <h3 className="home-pages__advertising__block_first__subheader_third">
                  Move with style & comfort
                </h3>
                <h2 className="home-pages__advertising__block_first__link_third">
                  UPTO 50% OFF
                </h2>
                <div className="home-pages__advertising__block_first__icon_third">
                  <img src={advertisingIconDark} alt="error" />
                </div>
                <button className="home-pages__advertising__block_first__button_third">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          <div className="homepages__advertising__block_second">
            <div className="homepages__advertising__block_second__item">
              <div className="homepages__advertising__block_second__content">
                <h2 className="homepages__advertising__block_second__header">
                  Urban Shirts
                </h2>
                <h3 className="homepages__advertising__block_second__subheader">
                  Live in Confort
                </h3>
                <h3 className="homepages__advertising__block_second__link">
                  FLAT 60% OFF
                </h3>
                <div className="homepages__advertising__block_second__icon">
                  <img src={advertisingIconDark} alt="error" />
                </div>
                <button className="homepages__advertising__block_second__btn">
                  SHOP NOW
                </button>
              </div>
            </div>

            <div className="homepages__advertising__block_second__item__second">
              <div className="homepages__advertising__block_second__content__second">
                <h2 className="homepages__advertising__block_second__header__second">
                  Oversized T-Shirts
                </h2>
                <h3 className="homepages__advertising__block_second__subheader__second">
                  Street Style Icon
                </h3>
                <h3 className="homepages__advertising__block_second__link__second">
                  FLAT 60% OFF
                </h3>
                <div className="homepages__advertising__block_second__icon__second">
                  <img src={advertisingIconDark} alt="error" />
                </div>
                <button className="homepages__advertising__block_second__btn__second">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default advertisingBlock;
