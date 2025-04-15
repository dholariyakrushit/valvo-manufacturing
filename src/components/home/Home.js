import React from "react";
import AboutUsSection from "./aboutus-section/AboutUsSection";
import HeroSection from "./hero-section/HeroSection";
import OurTestimonials from "./our-testimonials/OurTestimonials";
import ProductInfo from "./product-info/ProductInfo";
import WeServing from "./we-serving/WeServing";
import Media from "./media/Media";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ProductInfo />
      <WeServing />
      <OurTestimonials />
      <Media />
    </div>
  );
}

export default Home;
