# Ways to declare variables

1. var
2. let
3. const


## Use of `var` keyword

var age = 35;

age = 40 // Allows you to change the value - now age variables value is 40;


## Use of `let` keyword

let age = 35;

age = 40;  // Allows you to change the value - now age variables value is 40;

<img width="989" alt="image" src="https://github.com/user-attachments/assets/9502e2a0-5e69-4802-8ee0-f3bff58c5c2e">



## Use of `const` keyword
const age = 35;

age = 40 // throws error - Uncaught TypeError: "age" is read-only
<img width="318" alt="image" src="https://github.com/user-attachments/assets/09c3e74c-0941-41c0-9496-1955b6dac4de">


## Declaration and Definition

var age; // Declaration

var age = 20; // Declaration + Definition

age = 30; // Mutate the original value

var name = 'Sathish'; // or "Sathish"

var eligibleToVote = true; // or false,  1 - is equalent to true and 0 -is equalent to false
