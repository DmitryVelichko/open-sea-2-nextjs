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

