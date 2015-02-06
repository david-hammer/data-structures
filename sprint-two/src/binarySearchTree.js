var BinarySearchTree = function(value){
  var newBSTree = Object.create(bsPrototype);
  newBSTree.value = value;
  newBSTree.left = null;
  newBSTree.right = null;

  return newBSTree;
};

var bsPrototype = {};

bsPrototype.insert = function(item){
  var search = function(tree){
    if ((item < tree.value) && !tree.left){
      tree.left = BinarySearchTree(item);
    } else if ((item > tree.value) && !tree.right){
      tree.right = BinarySearchTree(item);
    } else if (item < tree.value){
      search(tree.left);
    } else if (item > tree.value){
      search(tree.right);
    }
  }
  search(this);
};

bsPrototype.contains = function(item){
  var ret = false;
  var search = function(tree){
    if (tree.value === item){
      ret = true;
    } else if (item < tree.value && tree.left){
      search(tree.left);
    } else if (item > tree.value && tree.right){
      search(tree.right);
    }
  }
  search(this);
  return ret;

};

bsPrototype.depthFirstLog = function(cb){
  var depthFirst = function(tree){
    cb.call(this,tree.value);
    if (tree.left)
      depthFirst(tree.left);
    if (tree.right)
      depthFirst(tree.right);
  }
  depthFirst(this);
};

bsPrototype.breadthFirstLog = function(cb){
  var queue = [];
  queue.push(this);

  while (queue.length > 0){
    cb.call(this,queue.shift());
    if (tree.left)
      queue.push(tree.left);
    if (tree.right)
      queue.push(tree.right);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?

 first two: O(logN)
 depthFirstLog: O(N)
 */
