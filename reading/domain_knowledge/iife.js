'use strict';

const IdGenerator = function() {
  this.id = 0;
}
IdGenerator.prototype.getNextId = function() {
  this.id++;
  return this.id;
}

const generator = new IdGenerator();
console.log(generator.getNextId()); // --> 1
console.log(generator.getNextId()); // --> 2
generator.id = 666;
console.log(generator.getNextId()); // --> 667
console.log(generator.getNextId()); // --> 668


const IdGenerator = function() {
  let id = 0;

  this.getNextId = function _getNextId() {
    id++;
    return id;    
  }
}


const generator = new IdGenerator();
console.log(generator.getNextId());
console.log(generator.getNextId());
console.log(generator.getNextId());
console.log(generator.getNextId());

const getNextId = (function() {
  let id = 0;
  return function() {
    id++;
    return id;
  };
})();

console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
