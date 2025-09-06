import React, { useState } from "react"; 
import Graph from "./components/Graph";
import CitySelector from "./components/CitySelector";
import ControlPanel from "./components/ControlPanel";
import PathInfo from "./components/PathInfo";
import { dijkstra } from "./algorithms/dijkstra";
import { cities, edges } from "./data/cities";

function App() {
  const [start, setStart] = useState("delhi");
  const [end, setEnd] = useState("mumbai");
  const [weightType, setWeightType] = useState("distance");
  const [result, setResult] = useState({ path: [], total: {} });

  const handleFindPath = () => {
    const res = dijkstra(cities, edges, start, end, weightType);
    setResult(res);
  };

  return (
    <div className="app">
      <h1>  SmartRoute Visualizer  </h1>
      <div className="controls">
        <CitySelector label="Start" cities={cities} selected={start} onSelect={setStart} />
        <CitySelector label="End" cities={cities} selected={end} onSelect={setEnd} />
        <select value={weightType} onChange={(e) => setWeightType(e.target.value)}>
          <option value="distance">Distance</option>
          <option value="time">Time</option>
          <option value="cost">Cost</option>
        </select>
        <ControlPanel onFindPath={handleFindPath} />
      </div>
      <Graph cities={cities} edges={edges} path={result.path} />
      <PathInfo path={result.path} total={result.total} />
    </div>
  );
}
export default App;