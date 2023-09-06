import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import carouselImageFirst from "../../../images/carousel-image1.svg";
import carouselImageSecond from "../../../images/carousel-image-second.jpg";

const SliderCards = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={carouselImageFirst}
            alt="error"
          />
          <Carousel.Caption>
            <button className="carousel__btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-image"
            src={carouselImageSecond}
            alt="error"
          />
          <Carousel.Caption>
            <Link to="/products">
              <button className="carousel__btn">Shop Now</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default SliderCards;
