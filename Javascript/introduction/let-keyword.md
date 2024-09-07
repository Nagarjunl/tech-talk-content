# Let

`let` keyword allows you to declare a variale for primitive and non-primitive types

## Syntax

let `<varibale-name>` = `<value>`

## Rules

1. `let` keyword allows you to declare a variale for primitive and non-primitive types
   let name = "foo"
2. `let` keyword allows you to change the variables value after declaration
   name = 'far'
3. `let` keyword supports the `block` scope
   {
   let name = "foo"
   }
4. `let` keyword does not support the access to the variables before declaration
   console.log(age);
   let age = 24;
