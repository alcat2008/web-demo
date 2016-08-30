
class PointClass {
  constructor(x, y) {
    // ...
    this.x = 4;
    this.func3 = () => {};
  }

  func1() {
    // ...
  }
}

PointClass.prototype.func2 = function () {

};

var PointPrototype = function (x, y) {
  // ...
}

PointPrototype.prototype.func1 = function () {
  // ...
}

export {
  PointClass,
  PointPrototype
};
