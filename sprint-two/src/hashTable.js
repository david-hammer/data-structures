//collisions resolved by separate chaining
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (!bucket)
    this._storage.set(i, new _Node(k,v));
  else {
    for (var n = bucket; bucket.next !== null; n = n.next)
      ;
    n.next = new _Node(k,v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var n = bucket; n; n = n.next)
  {
    if (n.key === k)
      return n.value;
  }
  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var prev = null;
  for (var n = bucket; n; n = n.next)
  {
    if (n.key === k)
    {
      if (prev === null && n.next === null) // beginning of list
        this._storage.set(i, null);
      else if (prev === null)
        this._storage.set(i, n.next);
      else if (n.next === null)             // end of list
        prev.next = null;
      else                                  // middle of list
        prev.next = n.next;

      return n.value;
    }
    prev = n;
  }
  return null;

};

var _Node = function(k,v){
  this.key = k;
  this.value = v;
  this.next = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
