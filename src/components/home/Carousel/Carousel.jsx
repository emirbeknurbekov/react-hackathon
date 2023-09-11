import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImageFirst from "../../../images/carousel-image1.png";
import carouselImageSecond from "../../../images/carousel-image-second.jpg";

import { useNavigate } from "react-router-dom";

import "./Carousel.css";
import "./CarouselAdaptive.css";

const CarouselHomePage = () => {
  const navigate = useNavigate();
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="carousel-image" src={carouselImageFirst} alt="error" />
        <Carousel.Caption>
          <div className="carousel__descr">
            <h4 className="carousel-header">T-shirt / Tops</h4>
            <h2 className="carousel-subheader">Summer Value Pack</h2>
            <h4 className="carousel-title">cool / colorful / comfy</h4>
            <button className="carousel__btn">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src={carouselImageSecond} alt="error" />
        <Carousel.Caption>
          <div className="carousel__descr">
            <h4 className="carousel-header">T-shirt / Tops</h4>
            <h2 className="carousel-subheader">Summer Value Pack</h2>
            <h4 className="carousel-title">cool / colorful / comfy</h4>
            <button
              onClick={() => navigate("/products")}
              className="carousel__btn"
            >
              Shop Now
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHomePage;
