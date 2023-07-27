const LinkedList = require("./solution");

test("test LL empty", () => {
  let myLinkedList = new LinkedList();
  myLinkedList.shift();
  const result = myLinkedList.printList();
  expect(result).toEqual([5]);
});

test("test shift", () => {
  let myLinkedList = new LinkedList(5);
  myLinkedList.shift();
  const result = myLinkedList.printList();
  expect(result).toEqual([3, 5]);
});
