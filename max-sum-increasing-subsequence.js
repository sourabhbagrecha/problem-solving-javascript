// different approach by C. O(n^2) | O(n)
const maxSumIncSequence = (arr) => {
  const sums = [...arr]
  const sequence = Array(arr.length).fill(-1)
  for(let i=0; i<arr.length; i++){
    const currentEle = arr[i]
    for(let j=0; j<i; j++){
      const otherEle = arr[j]
      if(currentEle>otherEle && sums[i]<sums[j]+currentEle){
        sequence[i] = j
        sums[i] = sums[j]+currentEle
      }
    }
  }
  let maxPosLast=0
  for(let i=0; i<sums.length; i++){
    if(sums[i] > sums[maxPosLast]){
      maxPosLast = i
    }
  }
  let currentPos = maxPosLast
  const results = []
  while(currentPos!==-1){
    results.unshift(arr[currentPos]) //We can also just push(instead of unshift) and reverse this later, but doesn't matter that much because we are already having O(n^2 complexity above)
    currentPos = sequence[currentPos]
  }
  return results
}


// My Approach same w/ time & space complexities
const sumHelper = (arr, pos) => {
  let sum = arr[pos]
  for (let i = pos; i < arr.length; i++) {
    const ele = arr[i]
    if (arr[pos] < ele) {
      sum += ele
    }
  }
  return sum
}

const sequenceHelper = (arr, pos) => {
  const num = arr[pos]
  let nums = [num]
  for (let i = pos; i < arr.length; i++) {
    const ele = arr[i]
    if (num < ele) {
      nums.push(ele)
    }
  }
  return nums
}

// O(n^2) | O(n)
const maxSumIncreasingSubsequence = (arr) => {
  const sums = []
  for (let i = 0; i < arr.length; i++) {
    sums.push(sumHelper(arr, i))
  }
  let maxPos = sums.reduce((pos, v, i) => (v>sums[pos] ? i : pos), 0)
  let sequence = sequenceHelper(arr, maxPos)
  return sequence
}

const arr = [8, 12, 2, 3, 15, 5, 7]

// console.log(maxSumIncreasingSubsequence(arr))
console.log(maxSumIncSequence(arr))