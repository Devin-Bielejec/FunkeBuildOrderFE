import React from "react";
import { pixelsPerSecond } from "../utils/defaultState";
import "./ProductionRow.css";

export default function ProductionRow({ timeline }) {
  /*
  Each timeline has
  timelineType
  timelineID
  actions - used to create the horizontal aspect

  */
  return (
    <div id="actionContainer">
      {timeline.actions.map(
        ({ actionType, trigger, actionID, name, duration, startTime }) => (
          <div
            id="action"
            key={actionID}
            style={{
              width: `${duration * pixelsPerSecond}px`,
              backgroundColor: `${
                name == "GOLD"
                  ? "gold"
                  : name == "CONSTRUCTION"
                  ? "blue"
                  : name == "LUMBER"
                  ? name == "green"
                  : "grey"
              }`,
              border: "1px solid black",
              padding: "10px",
            }}
          >
            {name}
          </div>
        )
      )}
    </div>
  );
}
