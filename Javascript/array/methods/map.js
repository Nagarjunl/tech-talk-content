const marks = [85, 73, 80, 81, 98];

const forThousand = function (mark) {
  return mark * 2;
};

const returnValuesFromMap = marks.map(forThousand);
//Shorthand const forThoudand =  marks.map((mark) => mark*2));

// !! Important
//Chaining Array methods: marks.map((mark) => mark*2)).reduce((acc, mark) => acc+mark))

//Check MDN for more information
