import React from "react";
import Resources from "./Resources";
import InProgressUnits from "./InProgressUnits";
import InProgressBuildings from "./InProgressBuildings";
import "./Player.css";
export default function PlayerState({ playerState, time }) {
  //compute the inprogressunits and inprogressbuildings

  console.log(playerState);
  let { currentGold, currentLumber, currentFood, currentFoodMax } =
    playerState.currentResources; //Easier use
  return (
    <section id="playerState">
      <Resources
        time={time}
        gold={currentGold}
        lumber={currentLumber}
        supply={[currentFood, currentFoodMax]}
      />
      <section style={{ display: "flex" }}>
        {/* <InProgressUnits units={units} />
        <InProgressBuildings buildings={buildings} /> */}
      </section>
    </section>
  );
}
