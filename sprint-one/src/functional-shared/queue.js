var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.first = 0;
  newQueue.last = 0;
  for (var key in queueMethods){
    newQueue[key] = queueMethods[key];
  }

  return newQueue;
}
var queueMethods = {
  enqueue : function(str){
    this.storage[this.last++] = str;
  },
  dequeue : function(){
    if (this.last - this.first)
      return this.storage[this.first++];
  },
  size : function() {
    return this.last - this.first;
  }
};

