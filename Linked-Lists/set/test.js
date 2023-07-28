const LinkedList = require("./solution");

test("test should return false for not existing index", () => {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(5);
  const resultOne = myLinkedList.set(-1, 45);
  const resultTwo = myLinkedList.set(10, 45);
  expect(resultOne).toEqual(false);
  expect(resultTwo).toEqual(false);
});

test("test should return true if the value is set", () => {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(5);
  const result = myLinkedList.set(1, 45);
  expect(result).toEqual(true);
});
