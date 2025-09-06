// City coordinates for graph layout
export const cities = {
  delhi:     { name: "Delhi",     x: 100,  y: 300 },
  mumbai:    { name: "Mumbai",    x: 700,  y: 500 },
  kolkata:   { name: "Kolkata",   x: 1000, y: 200 },
  bangalore: { name: "Bangalore", x: 500,  y: 100 },
};

// Road type-based time and cost estimator
function estimateRouteDetails(distance, description) {
  let speed = 60;     // in km/h
  let rate = 2;       // cost per km in ₹

  switch (description) {
    case "Highway":
      speed = 80; rate = 2; break;
    case "Expressway":
      speed = 100; rate = 2.5; break;
    case "NH":
      speed = 60; rate = 2.2; break;
    case "State Road":
      speed = 50; rate = 2; break;
    case "Urban Road":
      speed = 40; rate = 3; break;
    default:
      speed = 60; rate = 2; break;
  }

  const time = Math.round((distance / speed) * 60); // in minutes
  const cost = Math.round(distance * rate);         // in ₹

  return { time, cost };
}

// Define raw edges (only distance and description)
const rawEdges = [
  { from: "delhi", to: "mumbai", distance: 1400, description: "Highway" },
  { from: "delhi", to: "kolkata", distance: 1500, description: "Expressway" },
  { from: "mumbai", to: "bangalore", distance: 1000, description: "NH" },
  { from: "kolkata", to: "bangalore", distance: 1800, description: "State Road" },
  { from: "mumbai", to: "kolkata", distance: 1960, description: "Urban Road" },
];

// Apply estimation to every edge
export const edges = rawEdges.map((edge) => ({
  ...edge,
  ...estimateRouteDetails(edge.distance, edge.description),
}));
