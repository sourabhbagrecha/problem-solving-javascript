class LNode {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(values){
    this.head = null
    if(values){
      for(let val of values) this.insert(val)
    }
  }
  insert(val){
    let current = this.head
    const node = new LNode(val)
    if(!current){
      return this.head = node
    }
    while(current.next !== null){
      current = current.next
    }
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

module.exports = {
  LinkedList,
  LNode
}
