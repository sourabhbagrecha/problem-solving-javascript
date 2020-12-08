class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(node) {
    this.head = node
  }

  print() {
    let currentNode = this.head
    while (currentNode != null) {
      process.stdout.write(currentNode.val + " -> ")
      currentNode = currentNode.next
    }
    process.stdout.write("null\n")
  }

}

const node = new Node(4)
node.next = new Node(6)
node.next.next = new Node(8)
node.next.next.next = new Node(5)
node.next.next.next.next = new Node(9)
node.next.next.next.next.next = new Node(15)
node.next.next.next.next.next.next = new Node(11)

const linkedList = new LinkedList(node)

const removeNthNodeFromEnd = (linkedList, n) => {
  let first = linkedList.head
  let second = first
  while (n > 0) {
    second = second.next
    n--
  }
  while (second.next != null) {
    second = second.next
    first = first.next
  }
  first.next = first.next.next
  return ({ first, second })
}

linkedList.print()
removeNthNodeFromEnd(linkedList, 4)
linkedList.print()