const LinkedList = require("./solution");

test("test invalid index range", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(3);
  const result = myLinkedList.insert(5, 0);
  expect(result).toEqual(false);
});

test("test insert at the beginning", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(3);
  myLinkedList.insert(0, 0);
  const list = myLinkedList.printList();
  expect(list).toEqual([0, 1, 3]);
});

test("test insert in the middle", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(3);
  myLinkedList.insert(1, 2);
  const list = myLinkedList.printList();
  expect(list).toEqual([1, 2, 3]);
});

test("test insert at the end", () => {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.insert(4, 4);
  const list = myLinkedList.printList();
  expect(list).toEqual([0, 1, 2, 3, 4]);
});
