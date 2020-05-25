"""
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }


 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
"""


class ListNode():
    def __init__(self, val):
        self.val = val
        self.next = None


def addTwoNumbers(l1, l2):
    numStr1 = ""
    numStr2 = ""
    while l1:
        # print(l1.val)
        numStr1 = str(l1.val) + numStr1
        numStr2 = str(l2.val) + numStr2
        l1 = l1.next
        l2 = l2.next

    # print(numStr1)
    # print(numStr2)
    # print()

    numSum = str(int(numStr1) + int(numStr2))
    # print(numSum)
    numSum = numSum[::-1]  # reverse string
    # print(numSum)

    print()
    newList = ListNode(int(numSum[0]))
    newListHead = newList

    for num in numSum[1:]:
        newList.next = ListNode(num)
        newList = newList.next

    return newListHead


l1 = ListNode(2)
l1.next = ListNode(4)
l1.next.next = ListNode(3)

l2 = ListNode(5)
l2.next = ListNode(6)
l2.next.next = ListNode(4)

result = addTwoNumbers(l1, l2)

print()

while result:
    print(result.val)
    result = result.next
