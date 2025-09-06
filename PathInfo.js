import React from "react";

const PathInfo = ({ path, total }) => {
  if (!path.length) return <p>No path found.</p>;

  return (
    <div>
      <h3>Path Details</h3>
      <ul>
        {path.map((step, i) => (
          <li key={i}>
            {step.fromName} → {step.toName} :: {step.description} | {step.distance}km | {step.time}min | ₹{step.cost}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> {total.distance}km | {total.time}min | ₹{total.cost}</p>
    </div>
  );
};

export default PathInfo;
