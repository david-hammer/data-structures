//collisions resolved by separate chaining
//overrides duplicate
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  //resize
  if (this._numBucketsFull() >= 0.75 * this._limit)
    this._resize(2 * this._limit);

  //inefficient way to implement overriding
  if (this.retrieve(k))
    this.remove(k);

  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (!bucket)
    this._storage.set(i, new _Node(k,v));
  else {
    for (var n = bucket; n.next !== null; n = n.next)
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

    //resize
  var size = this._numBucketsFull()
  if (size > 3 && size < 0.25 * this._limit)
    this._resize(0.5 * this._limit);


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

HashTable.prototype._resize = function(newSize) {

  var oldArray = this._storage;
  var oldSize = this._limit;
  this._storage = LimitedArray(newSize);
  this._limit = newSize;

  for (var i = 0; i < oldSize; i++)
  {
    var bucket = oldArray.get(i);
    for (var n = bucket; n; n = n.next)
    {
      this.insert(n.key,n.value);
    }
  }
}

HashTable.prototype._numBucketsFull = function() {
  var count = 0;
  for (var i = 0; i < this._limit; i++) {
    if (this._storage.get(i))
      count++;
  }
  return count;
};

// HashTable.prototype._enum = function(){
//   for (var i = 0; i < this._limit; i++)
//   {
//     var bucket = this._storage.get(i);
//     for (var n = bucket; n; n = n.next)
//     {
//       console.log(n.key,n.value);
//     }
//   }
// };

var _Node = function(k,v){
  this.key = k;
  this.value = v;
  this.next = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
  amortized constant time
 */
