export const singleNumber = (nums: number[]): number[] => {
  if (!Array.isArray(nums) || !nums.length) {
    return [];
  }
  const frequency = new Map<number, number>();
  nums.forEach((num) => {
    const freq = frequency.get(num);
    if (freq) {
      frequency.set(num, freq + 1);
    } else {
      frequency.set(num, 1);
    }
  });
  const result: number[] = [];
  frequency.forEach((freq, num) => {
    if (freq === 1) {
      result.push(num);
    }
  });
  return result;
};

export default singleNumber;
