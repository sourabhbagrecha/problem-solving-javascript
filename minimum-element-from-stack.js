class Stack {
  constructor() {
    this.values = []
    this.minEle = null
  }

  push(x) {
    if(!this.minEle) {
      this.minEle = x
      this.values.push(x)
      return
    }
    if(x<this.minEle){
      const eleToPush = (2*x)-this.minEle
      this.minEle = x
      this.values.push(eleToPush)
      return
    }
    this.values.push(x)
    return
  }

  pop() {
    if(this.values.length === 0) return null
    let topEle = this.values.pop()
    let poppedEle = topEle
    if(topEle<this.minEle){
      poppedEle = this.minEle
      const newMinEle = (2*this.minEle)-topEle
      this.minEle = newMinEle
    }
    console.log("popped ele: ", poppedEle)
    return
  }

  getMin() {
    return this.minEle
  }
}

const stack = new Stack()

stack.push(10)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(5)
stack.push(12)
stack.push(4)
console.log(stack.values)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack.minEle)
console.log(stack.values)