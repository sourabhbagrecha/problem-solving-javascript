class LRUCache {
  constructor(maxSize) {
    this.cache = {}
    this.maxSize = maxSize || 1
    this.currentSize = 0
    this.listOfMostRecent = new DoublyLinkedList()
  }
  
  // O(1) | O(1)
  insertKeyValuePair(key, value) {
    if (!this.cache[key]) {
      if (this.currentSize === this.maxSize) {
        this.evictLeastRecent()
      } else {
        this.currentSize++
      }
      this.cache[key] = new DoublyLinkedListNode(key, value)
    } else {
      this.replaceKey(key, value)
    }
    this.updateMostRecent(this.cache[key])
  }
  
  // O(1) | O(1)
  getValueFromKey(key) {
    if(!this.cache[key]) return
    this.updateMostRecent(this.cache[key])
    return this.cache[key].value
  }

  // O(1) | O(1)
  getMostRecentKey() {
    return this.listOfMostRecent.head.key
  }

  replaceKey(key, value) {
    if (!this.cache[key]) {
      throw new Error("No such key exists!")
    }
    this.cache[key].value = value
  }

  evictLeastRecent() {
    const keyToRemove = this.listOfMostRecent.tail.key
    this.listOfMostRecent.removeTail()
    delete this.cache[keyToRemove]
  }

  updateMostRecent(node) {
    this.listOfMostRecent.setHeadTo(node)
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  setHeadTo(node) {
    if (this.head === node) return
    else if (this.head === null) {
      this.tail = node
      this.head = node
    } else if (this.tail === this.head) {
      this.tail.prev = node
      node.next = this.tail
      this.head = node
    } else {
      if (this.tail === node) {
        this.removeTail()
      }
      node.removeBindings()
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
  }

  removeTail() {
    if (!this.tail) {
      return
    }
    if (this.tail === this.head) {
      this.head = null
      this.tail = null
      return
    }
    this.tail = this.tail.prev
    this.tail.next = null
  }
}

class DoublyLinkedListNode {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
  }

  removeBindings() {
    if (this.prev) {
      this.prev.next = this.next
    }
    if (this.next) {
      this.next.prev = this.prev
    }
    this.prev = null
    this.next = null
  }
}

const myLRUCache = new LRUCache(4)

myLRUCache.insertKeyValuePair("a", 4)
myLRUCache.insertKeyValuePair("b", 6)
myLRUCache.insertKeyValuePair("c", 8)
myLRUCache.insertKeyValuePair("d", 12)
myLRUCache.insertKeyValuePair("e", 12)
myLRUCache.insertKeyValuePair("b", 12)

console.log(myLRUCache)