import React from "react";
import ProductionRow from "./ProductionRow";
import "./ProductionRows.css";
export default function ProductionRows({ timelines, time }) {
  //This componenet takes in essentially an element that may contains all the actions for that given element.
  return (
    <section id="productionRows">
      {timelines.map((timeline) => (
        <ProductionRow timeline={timeline} />
      ))}
    </section>
  );
}
