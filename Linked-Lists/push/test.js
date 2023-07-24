const LinkedList = require("./solution");

test("test cleanup", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.makeEmpty();
  const result = myLinkedList.printList();
  expect(result).toEqual(undefined);
});

test("test push", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.makeEmpty();
  myLinkedList.push(2);
  const result = myLinkedList.printList();
  expect(result).toEqual(2);
});
