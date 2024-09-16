# Primitive data copying (Pass by value)

    let a = 10;
    let b = a;
    a = 20;
    console.log(a, b);

## Notes
1. When we copy value from one variable (`a`) to another varible(`b`), it copies the value from memory of `a` and creates a new memory for `b` and stores the copied value.
2. No reference to the original variable memory
3. Primitive data types does the deep copy.

    
