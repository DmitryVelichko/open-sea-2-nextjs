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
