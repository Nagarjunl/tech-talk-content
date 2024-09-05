# Function scope

## Code 

    const name = "Sathish";
    
    function person() {
      const name = "John";
      console.log(name);
    }
    
    person();
    
    console.log(name); //



## After invocation of the `person` function

<img width="1150" alt="image" src="https://github.com/user-attachments/assets/184c98f8-c7c2-413e-987d-b6cd05edb532">


## After completion of `person` function

Note: Once function completes its execution, its removed from the call stack and its memory. Not the function declaration in the global scope

<img width="928" alt="image" src="https://github.com/user-attachments/assets/1cffa151-35b0-4b1d-b8d0-6476e909d045">

