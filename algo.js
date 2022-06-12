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
export default function dijkstra(graph, startVertex) {
  // Init helper variables that we will need for Dijkstra algorithm.
  const distances = {};
  const visitedVertices = {};
  const previousVertices = {};
  const queue = new PriorityQueue();

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except the start one.
  graph.getAllVertices().forEach((vertex) => {
    distances[vertex.getKey()] = Infinity;
    previousVertices[vertex.getKey()] = null;
  });

  // We are already at the startVertex so the distance to it is zero.
  distances[startVertex.getKey()] = 0;
