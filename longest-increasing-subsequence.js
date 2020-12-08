// O(n*log(n)) | O(n)
const longestIncreasingSubsequenceEfficient = (nums) => {
  const sequences = Array(nums.length).fill(null)
  const indices = Array(nums.length+1).fill(null)
  let length = 0
  for(let i=0; i<nums.length; i++){
    let num = nums[i]
    let newLength = binarySearch(1, length, indices, nums, num)
    sequences[i] = indices[newLength-1]
    indices[newLength] = i
    length = Math.max(length, newLength)
  }
  return buildSequence(nums, sequences, indices[length])
}

const binarySearch = (startIdx, endIdx, indices, nums, num) => {
  if(startIdx > endIdx){
    return startIdx
  }
  let middleIdx = ~~((startIdx+endIdx)/2)
  if(nums[indices[middleIdx]] < num){
    startIdx = middleIdx+1
  } else {
    endIdx = middleIdx-1
  }
  return binarySearch(startIdx, endIdx, indices, nums, num)
}

const buildSequence = (nums, sequences, currentIdx) => {
  const sequence = []
  while(currentIdx !== null){
    sequence.push(nums[currentIdx])
    currentIdx = sequences[currentIdx]
  }
  return sequence.reverse()
}

// O(n^2) | O(n)
const longestIncreasingSubsequence = (nums) => {
  const sequences = []
  const lengths = Array(nums.length).fill(1)
  for(let i=0; i<nums.length; i++){
    let consideredSeq = null
    for(let j=i-1; j>=0; j--){
      if(nums[j] < nums[i]){
        if(lengths[i] <= lengths[j]+1){
          consideredSeq = j
          lengths[i] = lengths[j]+1
        }
      }
    }
    sequences[i] = consideredSeq
  }
  let maxSequenceEndingAt = lengths.reduce(((p, _, i) => ( lengths[p] > lengths[i] ? p : i)), -Infinity)
  const results = []
  while(maxSequenceEndingAt !== null){
    results.push(nums[maxSequenceEndingAt])
    maxSequenceEndingAt = sequences[maxSequenceEndingAt]
  }
  return results.reverse()
}

const nums = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35, -1]
// console.log(longestIncreasingSubsequence(nums))
console.log(longestIncreasingSubsequenceEfficient(nums))