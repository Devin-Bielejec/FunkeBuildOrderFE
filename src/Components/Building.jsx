import React from "react";
import "./Building.css";
export default function Building() {
  let itemsToBuild = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <section id="building">
      {itemsToBuild.map((item) => (
        <div className="itemToBuild">{"X"}</div>
      ))}
    </section>
  );
}
