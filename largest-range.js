const getRange = (pos, arr, state) => {
  const num = arr[pos]
  const range = []
  let currentNum = num-1
  while(state[currentNum]){
    range.push(currentNum)
    state[currentNum] = false
    currentNum--
  }
  state[num] = false
  range.push(num)
  currentNum = num+1
  while(state[currentNum]){
    range.push(currentNum)
    currentNum++
  }
  return range
}

const largestRange = (arr) => {
  const state = {}
  let rangeLargest = []
  for(let i=0; i<arr.length; i++){
    const num = arr[i]
    if(!state[num]){
      state[num] = true
    }
  }
  for(let j=0; j<arr.length; j++){
    const num = arr[j]
    if(state[num]){
      const currentRange = getRange(j, arr, state)
      rangeLargest = currentRange.length > rangeLargest.length ? currentRange : rangeLargest
    }
  }
  return [rangeLargest[0], rangeLargest[rangeLargest.length-1]]
}

const arr = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]

console.log(largestRange(arr))