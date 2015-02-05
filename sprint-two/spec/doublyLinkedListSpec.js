describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

    it('should have methods named "addToHead" and "removeTail"', function() {
    expect(doublyLinkedList.addToHead).to.be.a("function");
    expect(doublyLinkedList.removeTail).to.be.a("function");
  });

});
