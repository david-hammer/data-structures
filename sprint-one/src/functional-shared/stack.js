var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
    newStack.storage = {};
    newStack.currSize = 0;
  extend(newStack,stackMethods);
  return newStack;

};

var stackMethods = {
  push : function(value) {
    this.storage[this.currSize++] = value;
  },
  pop : function(){
    if (this.currSize > 0)
      return this.storage[--this.currSize];
    else
      return null
  },
  size : function(){
    return this.currSize;
  }
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


