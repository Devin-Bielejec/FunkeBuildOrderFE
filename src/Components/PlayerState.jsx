import React from "react";
import Resources from "./Resources";
import InProgressUnits from "./InProgressUnits";
import InProgressBuildings from "./InProgressBuildings";
import "./PlayerState.css";
export default function PlayerState({ playerState, time }) {
  /* 
  let playerData = {
    lumber: 0,
    gold: 0,
    supply: (0, 11), //min and max supply,
    workers: [],
    units: [],
    buildings: [],
  };

  let time = 0; //seconds
  */
  let { lumber, gold, supply, workers, units, buildings } = playerState; //Easier use
  return (
    <section id="playerState">
      <Resources time={time} gold={gold} lumber={lumber} supply={supply} />
      <section style={{ display: "flex" }}>
        <InProgressUnits units={units} />
        <InProgressBuildings buildings={buildings} />
      </section>
    </section>
  );
}
