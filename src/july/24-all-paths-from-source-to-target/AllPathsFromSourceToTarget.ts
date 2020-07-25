const findAllPaths = (
  graph: number[][],
  index: number,
  path: number[],
  result: number[][]
): void => {
  // Base case: when we reach the end/target
  if (index === graph.length - 1) {
    path.push(index);
    result.push(Array.from(path));
    path.pop();
    return;
  }
  graph[index].forEach((edge) => {
    path.push(index);
    findAllPaths(graph, edge, path, result);
    path.pop();
  });
};

export const allPathsSourceTarget = (graph: number[][]): number[][] => {
  if (!Array.isArray(graph) || !graph.length) {
    return [];
  }
  const result: number[][] = [];
  findAllPaths(graph, 0, [], result);
  return result;
};

export default allPathsSourceTarget;
