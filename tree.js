/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const toVisitStack = [this.root];
    let total = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current === null) {
        break;
      } else {
        total += current.val;
      }

      for (let node of current.children) {
        toVisitStack.push(node);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const toVisitQueue = [this.root];
    let numEvens = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current === null) {
        break;
      } else if (current.val % 2 === 0) {
        numEvens++;
      }

      for (let node of current.children) {
        toVisitQueue.push(node);
      }
    }

    return numEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {}
}

module.exports = { Tree, TreeNode };
