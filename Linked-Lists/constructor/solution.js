class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      return temp.value;
    }
  }

  getHead() {
    if (this.head === null) {
      return "Head: null";
    } else {
      return this.head.value;
    }
  }

  getTail() {
    if (this.tail === null) {
      return "Tail: null";
    } else {
      return this.tail.value;
    }
  }

  getLength() {
    return this.length;
  }
}

module.exports = LinkedList;
