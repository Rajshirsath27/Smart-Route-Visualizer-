import React from "react";

const ControlPanel = ({ onFindPath }) => {
  return (
    <button onClick={onFindPath}>Find Shortest Path</button>
  );
};

export default ControlPanel;
