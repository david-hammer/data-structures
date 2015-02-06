//binary tree
var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  if (parent)
    newTree.parent = parent;

  // your code here
  newTree.children = null;  // fix me

  for (var key in treeMethods)
    newTree[key] = treeMethods[key];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = this.children || [];
  this.children.push(Tree(value,this));
};

treeMethods.contains = function(target){
    var ret = false;
    var searchTree = function(tree){
      if (tree.value === target)
        ret = true;
      for (var c = 0; tree.children && c < tree.children.length; c++){
        searchTree(tree.children[c]);
      }
    }
    searchTree(this);
    return ret;
};

treeMethods.traverse = function(cb, tree){
  tree = tree || this;
  cb.call(this, tree.value);
  for (var i = 0; tree.children && i < tree.children.length; i++)
    this.traverse(cb, tree.children[i]);
}

treeMethods.removeFromParent = function() {
  //this.parent.children.remove(this);


};

/*
 * Complexity: What is the time complexity of the above functions?
  addChild : O(1)
  contains : O(N)

 */
