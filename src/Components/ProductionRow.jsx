import React from "react";
import { pixelsPerSecond } from "../utils/defaultState";
import "./ProductionRow.css";

export default function ProductionRow({ actionElement }) {
  console.log(actionElement);
  return (
    <div id="actionContainer">
      {actionElement.map((action) => (
        <div
          id="action"
          style={{
            width: `${(action.end - action.start) * pixelsPerSecond}px`,
            backgroundColor: `${action.action == "GOLD" ? "gold" : action.action == "CONSTRUCTION" ? "blue" : action.action == "LUMBER" ? action.action == "green" : "grey"}`,
            border: "1px solid black",
            padding: "10px",
          }}
        >
          {action.action}
        </div>
      ))}
    </div>
  );
}
