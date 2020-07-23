export class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }

  static buildTree = (nodes: (number | undefined)[]): TreeNode | null => {
    if (!Array.isArray(nodes) || !nodes.length) {
      return null;
    }
    let index = 0;
    const nodesSize = nodes.length;
    const root = new TreeNode(nodes[0]);
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i += 1) {
        const node = queue.shift();
        if (node) {
          const left =
            index >= nodesSize ? null : TreeNode.buildNode(nodes[(index += 1)]);
          node.left = left;
          const right =
            index >= nodesSize ? null : TreeNode.buildNode(nodes[(index += 1)]);
          node.right = right;
          if (left) {
            queue.push(left);
          }
          if (right) {
            queue.push(right);
          }
          // Stop when reaching the end
          if (index >= nodesSize) {
            break;
          }
        }
      }
    }
    return root;
  };

  static buildNode = (val: number | undefined): TreeNode | null => {
    return val ? new TreeNode(val) : null;
  };
}

export default TreeNode;
