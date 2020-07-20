// import topKFrequent from 'src/public_apis';
// import topKFrequent from 'src/july/17-top-k-frequent-elements/TopKFrequentElements';
import topKFrequent from '../../../src/july/17-top-k-frequent-elements/TopKFrequentElements';

describe('Top K Frequent Elements Tests', () => {
  it('should not get anything when the input is invalid', () => {
    expect(topKFrequent(undefined, 0)).toEqual([]);
  });

  it('should not get anything when the input is empty', () => {
    expect(topKFrequent([], 0)).toEqual([]);
  });

  it('should not get anything when the input array has less than k elements', () => {
    expect(topKFrequent([1, 2, 3], 4)).toEqual([]);
  });

  it('should get top k frequent elements', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    expect(topKFrequent(nums, 2)).toEqual([1, 2]);
  });
});
