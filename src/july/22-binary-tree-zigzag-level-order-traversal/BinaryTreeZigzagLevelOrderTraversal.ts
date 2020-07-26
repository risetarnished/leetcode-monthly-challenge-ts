import { TreeNode } from '../../common';

export const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  if (root === null) {
    return [];
  }
  let level = 0;
  const queue: TreeNode[] = [root];
  const result: number[][] = [];
  while (queue.length > 0) {
    // Poll from the head of the queue in odd levels
    // Pop from the end of the queue in even levels
    const isEven = level % 2 === 0;
    const levelSize = queue.length;
    const levelResult: number[] = [];
    for (let i = 0; i < levelSize; i += 1) {
      const current = isEven ? queue.pop() : queue.shift();
      /* istanbul ignore else */
      if (current) {
        levelResult.push(current.val);
        if (isEven) {
          if (current.left) {
            queue.unshift(current.left);
          }
          if (current.right) {
            queue.unshift(current.right);
          }
        } else {
          if (current.right) {
            queue.push(current.right);
          }
          if (current.left) {
            queue.push(current.left);
          }
        }
      }
    }
    result.push(levelResult);
    level += 1;
  }
  return result;
};

export default zigzagLevelOrder;
