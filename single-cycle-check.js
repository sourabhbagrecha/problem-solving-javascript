const getNextIdx = (currentIdx, arr) => {
  let jump = arr[currentIdx]
  let nextPos = (currentIdx+jump)%arr.length
  return nextPos < 0 ? nextPos + arr.length : nextPos
}

const SingleCycleCheck = (arr) => {
  let jumps = 0
  let currentIdx = 0
  while(jumps<arr.length){
    if(jumps>0 && currentIdx===0){
      return false
    }
    jumps++
    currentIdx = getNextIdx(currentIdx, arr)
  }
  return currentIdx === 0
}

console.log(SingleCycleCheck([2, 3, 1, -4, -4, 2]))