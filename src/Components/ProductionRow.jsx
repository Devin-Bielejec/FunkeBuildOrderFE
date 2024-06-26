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
    <div style={{ display: "flex", flexDirection: "row" }}>
      {timeline.actions.map(
        ({
          actionType,
          trigger,
          actionID,
          name,
          duration,
          startTime,
          travelTime,
          currentWorkerTask,
          desiredWorkerTask,
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
                        actionType == "BuildUnitAction"
                          ? "blue"
                          : actionType == "ShopAction"
                          ? "green"
                          : actionType == "BuildStructureAction"
                          ? "red"
                          : actionType == "BuildUpgradeAction"
                          ? "purple"
                          : actionType == "WorkerMovementAction"
                          ? currentWorkerTask == "GOLD"
                          : "gold"
                          ? currentWorkerTask == "LUMBER"
                            ? "brown"
                            : currentWorkerTask == "CONSTRUCTING"
                            ? "orange"
                            : currentWorkerTask == "ROAMING"
                            ? "light blue"
                            : currentWorkerTask == "IN_PRODUCTION"
                            ? "dark green"
                            : currentWorkerTask == "IDLE"
                            ? "grey"
                            : ""
                          : ""
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

/* 

Chat GPT Colors

BuildUnitAction: Blue (#1E90FF)
ShopAction: Green (#32CD32)
WorkerMovementAction: Yellow (#FFD700)
GOLD: Gold (#FFD700)
LUMBER: Brown (#8B4513)
CONSTRUCTING: Orange (#FFA500)
ROAMING: Light Blue (#ADD8E6)
IN_PRODUCTION: Dark Green (#006400)
IDLE: Grey (#808080)
BuildStructureAction: Red (#FF4500)
BuildUpgradeAction: Purple (#800080)
*/
