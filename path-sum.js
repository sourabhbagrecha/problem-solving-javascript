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
 * @param {number} sum
 * @return {number[][]}
 */
// var pathSum = function(root, sum) {
//     const results = []
//     helper(root, sum, results, [])
//     return results
// };

// 88ms
// const helper = (root, requiredSum, results, path) => {
//     if(!root) return
//     path.push(root.val)
//     if(!root.left && !root.right && root.val === requiredSum){
//         results.push([...path])
//     }
//     helper(root.left, requiredSum-root.val, results, path)
//     helper(root.right, requiredSum-root.val, results, path)
//     path.pop()
//     return
// }


// 80ms
var pathSum = function (root, sum) {
  if (!root) return [];
  const result = [];
  const visited = [];
  function traverse(node) {
      visited.push(node.val);
      if (!node.left && !node.right) {
          const leafSum = [...visited].reduce((a, b) => a+b);
          if (leafSum === sum) result.push([...visited]);
      }
      if (node.left) {
          traverse(node.left);
      }
      if (node.right) {
          traverse(node.right);
      }
      visited.pop();
  }
  traverse(root);
  return result;
};