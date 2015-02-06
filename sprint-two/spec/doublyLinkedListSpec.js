describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have methods named "addToHead" and "removeTail"', function() {
    expect(doublyLinkedList.addToHead).to.be.a("function");
    expect(doublyLinkedList.removeTail).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function(){
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it("should return the value of the former tail when removeTail is called", function(){
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
  });

});
