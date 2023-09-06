import React from "react";
import "./HomePage.css";
import Carousel from "../../components/home/Carousel/Carousel"

const HomePage = () => {
  return (
    <>
      <Carousel />
      <div className="home-pages__banners__block">
        <div className="home-pages__banners__block_first">
          <h2 className="home-pages__banners__block_first__header">
            Low Price
          </h2>
          <h2 className="home-pages__banners__block_first__subheader">
            High Coziness
          </h2>
          <h2 className="home-pages__banners__block_first__descr">
            UPTO 50% OFF
          </h2>
          <h2 className="home-pages__banners__block_first__link">
            Explore Items
          </h2>
        </div>
        <div className="home-pages__banners__block_second">
          <h2 className="home-pages__banners__block_second__header">
            Beyong Presents
          </h2>
          <h2 className="home-pages__banners__block_second__subheader">
            Breezy Summer Style
          </h2>
          <h2 className="home-pages__banners__block_second__descr">
            UPTO 50% OFF
          </h2>
          <h2 className="home-pages__banners__block_second__link">
            Explore Items
          </h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
