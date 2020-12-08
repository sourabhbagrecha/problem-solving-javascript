const longestPalindromicSubsequence = (str) => {
  const state = []
  for(let i=0; i<str.length; i++){
    state.push(Array(str.length).fill(0).fill(1, i, i+1))
  }
  for(let row=str.length-2; row>=0; row--){
    for(let col=row+1; col<str.length; col++){
      if(str[row] === str[col]){
        state[row][col] = state[row+1][col-1]+2
      } else {
        state[row][col] = Math.max(state[row+1][col], state[row][col-1])
      }
    }
  }
  return state[0][str.length-1]
}

console.log(longestPalindromicSubsequence("agbdba"))
