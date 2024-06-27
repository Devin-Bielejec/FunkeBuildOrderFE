import React from "react";
import "./TimeHeader.css";
import {
  pixelsPerSecond,
  simtimeToSeconds,
  secondsToSimtime,
} from "../utils/defaultState";

export default function ({ playerState, time }) {
  /* 
  
  The Time header is in Simulation time as well as all other values in app.

  The Width of the timer header is in real time
  
  */
  const convertTime = (time) => {
    let convertedTime = new Date(time * 1000).toISOString().substring(14, 19);
    return convertedTime;
  };
  let maxTime = 20 * 60 * secondsToSimtime; //seconds
  //Show time in second every ten seconds with tick marks in between??
  let intervalLength = 10 * secondsToSimtime; //10 seconds
  let intervals = [];
  for (let i = 0; i < maxTime / intervalLength; i++) {
    intervals.push(convertTime(i * intervalLength * simtimeToSeconds));
  }

  return (
    <div
      id="timeintervals"
      style={{
        display: "flex",
        minWidth: `${maxTime * pixelsPerSecond}px`,
      }}
      //4 * intervals.length for padding and border on children
    >
      {intervals.map((interval) => (
        <div
          style={{
            minWidth: `${pixelsPerSecond * intervalLength}px`,
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
