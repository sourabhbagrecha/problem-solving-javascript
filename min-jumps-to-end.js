// O(n) | O(1)
const minJumpsToEnd = (arr) => {
  let maxReach= arr[0]
  let steps = arr[0]
  let jumps = 0
  for(let i=1; i<arr.length; i++){
    maxReach = Math.max(maxReach, i+arr[i])
    steps -=1
    if(steps === 0){
      jumps +=1
      steps = maxReach-i
    }
  }
  return jumps+1
}


// O(n^2) | O(n)
// const minJumpsToEnd = (arr) => {
//   let jumps = Array(arr.length).fill(Infinity).fill(0,0,1)
//   for(let i=0; i<arr.length; i++){
//     for(let j=1; j<=arr[i] && i+j<arr.length; j++){
//       jumps[i+j] = Math.min(jumps[i]+1, jumps[i+j])
//       if(i+j===arr.length-1){
//         console.log(jumps)
//         return jumps[i+j]
//       }
//     }
//   }
//   console.log(jumps)
//   return jumps[jumps.length-1]
// }

const arr = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]

console.log(minJumpsToEnd(arr))