class LNode {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(head){
    this.head = head
  }
  insert(val){
    let current = this.head
    while(current.next !== null){
      current = current.next
    }
    const node = new LNode(val)
    current.next = node
    return node
  }
  reverse(){
    let current = this.head
    let prev = null

    while(current!==null){
      const temp = current.next
      current.next = prev
      prev = current
      current = temp
    }
    this.head = prev
    return
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

const newHead = new LNode(10)
const ll = new LinkedList(newHead)
ll.insert(20)
ll.insert(30)
ll.insert(40)
ll.insert(50)
ll.print()
ll.reverse()
ll.print()