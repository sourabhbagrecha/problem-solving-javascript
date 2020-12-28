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
var widthOfBinaryTree = function(root) {
  if(!root) return 0
  let result = 1
  const queue = []
  queue.push([root, 0])
  while(queue.length>0){
      let count = queue.length
      const [,start] = queue[0]
      const [,end] = queue[queue.length-1]
      result = Math.max(result, end-start+1)
      for(let i=0; i<count; ++i){
          let [current, idx] = queue.shift()
          idx = idx - start
          if(current.left) queue.push([current.left, (idx*2)+1])
          if(current.right) queue.push([current.right, (idx*2)+2])
      }
  }
  return result
};