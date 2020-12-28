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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
  const parent = {}
  let deepest = []
  let maxDepth = 0
  const dfs = (root, depth = 0) => {
    if (!root) return
    if (depth > maxDepth) {
      maxDepth = depth
      deepest = [root.val]
    } else if (depth === maxDepth) {
      deepest.push(root.val)
    }
    if (root.left) {
      parent[root.left.val] = root
    }
    if (root.right) {
      parent[root.right.val] = root
    }
    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
    return
  }
  dfs(root)
  const findNode = (root, val) => {
    if (!root) return null
    if (root.val === val) return root
    const left = findNode(root.left, val)
    const right = findNode(root.right, val)
    return left || right
  }
  if (deepest.length === 1) {
    return findNode(root, deepest[0])
  }
  while (maxDepth > 0) {
    let commonParent = parent[deepest[0]]
    let noCommon = false
    for (let i = 1; i < deepest.length; i++) {
      if (commonParent !== parent[deepest[i]]) {
        noCommon = true
        break
      }
    }
    if (noCommon) {
      for (let i = 0; i < deepest.length; i++) {
        parent[deepest[i]] = parent[parent[deepest[i]].val]
      }
    } else {
      return commonParent
    }
    maxDepth--
  }
  return root
};