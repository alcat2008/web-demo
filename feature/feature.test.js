
// import  * as es6 from './module';
// import es6Default from './module';
// import { a, b } from './module';
// const { a, b } = es6;

import TestableClass from './decorator';

// import { PointClass, PointPrototype } from './class';

describe('feature', () => {
  // it('es6 module', () => {
  //   console.log(es6);
  //   console.log(es6Default);
  //   console.log(a);
  //   console.log(b);
  // });

  // it('es6 class', () => {
  //   console.log(new PointPrototype().__proto__.prototype);
  //   console.log(PointPrototype.name);
  //
  //   console.log(Object.keys(PointClass.prototype));
  //   console.log(Object.getOwnPropertyNames(PointClass.prototype));
  //
  //   console.log(Object.keys(PointPrototype.prototype));
  //   console.log(Object.getOwnPropertyNames(PointPrototype.prototype));
  // });

  it('es6 decorator', () => {
    console.log(TestableClass.isTestable);
  });
});

