/*
sortList.js
---
PROMPT
---
Given the head of a linked list, return the list after sorting it in ascending order.
Try to sort the linked list in O(n logn) time and O(1) memory (i.e. constant space).
---
EXAMPLES
---
Input: head = [4,2,1,3]
Output: [1,2,3,4]
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Input: head = []
Output: []
---
CONSTRAINTS
---
The number of nodes in the list is in the range [0, 5 * 10^4].
-10^5 <= Node.val <= 10^5
Definition for singly-linked list:
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val);
     this.next = (next===undefined ? null : next);
  }
*/

var sortList = function( head ) {
  let result = [];
  let reference = head;
  const recurse = function ( pointer ) {
    let value = pointer.value;
    result.push(value);
    result.sort( ( a, b ) => a - b );
    reference = pointer.next;
  }

  if ( head.value === undefined ) {
    return result;
  };

  while ( reference !== undefined ) {
    recurse ( reference );
  }

  return result;

};


//***vvvvvvvvvvvvvv LINKED LIST MACHINE vvvvvvvvvvv */
const Node = function ( value = null, next = null ) {
  this.value = value;
  this.next = next;
}

const LL = function () {
  this.head = null;
  this.tail = null;

}

LL.prototype.addToHead = function ( value ) {
  let tmp = this.head || null;
  let node = new Node( value, tmp );
  this.head = node;
  this.tail = this.tail || node;
}
LL.prototype.addToTail = function ( value ) {
  let node = new Node( value );
  this.tail.next = node;
  this.tail = node;
  this.head = this.head || node;
}

let ll = new LL();
ll.addToHead(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(4);
ll.addToTail(5);
console.log(ll);