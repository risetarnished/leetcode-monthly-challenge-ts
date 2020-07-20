const updateFrequency = (num: number, frequency: Map<number, number>): void => {
  const currentFrequncy = frequency.get(num) || 0;
  frequency.set(num, currentFrequncy + 1);
};

const topKFrequent = (nums: number[], k: number): number[] => {
  if (!Array.isArray(nums) || !nums.length || nums.length < k) {
    return [];
  }
  const frequency: Map<number, number> = new Map<number, number>();
  nums.forEach((num) => {
    updateFrequency(num, frequency);
  });
  const elements: Array<[number, number]> = Array.from(frequency.entries());
  elements.sort((one, two) => two[1] - one[1]);
  const result = elements.map((element) => element[0]);
  return result.slice(0, k);
};

export default topKFrequent;
