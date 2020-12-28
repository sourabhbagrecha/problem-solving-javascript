/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

 var buildTree = function(inorder, postorder) {
  if(inorder.length !== postorder.length) return null
  const inorderMap = new Map()
  for(let i=0; i<inorder.length; i++){
      inorderMap.set(inorder[i], i)
  }
  const recur = (low, high) => { // defined inside the func to leverage the power of closures.
      if(low>high) return null
      const val = postorder.pop()
      const root = new TreeNode(val)
      const inIndex = inorderMap.get(root.val)
      root.right = recur(inIndex+1, high)
      root.left = recur(low, inIndex-1)
      return root
  }
  return recur(0, inorder.length-1)
};