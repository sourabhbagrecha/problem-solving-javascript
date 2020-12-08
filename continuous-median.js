const continuousMedian = (arr) => {
  const medians = []
  const lowerHalf = new BinaryHeap(MAX_HEAP_COMP_FUNC)
  const greaterHalf = new BinaryHeap(MIN_HEAP_COMP_FUNC)
  for (let ele of arr) {
    if (lowerHalf.length === 0) {
      lowerHalf.insert(ele)
    } else if (ele > lowerHalf.values[0]) {
      greaterHalf.insert(ele)
    } else {
      lowerHalf.insert(ele)
    }
    if (lowerHalf.length - greaterHalf.length === 2) {
      greaterHalf.insert(lowerHalf.extractTop())
    } else if (greaterHalf.length - lowerHalf.length === 2) {
      lowerHalf.insert(greaterHalf.extractTop())
    }
    let median
    if (lowerHalf.length === greaterHalf.length) {
      median = (lowerHalf.values[0] + greaterHalf.values[0]) / 2
    } else if (lowerHalf.length > greaterHalf.length) {
      median = lowerHalf.values[0]
    } else {
      median = greaterHalf.values[0]
    }
    console.log(median, lowerHalf.values, greaterHalf.values)
    medians.push(median)
  }
  return medians
}

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

class BinaryHeap {
  constructor(comparisonFunc) {
    this.values = []
    this.length = 0
    this.compFunc = comparisonFunc
  }
  insert(val) {
    this.values.push(val)
    this.length++
    this.bubbleUp()
    return
  }
  bubbleUp() {
    let index = this.values.length - 1
    let parentIndex = Math.floor((index - 1) / 2)
    while (this.compFunc(this.values[index], this.values[parentIndex])) {
      console.log(index, parentIndex)
      swap(this.values, parentIndex, index)
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
    return
  }
  extractTop() {
    swap(this.values, 0, this.values.length - 1)
    const ele = this.values.pop()
    this.sinkDown()
    this.length--
    return ele
  }
  sinkDown() {
    let parentIdx = 0
    let lastElementIdx = this.values.length - 1
    while (parentIdx < lastElementIdx) {
      let leftChildIdx = (parentIdx * 2) + 1
      let rightChildIdx = (parentIdx * 2) + 2
      let newParentIdx = parentIdx
      let maxVal = this.values[parentIdx]
      if (rightChildIdx <= lastElementIdx) {
        if (this.compFunc(this.values[rightChildIdx], maxVal)) {
          newParentIdx = rightChildIdx
          maxVal = this.values[rightChildIdx]
        }
      }
      if (leftChildIdx <= lastElementIdx) {
        if (this.compFunc(this.values[leftChildIdx], maxVal)) {
          newParentIdx = leftChildIdx
          maxVal = this.values[leftChildIdx]
        }
      }
      if (newParentIdx !== parentIdx) {
        swap(this.values, newParentIdx, parentIdx)
        parentIdx = newParentIdx
      }
      else break
    }
    return
  }
}

const MAX_HEAP_COMP_FUNC = (a, b) => {
  return a > b
}

const MIN_HEAP_COMP_FUNC = (a, b) => {
  return a < b
}

const arr = [5, 10, 100, 200, 6, 13, 14]

console.log(continuousMedian(arr))