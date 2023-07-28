const LinkedList = require("./solution");

test("test should return false for no existing index", () => {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(5);
  const resultOne = myLinkedList.set(-1, 45);
  const resultTwo = myLinkedList.set(10, 45);
  expect(resultOne).toEqual(false);
  expect(resultTwo).toEqual(false);
});

test("test should return list with the new value on the correct index", () => {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(5);
  myLinkedList.set(1, 45);
  const list = myLinkedList.printList();
  expect(list).toEqual([0, 45, 2, 5]);
});
