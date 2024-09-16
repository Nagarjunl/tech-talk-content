# Non-primitive (pass by reference) (Shallow copying)

    let person1 = { name: 'john' };
    let person2 = person1;
    person2.name = 'Smith';
    console.log(person1, person2);

## Notes

1. For non-primitive data types(array and object), when we copy value from one variable(`person1`) to another variable(`person2`), it creates new memory for `person2 ` and  points to `person1` memory.
2. Non-primitive does the shallow copying.

## Ways to copy non-primitive(Shallow copy)

 ### Using assignment operator(=)

        let person1 = { name: 'john' };
        let person2 = person1;
        person2.name = 'Smith';
        console.log(person1, person2);
        
### Using spread operator

        let person1 = { name: 'john' };
        let person2 = {...person1};
        person2.name = 'Smith';
        console.log(person1, person2);
        
### Using spread operator (another example)

       let person1 = { name: 'john',
                      address: {
                        state: 'Tamil Nadu'  
                      }
                    };
       let person2 = person1;
       person2.address.state = 'Kerala';
       console.log(person1, person2);
       
### Object.assign

        let person1 = { name: 'john',
                      address: {
                        state: 'Tamil Nadu'  
                      }
                    };
       let person2 = Object.assign({}, person1);
       person2.address.state = 'Kerala';
       console.log(person1, person2);

## Ways to copy non-primitive(Deep copy)

### JSON.parse

      let person1 = { name: 'john',
                      address: {
                        state: 'Tamil Nadu'  
                      }
                    };
       let person2 = JSON.parse(JSON.stringify(person1));
       person2.address.state = 'Kerala';
       console.log(person1, person2);
### structuredClone

      let person1 = { name: 'john',
                      address: {
                        state: 'Tamil Nadu'  
                      }
                    };
       let person2 = structuredClone(person1);
       person2.address.state = 'Kerala';
       console.log(person1, person2);
   
