const swapLeftAndRight = (currentNode) => {
	let temp = currentNode.left
	currentNode.left = currentNode.right
	currentNode.right = temp
}

class BinaryTree {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}

	invert() {
		let queue = []
		queue.push(this)
		while (queue.length > 0) {
			let currentNode = queue.shift()
			currentNode.left && queue.push(currentNode.left)
			currentNode.right && queue.push(currentNode.right)
			swapLeftAndRight(currentNode)
		}
	}

	invertEfficiently(tree, isRecursion) {
		if (!isRecursion) {
			tree = this
		} else if (!tree) {
			return
		}
		swapLeftAndRight(tree)
		this.invertEfficiently(tree.left, true)
		this.invertEfficiently(tree.right, true)
	}

	print() {
		let queue = []
		queue.push(this)
		while (queue.length > 0) {
			let currentNode = queue.shift()
			currentNode.left && queue.push(currentNode.left)
			currentNode.right && queue.push(currentNode.right)
			console.log(currentNode.val)
		}
	}

}

const newTree = new BinaryTree(1)
const newTree2 = new BinaryTree(2)
const newTree3 = new BinaryTree(3)
newTree.left = newTree2
newTree.right = newTree3
const newTree4 = new BinaryTree(4)
const newTree5 = new BinaryTree(5)
newTree2.left = newTree4
newTree2.right = newTree5
const newTree6 = new BinaryTree(6)
const newTree7 = new BinaryTree(7)
newTree3.left = newTree6
newTree3.right = newTree7
const newTree8 = new BinaryTree(8)
const newTree9 = new BinaryTree(9)
newTree4.left = newTree8
newTree4.right = newTree9

newTree.print()
newTree.invertEfficiently()
newTree.print()