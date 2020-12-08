const matx = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16]
]

// O(n)|O(n)
const getZigzagTraversal = (matx) => {
  const traversal = []
  let row = 0, col = 0
  let goingDown = true
  let lastCol = matx[0].length - 1
  let lastRow = matx.length - 1
  while (!(row < 0 || col < 0 || row > lastRow || col > lastCol)) {
    console.log(matx[row][col], goingDown, row, col)
    traversal.push(matx[row][col])
    if (goingDown) {
      if (row === lastRow || col === 0) {
        goingDown = false
        if (row === lastRow) {
          col++
        } else if (col === 0) {
          row++
        }
      } else {
        row++
        col--
      }
    } else {
      if (row === 0 || col === lastCol) {
        goingDown = true
        if (col === lastCol) {
          row++
        } else {
          col++
        }
      } else {
        row--
        col++
      }
    }
    console.log({row, col, goingDown})
  }
  console.log("THis test", row < 0 , col < 0 , row > lastRow , col , lastCol, goingDown)
  return traversal
}

console.log(getZigzagTraversal(matx))