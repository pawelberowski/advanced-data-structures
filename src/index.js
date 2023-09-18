import { LinkedList } from './LinkedList';
import { GraphNode } from './GraphNode';
import { Graph } from './Graph';

// const list = new LinkedList();
// list.addToTail(12);
// list.addToTail(5);
// list.addToTail(67);
// list.addToTail(78);
// list.addToTail(99);
// console.log(list.toArray());
// list.removeFromTail();
// console.log(list.toArray());
// list.removeFromHead();
// console.log(list.toArray());
// list.reverse();
// console.log(list.toArray());
// // list.switchPositions();

const firstNode = new GraphNode(1);
const graph = new Graph(firstNode);

const secondNode = graph.add(12, firstNode, null);
const thirdNode = graph.add(31, secondNode, firstNode);
const lastNode = graph.add(666, thirdNode, null);
console.log(graph);
