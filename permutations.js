const arr = [1, 2, 3]

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

const helper = (i, array, permutations) => {
  if(i === array.length-1){
    permutations.push([...array])
  } else {
    for(let j=i; j<array.length; j++){
      swap(array, i, j)
      helper(i+1, array, permutations)
      swap(array, i, j)
    }
  }
}

const getPermutations = (array) => {
  const permutations = []
  helper(0, array, permutations)
  return permutations
}

// console.log(getPermutations(arr))




const calcPermutations = (nums, set=[], answers=[]) => {
  if(!nums.length) return answers.push([...set])

  for(let i=0; i<nums.length; i++){
    const newNums = nums.filter((v, idx) => i !== idx)
    const newSet = [...set, nums[i]]
    calcPermutations(newNums, newSet, answers)
  }
  return answers
}

console.log(calcPermutations(arr))



