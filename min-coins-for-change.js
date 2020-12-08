const denoms = [1, 2, 5]

const findMinCoinsForChange = (amt, denoms) => {
  const optimalSol = Array(amt + 1).fill(Infinity).fill(0, 0, 1)

  for (let i = 0; i < denoms.length; i++) {
    for (let s = denoms[i]; s < optimalSol.length; s++) {
      if (s === denoms[i]) {
        optimalSol[s] = 1
        continue
      }
  
      const formula = optimalSol[s-denoms[i]]+1
      if (formula<optimalSol[s]){
        optimalSol[s] = formula
      }
    }
  }
  
  return optimalSol
}

console.log(findMinCoinsForChange(19, denoms))