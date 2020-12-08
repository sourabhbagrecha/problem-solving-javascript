const fourNumberSum = (arr, target) => {
  const state = {}
  const results = []
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      let currentSum = arr[i]+arr[j]
      if(state[target-currentSum]){
        state[target-currentSum].forEach(v => {
          results.push([arr[i], arr[j], ...v])
        })
      }
    }
    for(let k=i-1; k>=0; k--){
      let currentSum = arr[i]+arr[k]
      const newPair = [arr[i], arr[k]]
      if(!state[currentSum]){
        state[currentSum] = [newPair]
      } else {
        state[[currentSum]].push(newPair)
      }
    }
  }
  return results
}

const arr = [7,6,4,-1,1,2]

console.log(fourNumberSum(arr, 16))

/* const fourNumberSum = (arr, sum) => {
  arr.sort((a, b) => b-a)
  const results = []
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length-1; j++){
      let requiredSum = sum - (arr[i]+arr[j])
      let left=j+1
      let right=arr.length-1
      while(left<right){
        const currentSum = arr[left]+arr[right]
        if(requiredSum === currentSum){
          results.push([arr[i], arr[j], arr[left], arr[right]])
          left++;                         // caveat here, because difficult to determine whether to left++ or right-- so as to move ahead after adding to the results
        } else if(requiredSum>currentSum){
          right--
        } else {
          left++
        }
      }
    }
  }
  return results
} */