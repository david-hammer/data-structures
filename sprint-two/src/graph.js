

var Graph = function(){
  this.nodes = {}; // maps vertices to edge list
};

Graph.prototype.addNode = function(node){
  if (!this.nodes.hasOwnProperty(node)){
    this.nodes[node] = {};
  }
};

Graph.prototype.contains = function(node){
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodes[fromNode].hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this.nodes.hasOwnProperty(fromNode) ||
    !this.nodes.hasOwnProperty(toNode))
    throw "vertex does not exist";
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (!this.nodes.hasOwnProperty(fromNode) ||
    !this.nodes.hasOwnProperty(toNode))
    throw "vertex does not exist";
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var node in this.nodes)
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



