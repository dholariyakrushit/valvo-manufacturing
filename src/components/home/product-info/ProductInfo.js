import React from "react";
import Slider from "react-slick";

import cibfv from "../../../assets/images/products/ci-bfv.svg";
import ballValve from "../../../assets/images/products/ball-valve.svg";
import ciButterfly from "../../../assets/images/products/ci-butterfly.svg";
import doubleWindow from "../../../assets/images/products/double-window.svg";
import knifeManuel from "../../../assets/images/products/knife-manuel.svg";
import knifePneumatic from "../../../assets/images/products/knife-pneumatic.svg";
import ssCorrugated from "../../../assets/images/products/ss-corrugated.svg";
import waterType from "../../../assets/images/products/water-type.svg";

import "./productInfo.scss";

function ProductInfo() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const productList = [
    ballValve,
    cibfv,
    ciButterfly,
    doubleWindow,
    knifeManuel,
    knifePneumatic,
    ssCorrugated,
    waterType,
  ];

  return (
    <div className="container product-info-container">
      <div className="slider-container">
        <Slider {...settings}>
          {productList?.map((image, index) => (
            <div className="product-card" key={index}>
              <img src={image} alt={image} className="img-fluid" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductInfo;
