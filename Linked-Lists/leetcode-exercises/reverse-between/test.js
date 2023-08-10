const LinkedList = require("./solution");

test("test should reverse between indexes of 2 and 4", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);

  const m = 2;
  const n = 4;
  myLinkedList.reverseBetween(m, n);
  const list = myLinkedList.printList();

  console.log(list);

  expect(list).toEqual([1, 2, 5, 4, 3]);
});
