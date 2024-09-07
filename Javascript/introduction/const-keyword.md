# Const

`const` keyword allows you to declare a variale for primitive and non-primitive data types

## Syntax

const `<varibale-name>` = `<value>`

## Rules

1.  `const` keyword allows you to declare a variale for primitive and non-primitive data types

         const name = "foo";

2.  `const` keyword won't allows you to change the variables value after declaration
          
        const name = 'foo';
        name = 'far';
        

4.  `const` keyword supports the `block` scope

         {
           const name = "foo";
         }

5.  `const` variable declared inside a block scope won't be available outside of its `scope`

         {
               const name = "foo";
         }
         console.log(name); // Reference Error : name is not defined


6.  `const` keyword does not support the access to the variables before declaration

         console.log(age);
         const age = 24;
    
8.  `const` keyword allows you change the properties of Array/Object properties(index/key). But doesn't allow the new assignment

         const marks = [80, 73, 80, 81, 98]
         
         marks[0] = 85 // Valid mutation for const array
         marks = [] // results in error
         
         
         const person = {
           name: "Prabu",
           age: 30,
         }
         
         person = {} // Results in error
         person.name = "Prabu King" // valid mutation for const objects
         
         
    For `Array` and `Object` data types, const allows you to change the values of the index and key respectively. Not allows the new assignment to the variable
