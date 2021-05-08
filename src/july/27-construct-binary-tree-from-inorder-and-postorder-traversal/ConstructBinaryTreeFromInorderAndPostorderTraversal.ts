// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3403/

import { TreeNode } from '../../common';

export const buildTree = (
  inorder: number[],
  postorder: number[]
): TreeNode | null => {
  if (
    !Array.isArray(inorder) ||
    !Array.isArray(postorder) ||
    !inorder.length ||
    !postorder.length
  ) {
    return null;
  }
  if (inorder.length <= 1) {
    return new TreeNode(inorder[0]);
  }
  // The last node in the postorder traversal list is the root of the current tree
  const root = new TreeNode(postorder[postorder.length - 1]);
  // Look for the root in the inorder list:
  // everything to the left is in its left subtree
  // everything to the right is in its right subtree
  const rootInOrderIndex = inorder.findIndex((element) => element === root.val);
  // Look for the corresponding subtree in postorder traversal list
  // Use the last node in the left subtree to devide
  const leftEnd = inorder[rootInOrderIndex - 1];
  const postOrderDividerIndex = postorder.findIndex(
    (element) => element === leftEnd
  );
  // postOrderDividerIndex = postOrderDividerIndex < 0 ? 0 : postOrderDividerIndex;
  root.left = buildTree(
    inorder.slice(0, rootInOrderIndex),
    postorder.slice(0, postOrderDividerIndex + 1)
  );
  root.right = buildTree(
    inorder.slice(rootInOrderIndex + 1),
    postorder.slice(postOrderDividerIndex + 1, postorder.length - 1)
  );
  return root;
};

export default buildTree;
