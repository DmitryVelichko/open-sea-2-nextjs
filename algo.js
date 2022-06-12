import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';

/**
 * @typedef {Object} ShortestPaths
 * @property {Object} distances - shortest distances to all vertices
 * @property {Object} previousVertices - shortest paths to all vertices.
 */

/**
 * Implementation of Dijkstra algorithm of finding the shortest paths to graph nodes.
 * @param {Graph} graph - graph we're going to traverse.
 * @param {GraphVertex} startVertex - traversal start vertex.
 * @return {ShortestPaths}
 */
