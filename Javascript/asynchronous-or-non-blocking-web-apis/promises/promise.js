//non-blocking
const promise = new Promise((re, rej) => {
  setTimeout(() => {
    rej({});
    console.log(promise);
  }, 5000);
});
console.log(promise);
console.log("1");
promise.then((res) => console.log("then", res));
promise.catch((err) => console.log("catch", err));
console.log("2");
