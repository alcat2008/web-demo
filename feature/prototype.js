function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  SuperType.call(this);

  this.subproperty = false;
}

function createSubPrototype(prototype) {
  var F = function(){};
  F.prototype = prototype;
  return new F();
}


// 继承了 SuperType
// SubType.prototype = new SuperType();
SubType.prototype = createSubPrototype(SuperType.prototype);
// 等价于下面的写法
// SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;

SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

var instance = new SubType();
console.log(instance instanceof SubType); // true
console.log(instance instanceof SuperType); // true

// var instance = new SuperType();
console.log(instance.getSuperValue()); // true
console.log(instance.getSubValue()); // false
console.log(instance.constructor); // [Function: SuperType]

console.log(SubType.prototype.constructor); // [Function: SuperType]
// console.log(SubType.prototype.getSuperValue()); // true
console.log(instance.__proto__ === SubType.prototype); // true
console.log(instance.__proto__ === SuperType.prototype); // false
