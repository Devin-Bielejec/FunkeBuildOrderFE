import React from "react";
import ProductionRow from "./ProductionRow";
import "./ProductionRows.css";
export default function ProductionRows({ playerState, time }) {
  //This componenet takes in essentially an element that may contains all the actions for that given element.
  return (
    <section id="productionRows">
      {playerState.workers.map((actionElement) => (
        <ProductionRow actionElement={actionElement} />
      ))}
    </section>
  );
}
