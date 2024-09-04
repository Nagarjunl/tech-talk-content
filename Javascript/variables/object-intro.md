# Objects (non-primitive)

<img width="415" alt="image" src="https://github.com/user-attachments/assets/0a43fecc-803d-4646-8307-1de8598e7010">

    let person = {
      name: "sathish",
      age: 35,
      isMarried: true,
      address: {
        street: 'main',
        door: '23/5',
        state: 'Tamil Nadu',
        pincode: 600001
      },
      marks: [84, 85, 35, 68, 43]
    }


## Rules
1. Values are stored using key/value structure
2. Key datatypes are String/Symbol(will learn about Symbol)
3. To access the value from object, we use dot(.) notation.(prefered)
4. To mutate the value, we can use the same dot(.) notation(prefered)
5. We can use [] to access or mutate the value

## Object with multiple types and functions

    let name = 'name';
    const obj = {
      name: 'sathish',
      marks: [45,55,67],
      address: {
        pincode: 560001,
      },
      show: function show() {
        console.log(this.name);
      },
      age: 35,
      isMarried: true,
      dob: new Date('10/09/1990')
    }
    
    console.log(obj.name); // 'sathish'
    console.log(obj[name]); // 'sathish'
    
    console.log(obj.name.toUpperCase()) // "SATHISH"
    
    
    console.log(obj.show()) // "sathish"
    
    console.log(obj.dob.getMonth()) //09

