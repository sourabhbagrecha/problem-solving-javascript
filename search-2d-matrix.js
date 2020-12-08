const matx = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
]

const search = (matx, target) => {
  let row = 0
  let col = matx[0].length - 1
  while (row < matx.length && col >= 0) {
    if (target === matx[row][col]) {
      return [row, col]
    }
    if (target > matx[row][col]) {
      row++
    } else {
      col--
    }
  }
  return [-1, -1]
}

console.log(search(matx, 1010))