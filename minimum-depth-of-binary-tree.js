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
 * @return {number}
 */
var minDepth = function(root, k) {
  if(!root) return 0
  const q = [root]
  let level = 1
  while(q.length>0){
      const size = q.length
      for(let i=0; i<size; i++){
          const current = q.shift()
          if(!current.left&&!current.right){
              return level
          }
          if(current.left) q.push(current.left)
          if(current.right) q.push(current.right)
      }
      level++
  }
  return level
};