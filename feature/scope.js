
let shouldSubscribe = Boolean({});
if (shouldSubscribe) {
  console.log('Boolean({})');
}

shouldSubscribe = Boolean(state => ({}));
if (shouldSubscribe) {
  console.log('Boolean(state => ({}))');
}



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

