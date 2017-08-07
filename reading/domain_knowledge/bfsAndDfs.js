'use strict';

const Node = function(value) {
  this.value = value;
  this.children = null;
  this.right = null;
}

let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');
let nodeE = new Node('E');
let nodeF = new Node('F');
let nodeG = new Node('G');
let nodeH = new Node('H');

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeC.left = nodeD;
nodeC.right = nodeF;
nodeD.right = nodeE;
nodeF.left = nodeG;
nodeF.right = nodeH;

const traverseDepthFirst = function(node, callback) {
  callback(node);
  if (node.left) {
    traverseDepthFirst(node.left, callback);
  }
  if (node.right) {
    traverseDepthFirst(node.right, callback);
  }
};

const traverseDepthFirst = function(root, callback) {
  var stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    callback(node);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
};

const traverseBreadthFirst = function(root, callback) {
  var queue = [root];

  while(queue.length > 0) {
    let node = queue.shift();
    callback(node);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};

const searchDepthFirst = function(node, targetValue) {
  let left = null;
  let right = null;
  if (node.value === targetValue) {
    return node;
  }
  if (node.left) {
    left = searchDepthFirst(node.left, targetValue);
  }
  if (node.right) {
    right = searchDepthFirst(node.right, targetValue);
  }
  return left || right;
};

var found = searchDepthFirst(nodeA, 'F');
console.log(found && found.value)

const printNode = function(node) {
  console.log(node.value);
}

// console.log('---');
// traverseBreadthFirst(nodeA, printNode);