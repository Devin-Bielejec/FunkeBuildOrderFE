import { startTransition, useState } from "react";
import "./App.css";
import Timeline from "./Components/Timeline";
import PlayerState from "./Components/PlayerState";
import { playerState, pixelsPerSecond } from "./utils/defaultState";
import DraggableSlider from "./Components/DraggableSlider";
import TimeHeader from "./Components/TimeHeader";
import Selection from "./Components/Selection";
import Building from "./Components/Building";
import ProductionRows from "./Components/ProductionRows";

/* wc3 font?? */
export default function App() {
  const [time, setTime] = useState(0);
  console.log("playerState", playerState.workers);
  return (
    <main>
      <div id="gridContainer">
        <PlayerState playerState={playerState} time={time} />
        <Timeline playerState={playerState} time={time} />
        <Selection />
        <Building />
      </div>
    </main>
  );
}
