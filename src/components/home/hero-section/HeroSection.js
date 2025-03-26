import React from "react";
import { Button } from "reactstrap";

import "./heroSection.scss";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <div className="hero-section"></div> */}
    <div className="hero-section">
      <div className="hero-description">
        <h2>Engineering Excellence That Drives Innovation</h2>
        <p>
          Delivering precision-engineered solutions that transform industries
          and shape the future of manufacturing
        </p>
        <Button className="btn btn-light explore-btn">Explore Our Solutions</Button>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
