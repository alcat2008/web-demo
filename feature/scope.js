
console.log('Boolean({}) ' + Boolean({}));
console.log('Boolean(\'\') ' + Boolean(''));
console.log('Boolean(state => ({})) ' + Boolean(state => ({})));
console.log('Boolean(null) ' + Boolean(null));
console.log('Boolean(undefined) ' + Boolean(undefined));


function add(a, b) {
  return
  a + b
  ;
}
console.log(add(1, 2));

// for(var i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }


for(var i = 0; i < 10; i++) {
  setTimeout((i) => (function(index) {
    console.log(index);
  })(i), 1000);
}

// for(var i = 0; i < 10; i++) {
//   (function(e) {
//     setTimeout(function() {
//       console.log(e);
//     }, 1000);
//   })(i);
// }

var num1 = [];
var num2 = num1;

console.log(num1 == num2);
console.log(num1 === num2);

