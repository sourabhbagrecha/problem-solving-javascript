const str1 = "abc"
const str2 = "yabd"

const levenshtineDistance = (str1, str2) => {
  const edits = []
  edits.push([])
  for (let col = 0; col < str2.length + 1; col++) {
    edits[0].push(col)
  }
  for (let row = 1; row < str1.length + 1; row++) {
    edits.push([row])
  }
  for (let row = 1; row < str1.length + 1; row++) {
    for (let col = 1; col < str2.length + 1; col++) {
      if (str1[row - 1] === str2[col - 1]) {
        val = edits[row - 1][col - 1]
      } else {
        val = 1 + Math.min(edits[row][col - 1], edits[row - 1][col], edits[row - 1][col - 1])
      }
      edits[row].push(val)
    }
  }
  return edits[str1.length][str2.length]
}

const levenDistEfficient = (str1, str2) => {
  let small = str1.length > str2.length ? str2 : str1
  let big = str1.length <= str2.length ? str2 : str1

  let evenEdits = Array(small.length+1).fill(0).map((_, i) => i)
  let oddEdits = evenEdits.map(v => 0)
  
  for(let row=1; row<big.length+1; row++){
    let currentEdits, previousEdits;
    if(row%2==0){
      currentEdits = evenEdits
      previousEdits = oddEdits
    } else {
      currentEdits = oddEdits
      previousEdits = evenEdits
    }
    
    for(let col=1; col<small.length+1; col++){
      console.log(big[row-1], small[col-1])
      if(big[row-1] === small[col-1]){
        currentEdits[col] = previousEdits[col-1]
      } else {
        currentEdits[col] = 1+Math.min(previousEdits[col-1], previousEdits[col], currentEdits[col-1])
      }
    }
    console.log(currentEdits, previousEdits)
  }
}

// console.log(levenshtineDistance(str1, str2))
levenDistEfficient(str1, str2)