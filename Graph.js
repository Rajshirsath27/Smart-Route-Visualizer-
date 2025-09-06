import React from "react";
import "./Graph.css";
import Edge from "./Edge";
import Node from "./Node";

const Graph = ({ cities, edges, path }) => {
  return (
    <svg width={1200} height={700} className="graph-svg">
      {/* Render edges */}
      {edges.map((edge, i) => {
        const from = cities[edge.from];
        const to = cities[edge.to];
        const isHighlighted = path.some(
          (p) => p.from === edge.from && p.to === edge.to
        );
        return (
          <Edge key={i} edge={edge} from={from} to={to} isHighlighted={isHighlighted} />
        );
      })}

      {/* Render nodes */}
      {Object.entries(cities).map(([key, node]) => (
        <Node key={key} x={node.x} y={node.y} label={node.name} />
      ))}
    </svg>
  );
};

export default Graph;
