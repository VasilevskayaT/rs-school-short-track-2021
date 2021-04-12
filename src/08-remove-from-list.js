/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function removeKFromList(arr, num) {
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }
  const fromListToArray = (listNode, array = []) => {
    const [number, nodeList] = Object.values(listNode);
    array.push(number);
    if (nodeList) {
      return fromListToArray(nodeList, array);
    }
    return array;
  };

  return fromListToArray(arr).filter((item) => item !== num).reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

module.exports = removeKFromList;
