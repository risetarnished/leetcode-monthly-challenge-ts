import { buildTree, TreeNode } from '../../../src/public_apis';

// const preorderPrintNodes = (root: TreeNode | null): void => {
//   const queue = [root];
//   while (queue.length > 0) {
//     const node = queue.shift();
//     if (node) {
//       console.log(node.val);
//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }
//   }
// };

describe('Construct Binary Tree From Inorder And Postorder Traversal Tests', () => {
  const inorder: number[] = [9, 3, 15, 20, 7];
  const postorder: number[] = [9, 15, 7, 20, 3];

  afterEach(() => {
    expect.hasAssertions();
  });

  it('should not build a tree when either one of the input arrays is empty', () => {
    expect(buildTree([], postorder)).toBeNull();
    expect(buildTree(inorder, [])).toBeNull();
  });

  it('should build a binary tree given its inorder and postorder traversal keys lists', () => {
    expect(buildTree(inorder, postorder)).toEqual(
      TreeNode.buildTree([3, 9, 20, undefined, undefined, 15, 7])
    );
    expect(buildTree([1, 2, 3], [3, 2, 1])).toEqual(
      TreeNode.buildTree([1, undefined, 2, undefined, 3])
    );
    // expect(buildTree([1, 2, 3, 4], [2, 1, 4, 3])).toEqual(
    //   TreeNode.buildTree([3, 1, 4, undefined, 2])
    // );
  });
});
