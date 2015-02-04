var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.currSize = 0;
  newStack.storage = {};
  return newStack;
};

 stackMethods = {};

stackMethods.push = function(str){
  this.storage[this.currSize++] = str;
};

stackMethods.pop = function(){
  if (this.currSize > 0)
    return this.storage[--this.currSize]
  else
    return null;
};

stackMethods.size = function(){
  return this.currSize;
};
