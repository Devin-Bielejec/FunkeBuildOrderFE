import React from "react";
import ResourceItem from "./ResourceItem";
import TreeIcon from "../icons/tree.jpg";
import GoldIcon from "../icons/gold.jpg";
import ClockIcon from "../icons/clock.jpg";
import FoodIcon from "../icons/food.jpg";

export default function ({ time, gold, lumber, supply }) {
  let convertedTime = new Date(time * 1000).toISOString().substring(14, 19);

  return (
    <section style={{ display: "flex" }}>
      <ResourceItem image={ClockIcon} value={convertedTime} />
      <ResourceItem image={GoldIcon} value={gold}/>
      <ResourceItem image={TreeIcon} value={lumber} />
      <ResourceItem image={FoodIcon} value={`${supply[0]}/${supply[1]}`}/>
    </section>
  );
}
