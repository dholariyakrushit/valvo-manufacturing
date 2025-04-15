import React from "react";

import logo from "../../../assets/images/logo.svg";
import facebook from "../../../assets/images/social/facebook.svg";
import instagram from "../../../assets/images/social/instagram.svg";
import twitter from "../../../assets/images/social/twitter.svg";
import youtube from "../../../assets/images/social/youtube.svg";
import call from "../../../assets/images/social/call.svg";
import web from "../../../assets/images/social/Web.svg";
import location from "../../../assets/images/social/location.svg";

import "./footer.scss";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <svg
        width="0"
        height="0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="footerClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.1 Q0.5,-0.05 1,0.1 L1,1 L0,1 Z" />
          </clipPath>
          <clipPath id="footerClipSmall" clipPathUnits="objectBoundingBox">
            <path d="M0,0.05 Q0.5,0 1,0.05 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4087.557829648327!2d72.68916137565019!3d23.037320965776924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87fa3eb45cd5%3A0xef29a22b2bbf5c18!2sARTH%20ENGINEERING!5e1!3m2!1sen!2sin!4v1744211420597!5m2!1sen!2sin"
        width="100%"
        height="550"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="address"
      ></iframe>
      <div className="footer-section">
        <div className="footer-content container">
          <div className="footer-social">
            <div className="logo">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
            <p className="trusted-description">
              Trusted in more than 100 countries & 5 million customers. Follow
              us on social media.
            </p>
            <div className="social-icon">
              <img src={facebook} alt="facebook" className="img-fluid" />
              <img src={instagram} alt="instagram" className="img-fluid" />
              <img src={twitter} alt="twitter" className="img-fluid" />
              <img src={youtube} alt="youtube" className="img-fluid" />
            </div>
          </div>
          <div className="footer-navbar">
            <b>ARTH ENGINEERING</b>
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("/products")}>Products</p>
            <p>
              <a href="#contact-section"> Contact Us</a>
            </p>
          </div>
          <div className="address-section">
            <b>Get In Touch</b>
            <p className="address">
              <img src={location} alt="location" className="ml-3" />
              12, Shilp Govardhan Estate, Near Krishna Weigh Bridge, Kathwada
              GIDC, Ahmedabad - 382415, Gujarat, INDIA.
            </p>
            <p className="email">
              <img src={web} alt="web" className="ml-3" />
              salesarthengineeringworks@gmail.com
            </p>
            <p className="email">
              <img src={web} alt="web" className="ml-3" />
              arthengineeringworks@gmail.com
            </p>
            <p className="address">
              <img src={call} alt="call" className="ml-3" />
              +91 96621 84106
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
