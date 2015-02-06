var BloomFilter = function(m , k) {

  this._storage = Array(m);
  for (i = 0; i < this._storage.length; i++)
    this._storage[i] = false;


  //simulates k different hash functions
  this._codes = Array(k);
  for (var i = 0; i < this._codes.length; i++)
    this._codes[i] = Math.random();
}

BloomFilter.prototype.add = function(item){
  var key = JSON.stringify(item);
  for (var i = 0; i < this._codes.length; i++)
  {
    this._storage[this._hash((key + this._codes[i]),
      this._storage.length)] = true;
  }
};

BloomFilter.prototype.contains = function(item){
  var ret = true;
  var key = JSON.stringify(item);
  for (var i = 0; i < this._codes.length; i++)
  {
    if (!this._storage[this._hash((key + this._codes[i]),
      this._storage.length)]) {
      ret = false;
    break;
  }
}
return ret;
};

BloomFilter.prototype._hash = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var testBloomFilter = function() {
  var filter;
  for(var t = 0; t < 10000; t++) {
   filter = new BloomFilter(18,3);

 }

};

