
import  * as es6 from './es6.js';
import es6Default from './es6.js';
import { a, b } from './es6';
// const { a, b } = es6;

describe('sum', () => {
  it('es6 import and export', () => {
    console.log(es6);
    console.log(es6Default);
    console.log(a);
    console.log(b);
  });
});

