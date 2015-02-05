

var Graph = function(){
  this._nodes = {}; // maps vertices to edge list
};

Graph.prototype.addNode = function(node){
  if (!this._nodes.hasOwnProperty(node)){
    this._nodes[node] = {};
  }
};

Graph.prototype.contains = function(node){
  return this._nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this._nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this._nodes[fromNode].hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this._nodes.hasOwnProperty(fromNode) ||
    !this._nodes.hasOwnProperty(toNode))
    throw new Error("vertex does not exist");
  this._nodes[fromNode][toNode] = toNode;
  this._nodes[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (!this._nodes.hasOwnProperty(fromNode) ||
    !this._nodes.hasOwnProperty(toNode))
    throw new Error("vertex does not exist");
  delete this._nodes[fromNode][toNode];
  delete this._nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var node in this._nodes)
    cb(node);
};

/*
 * Complexity: What is the time complexity of the above functions?
   Assuming Object.hasOwnProperty and deleting key are O(1)
   addNode O(1)
   contains O(1)
   addEdge O(1)
   removeEdge O(1)
   forEachNode O(N) in number of vertices

 */



