import React from "react";
import "./TimeHeader.css";
import { pixelsPerSecond } from "../utils/defaultState";

export default function ({ playerState, time }) {
  const convertTime = (time) => {
    let convertedTime = new Date(time * 1000).toISOString().substring(14, 19);
    return convertedTime;
  };
  let maxTime = 20 * 60; //seconds
  //Show time in second every ten seconds with tick marks in between??
  let intervalLength = 10; //10 seconds
  let intervals = [];
  for (let i = 0; i < maxTime / intervalLength; i++) {
    intervals.push(convertTime(i * intervalLength));
  }

  return (
    <div
      id="timeintervals"
      style={{
        display: "flex",
        width: `${maxTime * pixelsPerSecond + 4 * intervals.length}px`,
      }}
      //4 * intervals.length for padding and border on children
    >
      {intervals.map((interval) => (
        <div
          style={{
            width: `${pixelsPerSecond * intervalLength}px`,
            border: "1px solid black",
            padding: "1px",
          }}
        >
          {interval}
        </div>
      ))}
    </div>
  );
}
