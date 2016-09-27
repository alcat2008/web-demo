
const testable = isTestable => target => {
  target.isTestable = isTestable;
};

const readonly = (target, name, descriptor) => {
  // descriptor 对象原值为
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // }
  descriptor.writable = false;
  return descriptor;
};

@testable(false)
class TestableClass {
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }

}

export default TestableClass;
