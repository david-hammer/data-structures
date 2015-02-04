var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = null;
  var last = null;

  // Implement the methods below

  someInstance.enqueue = function(value){
    if (first === null){
      first = 0;
      last = 0;
    }
    storage[last++] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if (size)
    {
      size--;
      return storage[first++];
    } else {
      return null;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
