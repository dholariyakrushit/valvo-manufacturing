import React from "react";
import { motion } from "framer-motion";

import "./weServing.scss";
import pumpPapar from "../../../assets/images/serving/pump-paper.svg";
import chemInd from "../../../assets/images/serving/chem-ind.svg";
import cement from "../../../assets/images/serving/cement.svg";
import food from "../../../assets/images/serving/food.svg";
import mining from "../../../assets/images/serving/mining.svg";
import oilGas from "../../../assets/images/serving/oil-gas.svg";
import pharmaceuticals from "../../../assets/images/serving/pharmaceuticals.svg";
import chempowerPlantInd from "../../../assets/images/serving/power-plant.svg";
import processUnite from "../../../assets/images/serving/process-unite.svg";
import steel from "../../../assets/images/serving/steel.svg";
import sugar from "../../../assets/images/serving/sugar.svg";
import water from "../../../assets/images/serving/water.svg";

const servingData = [
  pumpPapar,
  chempowerPlantInd,
  pharmaceuticals,
  oilGas,
  chemInd,
  food,
  water,
  cement,
  steel,
  processUnite,
  sugar,
  mining,
];

function WeServing() {
  return (
    <div className="container serving-container">
      <div className="serving-header">
        <h2> We Are Serving To</h2>
      </div>
      <div className="serving-cards">
        {servingData.map((serving, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            key={index}
          >
            <img
              src={serving}
              alt={`img-${index}`}
              key={index}
              className="img-fluid serving-card"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WeServing;
