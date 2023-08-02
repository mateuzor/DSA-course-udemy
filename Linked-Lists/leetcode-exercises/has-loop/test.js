const LinkedList = require("./solution");

test("test returns true having a loop", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);
  myLinkedList.tail.next = myLinkedList.head.next;
  const result = myLinkedList.hasLoop();
  expect(result).toEqual(true);
});

test("test returns false having no loop", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);
  const result = myLinkedList.hasLoop();
  expect(result).toEqual(false);
});
