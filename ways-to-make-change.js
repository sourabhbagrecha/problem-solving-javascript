const denoms = [1, 2, 5, 10, 20, 50, 100]

const waysToMakeChange = (amt, denoms) => {
  const ways = Array(amt + 1).fill(0).fill(1, 0, 1)
  for (let denom = 0; denom < denoms.length; denom++) {
    for (let way = denoms[denom]; way < ways.length; way++) {
      ways[way] += ways[way-denoms[denom]]
    }
  }
  return ways[ways.length-1]
}

console.log(waysToMakeChange(10, denoms))