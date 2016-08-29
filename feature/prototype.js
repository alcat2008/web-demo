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

function inheritPrototype(subType, superType) {
  var prototype = Object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

// 继承了 SuperType
// SubType.prototype = new SuperType();
inheritPrototype(SubType, SuperType);

SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

var instance = new SubType();
// var instance = new SuperType();
console.log(instance.getSuperValue()); // true
console.log(instance.getSubValue()); // false
console.log(instance.constructor); // [Function: SuperType]

console.log(SubType.prototype.constructor); // [Function: SuperType]
// console.log(SubType.prototype.getSuperValue()); // true
console.log(instance.__proto__ === SubType.prototype); // true
console.log(instance.__proto__ === SuperType.prototype); // false
