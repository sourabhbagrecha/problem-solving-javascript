class LNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }
}

const linkedList = new LinkedList()
const node0 = new LNode(0)
linkedList.head = node0 
const node1 = new LNode(1)
node0.next = node1
const node2 = new LNode(2)
node1.next = node2
const node4 = new LNode(4)
node2.next = node4
const node5 = new LNode(5)
node4.next = node5
const node6 = new LNode(6)
node5.next = node6
const node7 = new LNode(7)
node6.next = node7
const node8 = new LNode(8)
node7.next = node8
const node9 = new LNode(9)
node8.next = node9
node9.next = node4

const findLoop = (linkedList) => {
  let first = linkedList.head.next
  let second = linkedList.head.next.next
  while ((second !== first)) {
    first = first.next
    second = second.next.next
  }
  first = linkedList.head
  let distance = 0
  while(second!==first){
    distance++
    first = first.next
    second = second.next
  }
  first = linkedList.head
  while(distance>0){
    first = first.next
    distance--
  }
  return first.val
}

console.log(findLoop(linkedList))