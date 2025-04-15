import React from "react";

import "./media.scss";

import fullimg from "../../../assets/images/media/desktop/full.svg";

import mobileImg1 from "../../../assets/images/media/mobile/1.png";
import mobileImg2 from "../../../assets/images/media/mobile/2.png";
import mobileImg3 from "../../../assets/images/media/mobile/3.png";
// import mobileImg4 from '../../../assets/images/media/mobile/4.svg'
import mobileImg5 from "../../../assets/images/media/mobile/5.png";
import mobileImg6 from "../../../assets/images/media/mobile/6.png";
import mobileImg7 from "../../../assets/images/media/mobile/7.png";
import mobileImg8 from "../../../assets/images/media/mobile/8.png";
import Slider from "react-slick";

const data = [
  mobileImg1,
  mobileImg2,
  mobileImg3,
  mobileImg5,
  mobileImg6,
  mobileImg7,
  mobileImg8,
];

function Media() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
  };
  return (
    <div className="container media-container">
      <div className="media-header">
        <h2>Media</h2>
      </div>
      <div className="desktop-section">
        <img src={fullimg} alt="fullimg" className="px-2 img-fluid" />
      </div>
      <div className="mobile-section">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="mobile-img">
              <img src={item} alt={item} className="img-fluid " />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Media;
