function functionAsParam(callBack) {
  //callback = () => console.log("Passing Arrow function as parameter") - how 22th line assinged
  console.log(callBack);
  callBack();
}

functionAsParam(() => console.log("Passing Arrow function as parameter"));

functionAsParam(function () {
  console.log("Passing function as parameter using function expression");
});

function functionAsParamWithArguments(a) {
  //callback = (name, age) => console.log(name);
  a("Sathish", 24);
}

functionAsParamWithArguments((name, age) => {
  console.log(name, age);
});

const callBackWithNamedFunctionAsParam = (callback, name) => {
  console.log(callback);
  callback(name);
};

callBackWithNamedFunctionAsParam(function sayHello(name) {
  console.log("SayHello " + name);
}, "Nagarjun");
