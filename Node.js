import React from "react";

const Node = ({ x, y, label }) => (
  <g>
    <circle
      cx={x}
      cy={y}
      r={32} // Increased from 24 to 32
      fill="steelblue"
      stroke="black"
      strokeWidth="1"
    />
    <text
      x={x}
      y={y + 8} // Adjusted to keep label vertically centered
      fontSize="16" // Slightly larger font for visibility
      fill="#fff"
      textAnchor="middle"
    >
      {label}
    </text>
  </g>
);

export default Node;
