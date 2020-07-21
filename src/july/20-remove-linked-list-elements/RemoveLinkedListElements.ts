// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3396/

import { ListNode } from '../../common';

export const removeElements = (
  head: ListNode | null,
  val: number
): ListNode => {
  if (!head) {
    return new ListNode();
  }
  // Delete/skip the leading nodes that have this value
  while (head && head.val === val) {
    const prev = head;
    // eslint-disable-next-line no-param-reassign
    head = head.next;
    prev.next = null;
  }
  if (!head) {
    return new ListNode();
  }
  // After this step, head points to the first node with a different value
  // Keep the reference of the head for the result
  let previous: ListNode = new ListNode();
  let current = head;
  while (current && current.next) {
    let { next } = current;
    while (next && next.next && next.val === val) {
      next = next.next;
    }
    // next will stop at either the end of the linked list
    // or the first node that does not have the value
    // Connect current -> next and move on
    current.next = next;
    previous = current;
    current = next;
  }
  // Post-processing: current will stop at the end of the linked list
  if (current && current.val === val) {
    previous.next = null;
  }
  return head;
};

export default removeElements;
