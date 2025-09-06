export function dijkstra(cities, edges, start, end, weightType = "distance") {
  const dist = {};
  const prev = {};
  const visited = new Set();

  Object.keys(cities).forEach((c) => (dist[c] = Infinity));
  dist[start] = 0;

  while (visited.size < Object.keys(cities).length) {
    let u = null;
    Object.keys(cities).forEach((node) => {
      if (!visited.has(node) && (u === null || dist[node] < dist[u])) {
        u = node;
      }
    });

    if (!u || dist[u] === Infinity) break;
    visited.add(u);

    const neighbors = edges.filter((e) => e.from === u);
    for (const edge of neighbors) {
      if (visited.has(edge.to)) continue;
      const alt = dist[u] + edge[weightType];
      if (alt < dist[edge.to]) {
        dist[edge.to] = alt;
        prev[edge.to] = { id: u, edge };
      }
    }
  }

  let path = [];
  let total = { distance: 0, cost: 0, time: 0 };
  let curr = end;
  while (curr !== start && prev[curr]) {
    const { edge, id } = prev[curr];
    path.unshift({ ...edge, fromName: cities[id].name, toName: cities[curr].name });
    total.distance += edge.distance;
    total.cost += edge.cost;
    total.time += edge.time;
    curr = id;
  }

  return { path, total };
}
