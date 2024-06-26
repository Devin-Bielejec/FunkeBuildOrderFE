import React from "react";
import { pixelsPerSecond } from "../utils/defaultState";
import "./ProductionRow.css";
import tmpPic from "../images/Wisp.png";

export default function ProductionRow({ timeline }) {
  /*
  Each timeline has
  timelineType
  timelineID
  actions - used to create the horizontal aspect

  */

  return (
    <div>
      {timeline.actions.map(
        ({
          actionType,
          trigger,
          actionID,
          name,
          duration,
          startTime,
          travelTime,
        }) => {
          console.log(travelTime, duration);
          let totalWidth = travelTime ? travelTime * pixelsPerSecond : 0;
          totalWidth += duration ? duration * pixelsPerSecond : 0;
          return (
            <div
              id="actionContainer"
              style={{
                position: "relative",
                width: `${totalWidth}px`,
                height: "50px",
              }}
            >
              <img
                src={tmpPic}
                id="icon"
                style={{
                  position: "absolute",
                  maxWidth: "50%",
                  maxHeight: "50%",
                  padding: "",
                }}
              />
              <div>
                {travelTime && (
                  <div
                    id="travelTime"
                    key={`Travel-${actionID}-${travelTime}`}
                    style={{
                      width: `${travelTime * pixelsPerSecond - 22}px`,
                      backgroundColor: "grey",
                      border: "1px solid black",
                      padding: "10px",
                    }}
                  />
                )}
                {duration && (
                  <div
                    id="duration"
                    style={{
                      width: `${duration * pixelsPerSecond - 22}px`,
                      border: "1px solid black",
                      padding: "10px",
                      backgroundColor: `${
                        name == "GOLD"
                          ? "gold"
                          : name == "CONSTRUCTION"
                          ? "blue"
                          : name == "LUMBER"
                          ? name == "green"
                          : "grey"
                      }`,
                    }}
                  />
                )}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
