const arr = [1, 2, 3]
// O(n*2^n) both
const getPowerset = (arr) => {
  const subsets = [[]]
  for (let i = 0; i < arr.length; i++) {
    const len = subsets.length
    for (let j = 0; j < len; j++) {
      subsets.push([...subsets[j], arr[i]])
    }
  }
  return subsets
}

// O(n*2^n) both
const getPowersetRecursively = (arr, idx) => {
  if (idx < 0) {
    return [[]]
  }
  let ele = arr[idx]
  let subsets = getPowersetRecursively(arr, idx - 1)
  // console.log(idx, JSON.stringify(subsets, null, 2))
  let len = subsets.length
  for (let i = 0; i < len; i++) {
    subsets.push([...subsets[i], ele])
  }
  return subsets
}

console.log(getPowersetRecursively(arr, arr.length-1))