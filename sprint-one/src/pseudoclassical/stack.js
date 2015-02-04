var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(str) {
  this.storage[this.currSize++] = str;
};

Stack.prototype.pop = function() {
  if (this.currSize > 0)
    return this.storage[--this.currSize];
  else
    return null;
};

Stack.prototype.size = function() {
  return this.currSize;
};

