const LinkedList = require("./solution");

test("test invalid indexes", () => {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(5);
  const resultOne = myLinkedList.get(-1);
  const resultTwo = myLinkedList.get(10);
  expect(resultOne).toEqual(undefined);
  expect(resultTwo).toEqual(undefined);
});

test("test get the correct value for the given index", () => {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(5);
  const result = myLinkedList.get(3).value;
  expect(result).toEqual(5);
});
