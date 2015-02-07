var RedBlackTree = function() {
  this.root = null;
};

RedBlackTree.prototype.insert = function(item, par) {
  var Node = function(value){
    this.val = value;
    this.parent = par;
    this.left = null;
    this.right = null;
    this.color = false; // false means black
  };
  var search = function(node){
    if ((item < node.value) && !node.left){
      node.left = new Node(item, node);
    } else if ((item > node.value) && !node.right){
      node.right = new Node(item, node);
    } else if (item < node.value){
      search(node.left);
    } else if (item > node.value){
      search(node.right);
    }
  };

  if (!this.root) {
    this.root = new Node(val, null);
  } else {
    search(this.root);
  }
};

RedBlackTree.prototype.rotateLeft = function(x) {
  var y = x.right;
  x.right = y.left;
  if (y.left)
    y.left.parent = x.right;
  y.parent = x.parent;
  if (!x.parent) {// if x has no parent, then y is new root
    this.root = y;
  } else {
    if (x.val === x.parent.left.val) { // check if x was left child
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
  }
  // put x to left of y
  y.left = x;
  x.parent = y;
};
