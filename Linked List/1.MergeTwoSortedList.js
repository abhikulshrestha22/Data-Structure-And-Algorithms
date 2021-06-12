// Problem Link - https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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
