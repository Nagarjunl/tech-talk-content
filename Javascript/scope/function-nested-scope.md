# Nested scope

## Code

    function sayHello() {
      function inner() {
        const name = "Hello";
        console.log(name); //output
      }
    
      inner();
    
      console.log(name); //output
    }
    
    sayHello();

## Code execuetion, memory creation and accessing its scope

<img width="1164" alt="image" src="https://github.com/user-attachments/assets/45e2f55a-f9d8-404e-b7d5-cccbe1a254c4">
