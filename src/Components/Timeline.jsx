import React from "react";
import ProductionRows from "./ProductionRows";
import DraggableSlider from "./DraggableSlider";
import TimeHeader from "./TimeHeader";
import { playerState } from "../utils/defaultState";
import "./Timeline.css";
export default function Timeline({ playerState, time }) {
  return (
    <section
      id="timeline"
    >
      <TimeHeader playerState={playerState} time={time} />
      <ProductionRows playerState={playerState} time={time} />
      <DraggableSlider />
    </section>
  );
}
