var DoublyLinkedList = function(){
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToHead = function(item) {
  var Node = function(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  };
  var node = new Node(item);
  if (!this.head){
    this.head = node;
    this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

DoublyLinkedList.prototype.addToTail = function(item) {
  var Node = function(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  };
  var node = new Node(item);
  if (!this.head){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

DoublyLinkedList.prototype.removeTail = function(item) {
 var ret = null;
 if (this.tail){
  ret = this.tail;
  this.tail = this.tail.prev;
  if (this.tail)
    this.tail.next  = null;
}
return ret;
};

DoublyLinkedList.prototype.removeHead = function(item) {
  var ret = null;
  if (this.head){
    ret = this.head;
    this.head = this.head.next;
    if (this.head)
      this.head.next = null;
  }
  return ret;

};

DoublyLinkedList.prototype.contains = function(item) {
  var ret = false;
  for (var n = list.head; n.next !== null; n = n.next){
    if (n.value === target){
      ret = true;
      break;
    }
  }
  if (list.tail.value === target)
    ret = true;
  return ret;
};
