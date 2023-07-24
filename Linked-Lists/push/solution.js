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

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

module.exports = LinkedList;
