var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(str){
  this.storage[this.last++] = str;
};
Queue.prototype.dequeue = function() {
  if (this.last - this.first > 0)
    return this.storage[this.first++];
  else
    return null;
};
Queue.prototype.size = function() {
  return this.last - this.first;
};

