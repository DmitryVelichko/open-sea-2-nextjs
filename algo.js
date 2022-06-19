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
