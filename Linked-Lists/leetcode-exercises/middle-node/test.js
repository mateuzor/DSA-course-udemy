const LinkedList = require("./solution");

test("test returns middle node", () => {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);
  const result = myLinkedList.findMiddleNode();
  expect(result.value).toEqual(3);
});
