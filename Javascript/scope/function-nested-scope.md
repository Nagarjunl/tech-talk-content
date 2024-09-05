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



## Code

        const name = "Hello";
        
        function sayHello() {
          let age = 20;
          console.log(age);
          function inner() {
            age = 25;
            console.log(age); //output
          }
          console.log(age);
          inner();
          console.log(age); // 25
        }
        
        sayHello();

## Code execution, memory creation and variable/function reference in specific scopes

<img width="996" alt="image" src="https://github.com/user-attachments/assets/25a0a8f3-42ce-4815-b3bf-4edbe3264424">
