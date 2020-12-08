const { LinkedList } = require("./linked-list");

const list1 = new LinkedList([1, 3, 4, 5, 9, 10])
const list2 = new LinkedList([2, 6, 7, 8])

list1.print()
list2.print()

// O(n+m) | O(1)
const mergeLinkedList = (list1, list2) => {
  let prev = null
  let p1 = list1.head
  let p2 = list2.head
  console.log(list1, list2)
  while (p1 && p2) {
    if (p1.val < p2.val) {
      prev = p1
      p1 = p1.next
    } else {
      if(prev){
        prev.next = p2
      }
      prev = p2
      p2 = p2.next
      prev.next = p1
    }
  }
  if(!p1) prev.next = p2
  return list1.head.val > list2.head.val ? list2.head : list1.head
}

console.log(mergeLinkedList(list1, list2).next.next.next.next.next.next.next)