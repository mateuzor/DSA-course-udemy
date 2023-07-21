const LinkedList = require("./solution");
let myLinkedList = new LinkedList(4);

test("test head", () => {
  const head = myLinkedList.getHead();
  expect(head).toEqual(4);
});

test("test tail", () => {
  const head = myLinkedList.getTail();
  expect(head).toEqual(4);
});

test("test tail", () => {
  const head = myLinkedList.getLength();
  expect(head).toEqual(1);
});

test("test Linked List", () => {
  const head = myLinkedList.printList();
  expect(head).toEqual(4);
});
