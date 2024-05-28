import React from "react";
//maybe eventually svg stuff
export default function ({ image, value }) {
  return (
    <div style={{ display: "flex" }}>
      {/* Some default image */}
      <img src={image} style={{width: 
      "50px", height: "50px"}}/>
      <p>{value}</p>
    </div>
  );
}
