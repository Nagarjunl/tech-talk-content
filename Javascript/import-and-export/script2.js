const a = 10;
const b = 10;

function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

function sayBye(user) {
    console.log(`Bye, ${user}!`);
}

export { sayHi as hi, sayBye, a, b }; 