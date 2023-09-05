import React from "react";
import "./HomePage.css";
import CarouselHomePage from "../../components/home/Carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <CarouselHomePage />
      <div className="home-pages__banners__block">
        <div className="home-pages__banners__block_first"></div>
        <div className="home-pages__banners__block_second"></div>
      </div>
    </>
  );
};

export default HomePage;
