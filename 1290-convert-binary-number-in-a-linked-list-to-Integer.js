/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

const getDecimalValue = (head) => {
    let binary = '';

    while (head) {
        binary += head.val;
        head = head.next;
    }

    return parseInt(binary, 2);
};
