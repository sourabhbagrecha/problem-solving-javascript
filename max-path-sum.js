class Tree {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const tree1 = new Tree(1)
const tree2 = new Tree(2)
const tree3 = new Tree(3)
const tree4 = new Tree(4)
const tree5 = new Tree(5)
const tree6 = new Tree(6)
const tree7 = new Tree(7)

tree1.left = tree2
tree1.right = tree3

tree2.left = tree4
tree2.right = tree5

tree3.left = tree6
tree3.right = tree7

// O(n) | O(log(n))
const maxPathSumHelper = (tree) => {
  if (!tree) {
    return [0,0]
  }
  const [lsb, ls]= maxPathSumHelper(tree.left)
  const [rsb, rs]= maxPathSumHelper(tree.right)

  const mcsb = Math.max(lsb, rsb)
  const msb = Math.max(mcsb+tree.val, tree.val)
  const mst = Math.max(msb, lsb+tree.val+rsb)
  const rmps = Math.max(ls, rs, mst)
  return [msb, rmps]
}

const maxPathSum = (tree) => {
  return Math.max(...maxPathSumHelper(tree))
}

console.log(maxPathSum(tree1))