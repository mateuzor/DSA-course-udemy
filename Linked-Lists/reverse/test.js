const LinkedList = require("./solution");

test("test should return reversed list", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);
  myLinkedList.reverse();
  const list = myLinkedList.printList();
  expect(list).toEqual([5, 4, 3, 2, 1]);
});
