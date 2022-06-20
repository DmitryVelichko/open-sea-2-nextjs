import DisjointSetItem from './DisjointSetItem';

export default class DisjointSet {
  /**
   * @param {function(value: *)} [keyCallback]
   */
  constructor(keyCallback) {
    this.keyCallback = keyCallback;
    this.items = {};
  }

  /**
   * @param {*} itemValue
   * @return {DisjointSet}
   */
  makeSet(itemValue) {
    const disjointSetItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (!this.items[disjointSetItem.getKey()]) {
      // Add new item only in case if it not presented yet.
      this.items[disjointSetItem.getKey()] = disjointSetItem;
    }

    return this;
  }

  /**
   * Find set representation node.
   *
   * @param {*} itemValue
   * @return {(string|null)}
   */
  find(itemValue) {
    const templateDisjointItem = new DisjointSetItem(itemValue, this.keyCallback);
