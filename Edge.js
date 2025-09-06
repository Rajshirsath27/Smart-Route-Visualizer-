import React from "react";

const Edge = ({ edge, from, to, isHighlighted }) => {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  // Force vertical spacing for labels
  const labelOffsetY = -20;  // move the label above the line
  const descOffsetY = -4;    // description just below the main label

  return (
    <g>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={isHighlighted ? "orange" : "gray"}
        strokeWidth={isHighlighted ? 4 : 2}
      />

      {/* First line: edge data */}
      <text
        x={midX}
        y={midY + labelOffsetY}
        fontSize="13"
        fontWeight="bold"
        textAnchor="middle"
        fill={isHighlighted ? "orange" : "#000"}
      >
        {edge.distance}km | {edge.time}min | ₹{edge.cost}
      </text>

      {/* Second line: road type */}
      <text
        x={midX}
        y={midY + labelOffsetY + 14}
        fontSize="12"
        textAnchor="middle"
        fill="#444"
      >
        {edge.description}
      </text>
    </g>
  );
};

export default Edge;
