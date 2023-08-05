const LinkedList = require("./solution");

test("test should return kth node from end", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);

  const kthNodeFromEnd = myLinkedList.findKthFromEnd(2);
  console.log(kthNodeFromEnd);
  expect(kthNodeFromEnd?.value).toEqual(4);
});
