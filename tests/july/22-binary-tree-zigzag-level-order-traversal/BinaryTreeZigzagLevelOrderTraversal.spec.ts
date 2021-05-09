import { TreeNode } from '../../../src/common';
import { zigzagLevelOrder } from '../../../src/july/22-binary-tree-zigzag-level-order-traversal/BinaryTreeZigzagLevelOrderTraversal';

describe('Binary Tree Zigzag Level Order Traversal Tests', () => {
  //        3
  //      /   \
  //     9     20
  //    /     /  \
  //   1     15   7
  //        /  \
  //       2    8
  const root = TreeNode.buildTree([3, 9, 20, 1, undefined, 15, 7, 2, 8]);

  afterEach(() => {
    expect.hasAssertions();
  });

  it('should not traverse the tree if the tree is invalid', () => {
    expect(zigzagLevelOrder(null)).toEqual([]);
  });

  it('should traverse when there is only one node', () => {
    expect(zigzagLevelOrder(new TreeNode(0))).toEqual([[0]]);
  });

  it('should traverse the tree in zigzag level order', () => {
    expect(zigzagLevelOrder(root)).toStrictEqual([
      [3],
      [20, 9],
      [1, 15, 7],
      [8, 2],
    ]);
  });
});
