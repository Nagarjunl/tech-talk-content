# Functions

Functions are callable.

## Types

1. ES5 function
2. Function expression or an anonymous function
3. ES6 arrow function

## Syntax

1. function `<function-name>`() {
   //function-body
   }

2. function `<function-name>`(one-or-more-params separated by commas) {

   // function-body

}

## Invoking the function using `()`

`<function-name>` ()

## Example

### Function with no paremeters(params)

1.                   function log() {
        console.warn('logging'); // {} - function-body
    }

### Invoking the `log` function with no parameters

    log()

2.                   function sum(a, b) { //(a,b)- parameters
              //single-responsibility
              console.log(a+b)
            }

### Invoking the `sum` function with `two` parameters

    sum(4,5) // 4,5 - called as arguments


    // console.log(4+5) - simple addition

## Function expression or anonymous function

    let sum = function(a, b) {
      console.log(a+b);
    }

    sum(4,5)

## Arrow function

    let sum = (a,b) => {
      console.log(a+b);
    }


    let sum = (a,b) => console.log(a+b);
