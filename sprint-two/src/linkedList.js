var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var Node = function(value){
      var node = {};
      node.value = value;
      node.next = null;
      return node;
    };

    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;
    } else{
      for (var n = list.head; n.next !== null; n = n.next)
        ;
      n.next = Node(value);
      list.tail = n.next;
    }
  };

  list.removeHead = function(){
    if (!list.head)
      return null;
    else{
      var oldHead = list.head;
      list.head = (oldHead.next) ? oldHead.next : null;
      if (list.head === null)
        list.tail = null;
      return oldHead.value;
    }
  };

  list.contains = function(target){
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

  return list;
};



/*
 * Complexity: What is the time complexity of the above functions?

    addToTail: O(N)
    removeHead: O(1)
    contains: O(N)
    */
