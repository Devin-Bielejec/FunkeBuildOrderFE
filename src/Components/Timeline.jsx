import React from "react";
import ProductionRows from "./ProductionRows";
import DraggableSlider from "./DraggableSlider";
import TimeHeader from "./TimeHeader";
import "./Timeline.css";
import loadImage from "../utils/imageLoader";

export default function Timeline({ playerState, time }) {
  return (
    <section id="timeline">
      <section
        id="actionLabels"
        style={{
          width: "50px",
          gridRow: "2 / span 1",
          gridColumn: "1 / span 1",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {playerState.activeTimelines.map((item) => (
          <img
            src={loadImage(`Wisp.png`)}
            style={{
              maxWidth: "50px",
              maxHeight: "50px",
              padding: "",
            }}
          />
        ))}
      </section>
      <TimeHeader playerState={playerState} time={time} />
      <ProductionRows timelines={playerState.activeTimelines} time={time} />
      <DraggableSlider />
    </section>
  );
}
