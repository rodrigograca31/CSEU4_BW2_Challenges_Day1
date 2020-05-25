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
var addTwoNumbers = function (l1, l2) {
  numStr1 = "";
  numStr2 = "";
  while (l1) {
    numStr1 = l1.val + numStr1;
    numStr2 = l2.val + numStr2;
    l1 = l1.next;
    l2 = l2.next;
  }
  console.log(numStr1);
  console.log(numStr2);
  console.log();

  numSum = parseInt(numStr1) + parseInt(numStr2);
  numSum = numSum.toString().split("").reverse();
  console.log(numSum);

  newList = ListNode(parseInt(numSum[0]));
  newListHead = newList;

  console.log();
  numSum.slice(1).forEach((element) => {
    console.log(element);

    newList.next = ListNode(parseInt(element));
    newList = newList.next;
  });
  console.log();

  return newListHead;
};

const ListNode = (val) => {
  next = null;
  val = val;

  return {
    next: next,
    val: val,
  };
};

l1 = ListNode(2);
l1.next = ListNode(4);
l1.next.next = ListNode(3);

l2 = ListNode(5);
l2.next = ListNode(6);
l2.next.next = ListNode(4);

result = addTwoNumbers(l1, l2);

while (result) {
  console.log(result.val);
  result = result.next;
}
