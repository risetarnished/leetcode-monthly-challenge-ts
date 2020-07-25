import { allPathsSourceTarget } from '../../../src/public_apis';

describe('All Paths from Source to Target Tests', () => {
  afterEach(() => {
    expect.hasAssertions();
  });

  it('should not find a path when the graph is empty', () => {
    expect(allPathsSourceTarget([])).toEqual([]);
  });

  it('should find all paths when there are some', () => {
    expect(allPathsSourceTarget([[1, 2], [3], [3], []])).toEqual([
      [0, 1, 3],
      [0, 2, 3],
    ]);
  });
});
