/**
 * Link - https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    list1 = lists.shift();
    list2 = lists.shift();
    const result = mergeTwoLists(list1, list2);
    lists.push(result);
  }
  return lists[0];
};

var mergeTwoLists = function (l1, l2) {
  let result = new ListNode(null, null);
  let currentNode = result;
  while (l1 || l2) {
    if (!l2 || (l1 && l2 && l1.val <= l2.val)) {
      let newNode = new ListNode(l1.val, null);
      currentNode.next = newNode;
      currentNode = currentNode.next;
      l1 = l1.next;
    } else {
      let newNode = new ListNode(l2.val, null);
      currentNode.next = newNode;
      currentNode = currentNode.next;
      l2 = l2.next;
    }
  }
  return result.next;
};
