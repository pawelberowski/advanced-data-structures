import { Edge } from './Edge';

export class GraphNode {
  edges = [];
  constructor(value, leftMember, rightMember) {
    this.value = value;
    this.id = GraphNode.uuidv4();
    if (leftMember) {
      const newEdge = new Edge(leftMember, this);
      this.edges.push(newEdge);
    }
    if (rightMember) {
      const newEdge = new Edge(this, rightMember);
      this.edges.push(newEdge);
    }
  }

  static uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16),
    );
  }
}
