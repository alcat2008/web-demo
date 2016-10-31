
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

  it('test object and array', () => {
    const { test1, demo1, struct1 } = { test1: 'test1', demo1: 'demo1', struct1: 'struct1' };
    let beforeTime1 = new Date();
    console.log(test1);
    console.log(demo1);
    console.log(struct1);
    let endTime1 = new Date();
    console.log('object test: ', beforeTime1.getTime());
    console.log('object test: ', endTime1.getTime());


    const [test2, demo2, struct2] = ['test2', 'demo2', 'struct2'];
    let beforeTime2 = new Date();
    console.log(test2);
    console.log(demo2);
    console.log(struct2);
    let endTime2 = new Date();
    console.log('array test: ', beforeTime2.getTime());
    console.log('array test: ', endTime2.getTime());

  });
});

