import React from "react";

import "./main.css";

const COLORS = {
  BLACK: "black",
  GREEN: "green"
};

export const Marker = ({ color }) => {
  if (!color || !Object.values(COLORS).includes(color)) {
    console.warn("invalid color, set black default color");
    color = COLORS.BLACK;
  }
  return (
    <div className="marker-wrapper">
      <div className={`marker marker-${color}`}></div>
    </div>
  );
};

Marker.COLORS = COLORS;
