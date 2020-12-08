const prices = [5, 11, 3, 50, 60, 90]

//  O(nk) | O(nk)
const maxProfitInKTransaction = (prices, k) => {
  const profits = []
  for (let i = 0; i < k+1; i++) {
    profits.push(Array(prices.length).fill(0))
  }
  for (let t = 1; t < k+1; t++) {
    let maxThusFar = -Infinity
    for (let d = 1; d < prices.length; d++) {
      maxThusFar = Math.max(maxThusFar, profits[t - 1][d - 1] - prices[d - 1])
      profits[t][d] = Math.max(profits[t][d - 1], maxThusFar + prices[d ])
    }
  }
  return profits[k][prices.length-1]
}

// O(nk) | O(n)
const maxProfitInKEfficient = (prices, k) => {
  let previous = Array(prices.length).fill(0)
  let current = Array(prices.length).fill(0)
  for (let t = 1; t < k+1; t++) {
    let maxThusFar = -Infinity
    for (let d = 1; d < prices.length; d++) {
      maxThusFar = Math.max(maxThusFar, previous[d - 1] - prices[d - 1])
      current[d] = Math.max(current[d - 1], maxThusFar + prices[d])
    }
    previous = current
    current = Array(prices.length).fill(0)
  }
  return previous[previous.length-1]
}

console.log(maxProfitInKTransaction(prices, 2))
// console.log(maxProfitInKEfficient(prices, 2))