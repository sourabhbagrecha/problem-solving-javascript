const BRACKETS = ["(", ")", "{", "}", "[", "]"]

const isBracketPair = (first, second) => {
  const firstIndex = BRACKETS.findIndex(v => v === first)
  const secondIndex = BRACKETS.findIndex(v => v === second)
  return firstIndex+1 === secondIndex
}

const checkBalancedBracket = (stream) => {
  const stack = []

  
  for(let i=0; i<stream.length; i++){
    const currentBracket = stream[i]
    if(BRACKETS.findIndex(v => v === currentBracket) < 0){
      continue
    }
    if(stack.length === 0) {
      stack.push(currentBracket)
    }else if(isBracketPair(stack[stack.length-1], currentBracket)){
      stack.pop()
    } else {
      stack.push(currentBracket)
    }
  }

  return stack.length === 0
}

console.log(checkBalancedBracket("[[{}]](({}))"))