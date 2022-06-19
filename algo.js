import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

// Possible colors of red-black tree nodes.
const RED_BLACK_TREE_COLORS = {
  red: 'red',
  black: 'black',
};

// Color property name in meta information of the nodes.
const COLOR_PROP_NAME = 'color';

export default class RedBlackTree extends BinarySearchTree {
  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    const insertedNode = super.insert(value);

    // if (!this.root.left && !this.root.right) {
    if (this.nodeComparator.equal(insertedNode, this.root)) {
      // Make root to always be black.
      this.makeNodeBlack(insertedNode);
    } else {
      // Make all newly inserted nodes to be red.
      this.makeNodeRed(insertedNode);
    }

    // Check all conditions and balance the node.
    this.balance(insertedNode);

    return insertedNode;
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    throw new Error(`Can't remove ${value}. Remove method is not implemented yet`);
  }

  /**
   * @param {BinarySearchTreeNode} node
   */
  balance(node) {
    // If it is a root node then nothing to balance here.
    if (this.nodeComparator.equal(node, this.root)) {
      return;
    }

    // If the parent is black then done. Nothing to balance here.
    if (this.isNodeBlack(node.parent)) {
      return;
    }

    const grandParent = node.parent.parent;

    if (node.uncle && this.isNodeRed(node.uncle)) {
      // If node has red uncle then we need to do RECOLORING.

      // Recolor parent and uncle to black.
      this.makeNodeBlack(node.uncle);
      this.makeNodeBlack(node.parent);

      if (!this.nodeComparator.equal(grandParent, this.root)) {
        // Recolor grand-parent to red if it is not root.
        this.makeNodeRed(grandParent);
      } else {
        // If grand-parent is black root don't do anything.
        // Since root already has two black sibling that we've just recolored.
        return;
      }

      // Now do further checking for recolored grand-parent.
      this.balance(grandParent);
    } else if (!node.uncle || this.isNodeBlack(node.uncle)) {
      // If node uncle is black or absent then we need to do ROTATIONS.

      if (grandParent) {
        // Grand parent that we will receive after rotations.
        let newGrandParent;

        if (this.nodeComparator.equal(grandParent.left, node.parent)) {
          // Left case.
          if (this.nodeComparator.equal(node.parent.left, node)) {
            // Left-left case.
            newGrandParent = this.leftLeftRotation(grandParent);
          } else {
            // Left-right case.
            newGrandParent = this.leftRightRotation(grandParent);
          }
        } else {
          // Right case.
          if (this.nodeComparator.equal(node.parent.right, node)) {
            // Right-right case.
            newGrandParent = this.rightRightRotation(grandParent);
          } else {
            // Right-left case.
            newGrandParent = this.rightLeftRotation(grandParent);
          }
        }

        // Set newGrandParent as a root if it doesn't have parent.
        if (newGrandParent && newGrandParent.parent === null) {
          this.root = newGrandParent;

          // Recolor root into black.
          this.makeNodeBlack(this.root);
        }

        // Check if new grand parent don't violate red-black-tree rules.
        this.balance(newGrandParent);
      }
    }
  }

  /**
   * Left Left Case (p is left child of g and x is left child of p)
   * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
   * @return {BinarySearchTreeNode}
   */
  leftLeftRotation(grandParentNode) {
    // Memorize the parent of grand-parent node.
    const grandGrandParent = grandParentNode.parent;

    // Check what type of sibling is our grandParentNode is (left or right).
    let grandParentNodeIsLeft;
    if (grandGrandParent) {
      grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
    }

    // Memorize grandParentNode's left node.
    const parentNode = grandParentNode.left;

    // Memorize parent's right node since we're going to transfer it to
    // grand parent's left subtree.
    const parentRightNode = parentNode.right;

    // Make grandParentNode to be right child of parentNode.
    parentNode.setRight(grandParentNode);

    // Move child's right subtree to grandParentNode's left subtree.
    grandParentNode.setLeft(parentRightNode);

    // Put parentNode node in place of grandParentNode.
    if (grandGrandParent) {
      if (grandParentNodeIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      // Make parent node a root
      parentNode.parent = null;
    }
