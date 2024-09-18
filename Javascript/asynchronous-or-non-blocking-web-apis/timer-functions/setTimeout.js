//blocking
alert("Hi");

// for (let i = 0; i < 500000; i++) {
//   console.log(i);
// }
console.log("1");

//non-blocking
setInterval(function () {
  console.log("3");
}, 1000);

//non-blocking
setTimeout(function () {
  console.log("2");
}, 2000);

console.log("4");
