let obj = {
    name: "John",
    age: 30
};

console.log(Object.entries(obj));

console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.fromEntries(Object.entries(obj)));

// ------------------------------------------

let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {};

console.log(ben.toString());
visitsCountObj[ben] = 234;

console.log(visitsCountObj)

console.log(john.toString());
visitsCountObj[john] = 123;

console.log(visitsCountObj["[object Object]"]); 