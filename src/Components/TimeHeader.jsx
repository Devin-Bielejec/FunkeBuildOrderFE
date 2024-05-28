import React from "react";
import "./TimeHeader.css";
import { pixelsPerSecond } from "../utils/defaultState";

export default function ({ playerState, time }) {
  const convertTime = (time) => {
    let convertedTime = new Date(time * 1000).toISOString().substring(14, 19);
    return convertedTime;
  };
  let maxTime = 10 * 10; //seconds
  //Show time in second every ten seconds with tick marks in between??
  let intervalLength = 10; //10 seconds
  let intervals = [];
  for (let i = 0; i < maxTime / intervalLength; i++) {
    intervals.push(convertTime(i * intervalLength));
  }

  console.log(intervals);

  return (
    <div id="timeintervals" style={{ display: "flex" }}>
      {intervals.map((interval) => (
        <div
          style={{
            width: pixelsPerSecond * intervalLength,
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
