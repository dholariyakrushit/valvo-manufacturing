import React from "react";
import { Button } from "reactstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import aboutUs from "../../../assets/images/about-us/aboutus.svg";
import yearsExcellence from "../../../assets/images/about-us/years-excellence.svg";
import successfulProjects from "../../../assets/images/about-us/successful-projects.svg";
import clientSatisfaction from "../../../assets/images/about-us/client-satisfaction.svg";
import technicalSupport from "../../../assets/images/about-us/technical-support.svg";

import "./aboutusSection.scss";

function AboutUsSection() {
  const navigate = useNavigate();

  const infoList = [
    {
      image: yearsExcellence,
      count: "20+",
      title: "Years of Excellence",
    },
    {
      image: successfulProjects,
      count: "100+",
      title: "Successful Projects",
    },
    {
      image: clientSatisfaction,
      count: "98%",
      title: "Client Satisfaction",
    },
    {
      image: technicalSupport,
      count: "24/7",
      title: "Technical Support",
    },
  ];
  return (
    <div className="container aboutus-container">
      <div className="industrial-innovation-section">
        <motion.div
          initial={{ opacity: 0, x: -30, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="industrial-innovation">
            <h2>Where Engineering Precision Meets Industrial Innovation</h2>
            <img
              src={aboutUs}
              alt="about us"
              className="img-fluid industrial-aboutus-img"
            />
            <p>
              For over two decades, ARTH Engineering has been at the forefront
              of industrial innovation, delivering custom engineering solutions
              that help manufacturers optimize their operations, reduce costs,
              and drive sustainable growth.
            </p>
            <Button className="btn btn-primary explore-btn "    onClick={() => navigate("/products")}>
              Explore Our Solutions
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="aboutus-img">
            <img src={aboutUs} alt="about us" className="img-fluid" />
          </div>
        </motion.div>
      </div>
      <div className="company-overview">
        {infoList.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            key={index}
          >
            <div className="card" >
              <img
                src={item?.image}
                alt={item?.title}
                width={135}
                className="mx-auto"
              />
              <p className="company-count">{item?.count}</p>
              <p className="title">{item?.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsSection;
