import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import cibfv from "../../../assets/images/products/ci-bfv.svg";
import ballValve from "../../../assets/images/products/ball-valve.svg";
import ciButterfly from "../../../assets/images/products/ci-butterfly.svg";
import doubleWindow from "../../../assets/images/products/double-window.svg";
import knifeManuel from "../../../assets/images/products/knife-manuel.svg";
import knifePneumatic from "../../../assets/images/products/knife-pneumatic.svg";
import ssCorrugated from "../../../assets/images/products/ss-corrugated.svg";
import waterType from "../../../assets/images/products/water-type.svg";

import "./productInfo.scss";
import { Button } from "reactstrap";
import { useNavigate } from "react-router";

function ProductInfo() {
  const navigate = useNavigate();

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
      <div className="featured-header">
        <h2> Featured Products</h2>
        <Button className="btn btn-light explore-btn">
          Explore Our Solutions
        </Button>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {productList?.map((image, index) => (
            <div className="product-card" key={index}>
              <img src={image} alt={image} className="img-fluid" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="produc-sm-container">
        {productList?.splice(0, 3).map((image, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="product-card" key={index}>
              <img src={image} alt={image} className="img-fluid" />
            </div>
          </motion.div>
        ))}
      </div>
      <Button
        className="btn btn-light explore-sm-btn"
        onClick={() => navigate("/products")}
      >
        Explore Our Solutions
      </Button>
    </div>
  );
}

export default ProductInfo;
