export default class BloomFilter {
  /**
   * @param {number} size - the size of the storage.
   */
  constructor(size = 100) {
    // Bloom filter size directly affects the likelihood of false positives.
    // The bigger the size the lower the likelihood of false positives.
    this.size = size;
    this.storage = this.createStore(size);
  }
