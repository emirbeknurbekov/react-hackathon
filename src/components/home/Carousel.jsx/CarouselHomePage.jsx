import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImageFirst from "../../../images/carousel-image1.svg";
import carouselImageSecond from "../../../images/carousel-image-second.jpg";

const CarouselHomePage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImageFirst} alt="error" />
        <Carousel.Caption>
          <h4>T-shirt / Tops</h4>
          <h2>Summer Value Pack</h2>
          <h4>cool / colorful / comfy</h4>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={carouselImageSecond} alt="error" />
        <Carousel.Caption>
          <h4>T-shirt / Tops</h4>
          <h2>Summer Value Pack</h2>
          <h4>cool / colorful / comfy</h4>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHomePage;
