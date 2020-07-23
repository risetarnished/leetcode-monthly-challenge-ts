import { ListNode, removeElements } from '../../../src/public_apis';

describe('Remove Linked List Elements Tests', () => {
  afterEach(() => {
    expect.hasAssertions();
  });

  it('should not do anything when the linked list is empty', () => {
    expect(removeElements(null, 0)).toEqual(new ListNode());
    expect(removeElements(new ListNode(), 0)).toEqual(new ListNode());
  });

  it('should remove all occurrence of nodes with the provided value', () => {
    expect(
      removeElements(ListNode.buildList([1, 2, 6, 3, 4, 5, 6]), 6)
    ).toStrictEqual(ListNode.buildList([1, 2, 3, 4, 5]));

    expect(removeElements(ListNode.buildList([1, 2, 2, 1]), 2)).toStrictEqual(
      ListNode.buildList([1, 1])
    );

    expect(removeElements(ListNode.buildList([1, 2, 2, 1]), 1)).toStrictEqual(
      ListNode.buildList([2, 2])
    );

    expect(removeElements(ListNode.buildList([1, 1, 1, 1]), 1)).toStrictEqual(
      new ListNode()
    );
  });
});
