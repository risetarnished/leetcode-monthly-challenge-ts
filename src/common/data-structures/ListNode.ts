import { ArrayHelper } from '../utils';

export class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }

  static buildList = (nodes: number[]): ListNode | null => {
    if (!ArrayHelper.isValidArray(nodes)) {
      return null;
    }
    const dummy = new ListNode();
    let head = new ListNode(nodes[0]);
    dummy.next = head;
    nodes.forEach((node, index) => {
      if (index === 0) {
        return;
      }
      const newNode = new ListNode(node);
      head.next = newNode;
      head = head.next;
    });
    return dummy.next;
  };
}

export default ListNode;
