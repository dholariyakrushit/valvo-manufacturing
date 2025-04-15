import React from "react";
import "./ourTestimonials.scss";
import Slider from "react-slick";

import doubleCode from "../../../assets/images/testimonials/double-code.svg";
import star from "../../../assets/images/testimonials/Star.svg";

function OurTestimonials() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container our-testimonials-container">
      <div className="testimonials-header">
        <h2> Our Testimonials</h2>
      </div>
      <div className="feedbacks slider-container">
        <Slider {...settings}>
          <div>
            <div className="feedback-section">
              <div className="avatar"></div>
              <div className="double-code">
                <img src={doubleCode} alt="double-code" />
              </div>
              <p className="comments">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="stars">
                {[...Array(5).keys()].map((index) => (
                  <img src={star} alt="star" className="ms-1" key={index} />
                ))}
              </div>
              <div className="footer">
                <h6>Miracle Lubin</h6>
                <p>Ahmedabad, India</p>
              </div>
            </div>
          </div>
          <div>
            <div className="feedback-section">
              <div className="avatar"></div>
              <div className="double-code">
                <img src={doubleCode} alt="double-code" />
              </div>
              <p className="comments">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="stars">
                {[...Array(5).keys()].map((index) => (
                  <img src={star} alt="star" className="ms-1" key={index} />
                ))}
              </div>
              <div className="footer">
                <h6>Miracle Lubin</h6>
                <p>Ahmedabad, India</p>
              </div>
            </div>
          </div>
          <div>
            <div className="feedback-section">
              <div className="avatar"></div>
              <div className="double-code">
                <img src={doubleCode} alt="double-code" />
              </div>
              <p className="comments">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="stars">
                {[...Array(5).keys()].map((index) => (
                  <img src={star} alt="star" className="ms-1" key={index} />
                ))}
              </div>
              <div className="footer">
                <h6>Miracle Lubin</h6>
                <p>Ahmedabad, India</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default OurTestimonials;
