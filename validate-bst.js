/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let min = -Infinity
  let max = Infinity
  return helper(root, min, max)
};

const helper = (node, min, max) => {
  if(node.val>min && node.val<max){
      const leftStatus = node.left ? helper(node.left, min, node.val) : true
      const rightStatus = node.right ? helper(node.right, node.val, max) : true
      return leftStatus && rightStatus
  } else {
      return false
  }
}