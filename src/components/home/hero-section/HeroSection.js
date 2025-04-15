import React from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./heroSection.scss";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      {/* <div className="hero-section"></div> */}
      <div className="hero-section">
        <div className="hero-description">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 100, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h2>Engineering Excellence That Drives Innovation</h2>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -100, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <p>
                Delivering precision-engineered solutions that transform
                industries and shape the future of manufacturing
              </p>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 0, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Button
                className="btn btn-light explore-btn"
                onClick={() => navigate("/products")}
              >
                Explore Our Solutions
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
