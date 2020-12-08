const areSameBSTs = (bst1, bst2) => {
  if(bst1.length !== bst2.length){
    return false
  }
  if(bst1.length===0 && bst2.length===0){
    return true
  }
  console.log(bst1, bst2)
  if (bst1[0] !== bst2[0]) {
    return false
  }
  const leftBst1 = bst1.slice(1).filter(v => v < bst1[0])
  const rightBst1 = bst1.slice(1).filter(v => v >= bst1[0])

  const leftBst2 = bst2.slice(1).filter(v => v < bst2[0])
  const rightBst2 = bst2.slice(1).filter(v => v >= bst2[0])

  return areSameBSTs(leftBst1, leftBst2) && areSameBSTs(rightBst1, rightBst2)
}

const bst1 = [10, 15, 8, 12, 94, 81, 5, 2, 11]
const bst2 = [10, 8, 5, 15, 2, 12, 11, 94, 81]
console.log(areSameBSTs(bst1, bst2))