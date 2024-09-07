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

5.  `const` variable declared inside a block scope won't be available in its `outer scope`

         {
               const name = "foo";
         }
         console.log(name); // Reference Error : name is not defined


6.  `const` keyword does not support the access to the variables before declaration

         console.log(age);
         const age = 24;
    
8.  `const` keyword allows you change the properties of Array/Object properties(index/key). But doesn't allow the new assignment
       
