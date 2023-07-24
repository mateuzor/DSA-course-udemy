const LinkedList = require("./solution");
let myLinkedList = new LinkedList(4);

test("test head", () => {
  const head = myLinkedList.getHead();
  expect(head).toEqual(4);
});

test("test tail", () => {
  const tail = myLinkedList.getTail();
  expect(tail).toEqual(4);
});

test("test length", () => {
  const length = myLinkedList.getLength();
  expect(length).toEqual(1);
});

test("test Linked List", () => {
  const listPrint = myLinkedList.printList();
  expect(listPrint).toEqual(4);
});
