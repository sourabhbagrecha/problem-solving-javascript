// Clever solution O(n)|O(n)
// const getMinRewards = (arr) => {
//   const rewards = Array(arr.length).fill(1)
//   for(let i=1; i<arr.length; i++){
//     if(arr[i]>arr[i-1]){
//       rewards[i] = rewards[i-1]+1
//     }
//   }
//   for(let i=arr.length-2; i>=0; i--){
//     if(arr[i]>arr[i+1]){
//       rewards[i] = Math.max(rewards[i+1]+1, rewards[i])
//     }
//   }
//   return rewards.reduce(((acc, v) => acc+v), 0)
// }

const getMinRewards = (arr) => {
  const rewards = Array(arr.length).fill(1)
  const minIdxs = getMinIdxs(arr)
  minIdxs.forEach(localMinIdx => {
    expandFromLocalMinIdx(localMinIdx, arr, rewards)
  });
  return rewards
}

const getMinIdxs = (arr) => {
  const idxs = []
  for(let i=0; i<arr.length; i++){
    if(i===0 && arr[i]<arr[i+1]) idxs.push(i)
    else if(i===arr.length-1 && arr[i]<arr[i-1]) idxs.push(i)
    else if(i===0 || i===arr.length-1) continue
    else if(arr[i]<arr[i-1] && arr[i]<arr[i+1]) idxs.push(i)
  }
  return idxs
}

const expandFromLocalMinIdx = (localMinIdx, arr, rewards) => {
  let leftIdx = localMinIdx-1
  while(leftIdx>=0 && arr[leftIdx] > arr[leftIdx+1]){
    rewards[leftIdx] = Math.max(arr[leftIdx+1]+1, rewards[leftIdx])
    leftIdx--
  }
  let rightIdx = localMinIdx+1
  while(rightIdx<arr.length && arr[rightIdx]>arr[rightIdx-1]){
    rewards[rightIdx] = rewards[rightIdx-1]+1
    rightIdx++
  }
  return
}

const arr = [8, 4, 2, 1, 3, 6, 7, 9, 5]

console.log(getMinRewards(arr))

// const getMinRewards = (arr) => {
//   let minIndex = 0
//   let rewards = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) {
//       minIndex = i
//     }
//   }
//   let i = minIndex
//   let rewardNow = 1
//   rewards.push(rewardNow)
//   i++
//   while(i<arr.length){
//     rewardNow = arr[i]>arr[i-1] ? rewardNow+1:rewardNow-1
//     rewards.push(rewardNow)
//     i++
//   }
//   i=minIndex-1
//   rewardNow = 1
//   while(i>=0){
//     rewardNow = arr[i]<arr[i+1] ? rewardNow-1:rewardNow+1
//     rewards.unshift(rewardNow)
//     i--
//   }
//   console.log(rewards)
//   return
// }