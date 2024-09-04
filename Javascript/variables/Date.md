# Date

    var dob = new Date("09,10,1990");
    console.log(dob.getMonth());
    console.log(dob.getDate());
    console.log(dob.getYear());

## Rules to know
1. Pass value as string to Date constructor
2. Format is mm/dd/YYYY or mm-dd-YYYY
3. Months starts with 0 and ends with 11. Write your logics while keeping this in mind
4. typeof returns 'object'
