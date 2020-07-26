import { findMin } from '../../../src/public_apis';

describe('Find Minimum in Rotated Sorted Array II tests', () => {
  afterEach(() => {
    expect.hasAssertions();
  });

  it('should not find the min when the array is empty', () => {
    expect(findMin([])).toBe(-1);
  });

  it('should find the min when the array is not rotated', () => {
    expect(findMin([0, 1, 2, 3, 4, 5])).toBe(0);
  });

  it('should find the min when the array is rotated', () => {
    expect(findMin([2, 3, 4, 5, 0, 1])).toBe(0);
    expect(findMin([10, 1, 10, 10, 10])).toBe(1);
  });
});
