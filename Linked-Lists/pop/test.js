const LinkedList = require("./solution");

test("test LL empty", () => {
  let myLinkedList = new LinkedList();
  myLinkedList.pop();
  const result = myLinkedList.printList();
  expect(result).toEqual(undefined);
});

test("test pop having one node", () => {
  let myLinkedList = new LinkedList(5);
  myLinkedList.pop();
  const result = myLinkedList.printList();
  expect(result).toEqual(undefined);
});

test("test pop having two nodes", () => {
  let myLinkedList = new LinkedList(5);
  myLinkedList.push(3);
  myLinkedList.pop();
  const result = myLinkedList.printList();
  expect(result).toEqual(5);
});
