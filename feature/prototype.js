function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

// 继承了 SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

var instance = new SubType();
// var instance = new SuperType();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());

console.log(SubType.prototype.constructor);
console.log(SubType.prototype.getSuperValue());
console.log(instance.__proto__ === SubType.prototype);
console.log(instance.__proto__ === SuperType.prototype);
