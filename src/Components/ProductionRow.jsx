import { useState } from "react";

import { pixelsPerSecond, simtimeToSeconds } from "../utils/defaultState";
import "./ProductionRow.css";
import loadImage from "../utils/imageLoader";

export default function ProductionRow({ timeline }) {
  /*
  Each timeline has
  timelineType
  timelineID
  actions - used to create the horizontal aspect
  */

  let totalWidth = 0;
  timeline.actions.forEach(({ travelTime, duration }) => {
    totalWidth += travelTime ? travelTime * pixelsPerSecond : 0;
    totalWidth += duration ? duration * pixelsPerSecond : 0;
  });
  return (
    <div
      style={{
        width: `${totalWidth}px`,
        height: "50px",
        display: "flex",
      }}
    >
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
          let widthOfActionContainer = travelTime
            ? travelTime * pixelsPerSecond
            : 0;
          widthOfActionContainer += duration ? duration * pixelsPerSecond : 0;

          return (
            <div
              id="actionContainer"
              style={{
                height: "50px",
                width: `${widthOfActionContainer}px`,
                position: "relative",
                marginLeft: `${startTime * pixelsPerSecond}px`,
              }}
            >
              {name && (
                <img
                  src={loadImage(`${name}.png`)}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    maxWidth: "90%",
                    maxHeight: "90%",
                    padding: "",
                  }}
                />
              )}

              {travelTime > 0 && (
                <div
                  id="travelTime"
                  key={`Travel-${actionID}-${travelTime}`}
                  style={{
                    minWidth: `${travelTime * pixelsPerSecond}px`,
                    backgroundColor: "gray",
                    border: "1px solid black",
                    padding: "10px",
                  }}
                />
              )}

              {duration > 0 && (
                <div
                  id="duration"
                  style={{
                    minWidth: `${duration * pixelsPerSecond}px`,
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
                          ? "gold"
                          : currentWorkerTask == "LUMBER"
                          ? "brown"
                          : currentWorkerTask == "CONSTRUCTING"
                          ? "orange"
                          : currentWorkerTask == "ROAMING"
                          ? "lightblue"
                          : currentWorkerTask == "IN_PRODUCTION"
                          ? "darkgreen"
                          : currentWorkerTask == "IDLE"
                          ? "gray"
                          : ""
                        : ""
                    }`,
                  }}
                />
              )}
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
