import React from "react";
import "./Selection.css";
import Icon from "../icons/head.png";
import Tree from "../icons/tree.jpg";

export default function Selection() {
  let itemsToSelect = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <section id="selection">
      {itemsToSelect.map((item) => (
        <div
          className="itemToSelect"
          style={{
            backgroundImage: `url(${Icon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div id="count">1</div>
          <div
            id="type"
            style={{
              backgroundImage: `url(${Tree})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      ))}
    </section>
  );
}
