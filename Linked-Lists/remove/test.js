const LinkedList = require("./solution");

test("test invalid index range", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(3);
  const result = myLinkedList.remove(5);
  expect(result).toEqual(undefined);
});

test("test remove at the beginning", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);
  myLinkedList.remove(0).value;
  const list = myLinkedList.printList();
  expect(list).toEqual([2, 3, 4, 5]);
});

test("test remove in the middle", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);
  myLinkedList.remove(2).value;
  const list = myLinkedList.printList();
  expect(list).toEqual([1, 2, 4, 5]);
});

test("test remove at the end", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);
  myLinkedList.remove(4).value;
  const list = myLinkedList.printList();
  expect(list).toEqual([1, 2, 3, 4]);
});
