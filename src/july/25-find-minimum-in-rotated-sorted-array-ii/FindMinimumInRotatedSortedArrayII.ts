// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3401/

export const findMin = (nums: number[]): number => {
  if (!Array.isArray(nums) || !nums.length) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left + 1 < right) {
    const mid = Math.trunc(left + (right - left) / 2);
    // Determine whether the array is rotated: array[0] > array[end] ?
    if (nums[mid] > nums[right]) {
      left = mid;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      right -= 1;
    }
  }
  return Math.min(nums[left], nums[right]);
};

export default findMin;
