class MinMaxStack {
  constructor(){
    this.values = [],
    this.minMax = []
  }

  peek(){
    return this.values[this.values.length-1]
  }

  pop(){
    this.minMax.pop()
    return this.values.pop()
  }

  push(val){
    this.values.push(val)
    if(this.minMax.length === 0){
      return this.minMax.push([val, val])
    }
    let lastMinMax = this.minMax[this.minMax.length-1]
    if(val>lastMinMax[1]){
      return this.minMax.push([lastMinMax[0], val])
    } else if(val<lastMinMax[0]){
      return this.minMax.push([val, lastMinMax[1]])
    } else {
      return this.minMax.push([lastMinMax[0], lastMinMax[1]])
    }
  }

  getMin(){
    return this.minMax[this.minMax.length-1][0]
  }

  getMax(){
    return this.minMax[this.minMax.length-1][1]
  }

}

const newMinMax = new MinMaxStack()

newMinMax.push(12)
newMinMax.push(11)
newMinMax.push(10)

console.log(newMinMax.peek())