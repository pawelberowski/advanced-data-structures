import { LinkedListElement } from './LinkedListElement';

export class LinkedList {
  #head = null;
  #tail = null;

  addToTail(value) {
    let newMember = null;
    console.log('adding ' + value);
    if (this.#head === null) {
      this.#head = new LinkedListElement(value, null, null);
      this.#tail = this.#head;
    } else if (this.#head.nextMember === null) {
      newMember = new LinkedListElement(value, null, this.#head);
      this.#head.nextMember = newMember;
    } else {
      newMember = new LinkedListElement(value, null, this.#tail);
      this.#tail.nextMember = newMember;
    }
    this.#tail = newMember;
  }

  toArray() {
    let currentMember = this.#head;
    const array = [];
    while (currentMember !== null) {
      array.push(currentMember);
      currentMember = currentMember.nextMember;
    }
    return array;
  }

  removeFromHead() {
    console.log('removing first element');
    this.#head.nextMember.previousMember = null;
    this.#head = this.#head.nextMember;
  }

  removeFromTail() {
    console.log('removing last element');
    this.#tail.previousMember.nextMember = null;
  }
  reverse() {
    console.log('reversing elements');
    let currentElement = this.#head;
    let previousElement = null;
    let nextElement = null;

    while (currentElement !== null) {
      nextElement = currentElement.nextMember;
      currentElement.nextMember = previousElement;
      previousElement = currentElement;
      currentElement.previousMember = nextElement;
      currentElement = nextElement;
    }
    this.#head = previousElement;
  }
  switchPositions(leftElement, rightElement) {
    leftElement.nextMember = rightElement.nextMember;
    rightElement.previousMember = leftElement.previousMember;
    leftElement.previousMember = rightElement;
    rightElement.nextMember = leftElement;
  }
  addBetween(previousElement, nextElement, value) {
    const newMember = new LinkedListElement(
      value,
      nextElement,
      previousElement,
    );
    previousElement.nextMember = newMember;
    nextElement.previousMember = newMember;
  }
}
