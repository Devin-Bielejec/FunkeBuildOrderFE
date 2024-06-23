import { startTransition, useState } from "react";
import "./App.css";
import Timeline from "./Components/Timeline";
import Player from "./Components/Player";
import { pixelsPerSecond, playersState } from "./utils/defaultState";
import DraggableSlider from "./Components/DraggableSlider";
import TimeHeader from "./Components/TimeHeader";
import Selection from "./Components/Selection";
import Building from "./Components/Building";
import ProductionRows from "./Components/ProductionRows";
import BuildOrders from "./Components/BuildOrders";

/* wc3 font?? */
export default function App() {
  const [time, setTime] = useState(0);
  const [playerState, setPlayerState] = useState(playersState[0]);

  //Change which build order by index is being shown
  const handleBuild = (i) => {
    setPlayerState(playersState[i]);
  };

  return (
    <main>
      <div id="gridContainer">
        {/* <BuildOrders handleBuild={handleBuild} buildOrders={playersState} /> */}
        <Player playerState={playerState} time={time} />
        <Timeline playerState={playerState} time={time} />
        <Selection />
        <Building />
      </div>
    </main>
  );
}
