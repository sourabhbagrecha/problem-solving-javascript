// Recursive: O(n^2) | O(n)
// const numberOfBinaryTreeTopologies = (n) => {
//   const cache = Array(n+1).fill(null).fill(1, 0, 1)
//   console.log(cache)
//   let count = 0
//   count = getTopologyCount(n, cache)
//   console.log(cache)
//   return count
// }

// const getTopologyCount = (n, cache) => {
//   if(cache[n]){
//     return cache[n]
//   }
//   let numberOfTrees = 0
//   for(let leftTreeSize=0; leftTreeSize<n; leftTreeSize++){
//     const rightTreeSize = n-leftTreeSize-1
//     const leftSide = getTopologyCount(leftTreeSize, cache)
//     const righSide = getTopologyCount(rightTreeSize, cache)
//     numberOfTrees += leftSide * righSide
//   }
//   cache[n] = numberOfTrees
//   return numberOfTrees
// }

// Iterative: O(n^2) | O(n)
const numberOfBinaryTreeTopologies = (n) => {
  const cache = [1]
  console.log(cache)
  for(let m=1; m<=n; m++){
    console.log(m, n)
    let numberOfTrees = 0
    for(let leftTreeSize=0; leftTreeSize<m; leftTreeSize++){
      const rightTreeSize = m-leftTreeSize-1
      const leftSide = cache[leftTreeSize]
      const righSide = cache[rightTreeSize]
      numberOfTrees += leftSide * righSide
    }
    cache.push(numberOfTrees)
  }
  console.log(cache)
  return cache[cache.length-1]
}

console.log(numberOfBinaryTreeTopologies(10))