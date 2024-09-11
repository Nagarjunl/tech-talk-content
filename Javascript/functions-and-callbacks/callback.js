function functionAsParam(callBack) {
  //callback = () => console.log("Passing Arrow function as parameter") - how 22th line assinged
  console.log(callBack);
  callBack();
}

functionAsParam(() => console.log("Passing Arrow function as parameter"));

functionAsParam(function () {
  console.log("Passing function as parameter using function expression");
});

function functionAsParamWithArguments(callBack) {
  //callback = (name, age) => console.log(name);
  callBack("Sathish", 24);
}

functionAsParamWithArguments((name, age) => {
  console.log(name, age);
});
