const str = "gogopowerrangergogopowerranger"
const pattern = "xxyxxy"

// O(n^2 + m) | O(n + m)
const patternMatcher = (str, pattern) => {
  if(str.length<pattern.length){
    return []
  }
  const [newPattern, didSwitch] = getNewPattern(pattern)
  console.log({newPattern})
  const counts = {x: 0, y: 0}
  const firstY = getCountsAndFirstYPos(newPattern, counts)
  console.log(firstY, counts)
  if(counts["y"]!==0){
    for(let lenOfX=1; str.length - (counts["x"] * lenOfX) >= 0; lenOfX++){
      let lenOfY = (str.length - (counts["x"] * lenOfX)) / (counts["y"])
      if (lenOfY % 1 !== 0) {
        continue
      }
      const yIdx = firstY*lenOfX
      const x = str.slice(0, lenOfX)
      const y = str.slice(yIdx, yIdx+lenOfY)
      const potentialMatch = newPattern.map(p => p === "x" ? x : y).join("")
      if(potentialMatch === str){
        return didSwitch ? [y,x] : [x,y]
      }
    }
  } else {
    const x = str.slice(0, str.length/counts["x"])
    if(x.length%1===0){
      const potentialMatch = newPattern.map(p => p === "x" ? x : "").join("")
      if(potentialMatch === str){
        return didSwitch ? ["",x] : [x,""]
      }
    }
  }
  return []
}

const getNewPattern = (pattern) => {
  const newPattern = pattern.split("")
  if(newPattern[0] === "x"){
    return [newPattern, false]
  }
  return [newPattern.map(p => p === "x" ? "y" : "x"), true]
}

const getCountsAndFirstYPos = (pattern, state) => {
  let firstY = -1
  for (let i = 0; i < pattern.length; i++) {
    if (firstY === -1 && pattern[i] === "y") {
      firstY = i
    }
    state[pattern[i]] = (state[pattern[i]] || 0) + 1
  }
  return firstY
}

console.log(patternMatcher(str, pattern))