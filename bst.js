class BST {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}

	insert(val) {
		let currentNode = this
		while (currentNode) {
			if (val < currentNode.val) {
				if (currentNode.left) {
					currentNode = currentNode.left
				} else {
					currentNode.left = new BST(val)
					return currentNode.left
				}
			} else {
				if (currentNode.right) {
					currentNode = currentNode.right
				} else {
					currentNode.right = new BST(val)
					return currentNode.right
				}
			}
		}
	}

	search(val) {
		let currentNode = this
		while (currentNode.val !== val) {
			if (val < currentNode.val) {
				if (currentNode.left) {
					currentNode = currentNode.left
				} else {
					return null
				}
			} else {
				if (currentNode.right) {
					currentNode = currentNode.right
				} else {
					return null
				}
			}
		}
		return currentNode
	}

	getMinValue() {
		let currentNode = this
		while (currentNode.left !== null) {
			currentNode = currentNode.left
		}
		return currentNode.val
	}

	delete(val, parentNode = null) {
		let currentNode = this
		while (currentNode !== null) {
			if (val < currentNode.val) {
				parentNode = currentNode
				currentNode = currentNode.left
			} else if (val > currentNode.val) {
				parentNode = currentNode
				currentNode = currentNode.right
			} else {
				if (currentNode.left !== null && currentNode.right !== null) {
					currentNode.val = currentNode.right.getMinValue()
					currentNode.right.delete(currentNode.val, currentNode)
				} else if (parentNode === null) {
					if(currentNode.left !== null){
						currentNode.val = currentNode.left.val
						currentNode.right = currentNode.left.right
						currentNode.left = currentNode.left.left
					}
				}
				if (currentNode.left === null && currentNode.right === null) {
					currentNode = null
				}
				if (currentNode.left === null) {
					parentNode = currentNode.right
					break;
				}
				if (currentNode.right === null) {
					parentNode = currentNode.left
					break;
				}
			}
		}
	}

}

const b = new BST(12)
b.insert(5)
b.insert(15)
b.insert(2)
b.insert(5)
b.insert(1)
b.insert(13)
b.insert(22)
b.insert(14)

console.log(JSON.stringify(b, null, 4))
b.delete(12)
console.log(JSON.stringify(b, null, 4))
