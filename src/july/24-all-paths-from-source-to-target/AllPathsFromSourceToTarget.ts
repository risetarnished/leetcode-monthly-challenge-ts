const findAllPaths = (
  graph: number[][],
  index: number,
  paths: number[],
  result: number[][]
): void => {
  // Base case: when we reach the end/target
  if (index === graph.length - 1) {
    paths.push(index);
    result.push(Array.from(paths));
    paths.pop();
    return;
  }
  graph[index].forEach((edge) => {
    paths.push(index);
    findAllPaths(graph, edge, paths, result);
    paths.pop();
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
