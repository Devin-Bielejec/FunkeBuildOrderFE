import React, { useState } from "react";
import {pixelsPerSecond} from "../utils/defaultState";

const Slider = () => {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event) => {
    console.log("is draggin");
    setIsDragging(true);
    event.dataTransfer.setDragImage(new Image(), 0, 0); // hide the default drag image
    document.body.style.cursor = "grabbing";
  };

  const handleDrag = (event) => {
    if (isDragging) {
      // updatePosition(event.clientX);
      setPosition(event.clientX);
      let center =
        document.getElementById("handle").getBoundingClientRect().right -
        document.getElementById("handle").getBoundingClientRect().left;
      window.scrollTo(center, window.scrollY);
      document.body.style.cursor = "grabbing";
    }
  };

  const handleDragEnd = (event) => {
    setIsDragging(false);
    console.log(event.clientX, Math.floor(event.clientX / pixelsPerSecond));
    setPosition(Math.round(event.clientX / pixelsPerSecond) * pixelsPerSecond);
    document.body.style.cursor = "auto";
  };

  const updatePosition = (clientX) => {
    const slider = document.getElementById("handle");
    const rect = slider.getBoundingClientRect();
    console.log(rect);
    const newPosition = clientX - rect.left;
    console.log(slider);
    const maxPosition = slider.offsetWidth;
    console.log("update position", newPosition, maxPosition);
    if (newPosition >= 0 && newPosition <= maxPosition) {
      setPosition(newPosition);
    }
  };

  return (
    <>
      <div
        style={{
          width: "10px",
          height: "100%",
          background: "blue",
          position: "absolute",
          left: position,
          opacity: isDragging ? "1" : "1",
          cursor: "grab",
        }}
        id="handle"
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        draggable
      />
    </>
  );
};

export default Slider;
