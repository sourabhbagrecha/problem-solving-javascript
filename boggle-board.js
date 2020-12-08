const END_SYMBOL = "*"

const boggleBoard = (board, words) => {
  const trie = new Trie()
  for (let word of words){
    trie.add(word)
  }
  const finalWords = {}
  const visited = []
  for(let _ of board) visited.push(Array(board.length).fill(false))
  for(let i=0; i<board.length; i++){
    for(let j=0; j<board[0].length; j++){
      explore(i, j, board, trie.root, visited, finalWords)
    }
  }
  console.log(trie)
  return Object.keys(finalWords)
}

const explore = (i, j, board, trieNode, visited, finalWords) => {
  if(visited[i][j]){
    return
  }
  const letter = board[i][j]
  if(!trieNode[letter]){
    return
  }
  visited[i][j] = true
  trieNode = trieNode[letter]
  if(trieNode[END_SYMBOL]){
    finalWords[trieNode[END_SYMBOL]] = true
  }
  const neighbors = getNeighbors(i, j, board)
  for(let neighbor of neighbors){
    explore(neighbor[0], neighbor[1], board, trieNode, visited, finalWords)
  }
  visited[i][j] = false
  return
}

const board = [
  ["t","h","i","s","i","s","a"],
  ["s","i","m","p","l","e","x"],
  ["b","x","x","x","x","e","b"],
  ["x","o","g","g","l","x","o"],
  ["x","x","x","D","T","r","a"],
  ["R","E","P","E","A","d","x"],
  ["x","x","x","x","x","x","x"],
  ["N","O","T","R","E","-","P"],
  ["x","x","D","E","T","A","E"]
]

const words = [
  "this",
  "is",
  "not",
  "a",
  "simple",
  "boggle",
  "board",
  "test",
  "REPEATED",
  "NOTRE-PEATED"
]

const getNeighbors = (i, j, board) => {
  const neighbors = []
  const rightBound = board[0].length - 1
  const bottomBound = board.length - 1
  if (i > 0 && j > 0) neighbors.push([i - 1, j - 1])
  if (i > 0 && j < rightBound) neighbors.push([i - 1, j + 1])
  if (i < bottomBound && j < rightBound) neighbors.push([i + 1, j + 1])
  if (i < bottomBound && j > 0) neighbors.push([i + 1, j - 1])
  if (i > 0) neighbors.push([i - 1, j])
  if (i < bottomBound) neighbors.push([i + 1, j])
  if (j > 0) neighbors.push([i, j - 1])
  if (j < rightBound) neighbors.push([i, j + 1])
  return neighbors
}

class Trie {
  constructor(){
    this.root = {}
    this.endSymbol = END_SYMBOL
  }

  add(word){
    let current = this.root
    for(let letter of word){
      current[letter] = current[letter] ? current[letter] : {}
      current = current[letter]
    }
    current[this.endSymbol] = word
  }
}

console.log(boggleBoard(board, words))