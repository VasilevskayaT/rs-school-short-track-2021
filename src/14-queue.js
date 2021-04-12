const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.arr = this.queue;
  }

  get size() {
    return this.arr;
  }

  enqueue(el) {
    this.arr.val = el;
    this.arr.next = new ListNode();
    this.arr = this.arr.next;
  }

  dequeue() {
    const res = this.queue.val;
    this.queue.val = this.queue.next.val;
    this.queue.next = this.queue.next.next;
    return res;
  }
}

module.exports = Queue;
