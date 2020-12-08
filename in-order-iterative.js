class Tree{
  constructor(val, parent=null) {
    this.val = val
    this.parent = parent
    this.left = null
    this.right = null
  }
}

const newTree = new Tree(1)

const tree2 = new Tree(2, newTree)
newTree.left = tree2

const tree3 = new Tree(3, newTree)
newTree.right = tree3

const tree4 = new Tree(4, tree2)
tree2.left = tree4
const tree9 = new Tree(9, tree4)
tree4.right = tree9

const tree6 = new Tree(6, tree3)
tree3.left = tree6
const tree7 = new Tree(7, tree3)
tree3.right = tree7

// O(n) | O(1)
const inOrderIterative = (tree) => {
  let current = tree
  let previous = null
  let nextNode = null
  while(current){
    if(!previous || previous === current.parent){
      if(current.left){
        nextNode = current.left
      } else {
        console.log(current.val)
        nextNode = current.right ? current.right : current.parent
      }
    } else if (previous === current.left) {
      console.log(current.val)
      nextNode = current.right ? current.right : current.parent
    } else { 
      //eventually would be previous === current.right
      nextNode = current.parent
    }
    previous = current
    current = nextNode
  }
}

inOrderIterative(newTree)