/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function traverse(startingNode) {
      if (startingNode === null) {
        return 0;
      } else if (!startingNode.left && !startingNode.right) {
        return 1;
      } else if (!startingNode.left) {
        return 1 + traverse(startingNode.right);
      } else if (!startingNode.right) {
        return 1 + traverse(startingNode.left);
      } else {
        return Math.min(
          1 + traverse(startingNode.left),
          1 + traverse(startingNode.right)
        );
      }
    }

    return traverse(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function findLongestPath(startingNode) {
      if (startingNode === null) {
        return 0;
      } else if (!startingNode.left && !startingNode.right) {
        return 1;
      } else if (!startingNode.right) {
        return 1 + findLongestPath(startingNode.left);
      } else if (!startingNode.left) {
        return 1 + findLongestPath(startingNode.right);
      } else {
        return (
          1 +
          Math.max(
            findLongestPath(startingNode.left),
            findLongestPath(startingNode.right)
          )
        );
      }
    }

    return findLongestPath(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let val;

    function findMaxPath(startingNode) {
      // If we are below a leaf node, return 0
      if (startingNode === null) {
        return 0;
      }

      // grab the left and right children of the current node
      let left = findMaxPath(startingNode.left);
      let right = findMaxPath(startingNode.right);

      /** for the current node, the maximum path through that node could consist of just that node,
       * that node plus the left child, that node plus the right child, or that node plus
       * the left child plus the right child */
      let maxVal = Math.max(
        Math.max(left, right) + startingNode.val,
        startingNode.val
      );

      let maxValNoAncestor = Math.max(maxVal, left + right + startingNode.val);

      val = Math.max(val, maxValNoAncestor);

      return maxVal;
    }

    function findMaxSum(startingNode) {
      // Initialize result
      // int res2 = Integer.MIN_VALUE;
      val = Number.MIN_VALUE;

      // Compute and return result
      findMaxPath(startingNode);
      return startingNode === null ? 0 : val;
    }
    return findMaxSum(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return null;

    const toVisitQueue = [this.root];
    const arrOfLargerVals = [];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.val > lowerBound) {
        arrOfLargerVals.push(current.val);
      }

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }

    if (arrOfLargerVals.length) {
      return Math.min(...arrOfLargerVals);
    } else {
      return null;
    }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
