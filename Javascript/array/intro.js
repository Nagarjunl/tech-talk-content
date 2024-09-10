const marks = [];

marks[0] = 90;
console.log('1st console', marks);

marks[0] = 95;
console.log('2nd console', marks);

marks.push(100);
console.log('3rd console', marks);

marks.push(86);
console.log('4th console', marks);

marks.push();
console.log('5th console', marks);

//  ================================================

marks.pop();
console.log('1st pop console', marks);

marks.pop();
console.log('2nd pop console', marks);

//  ================================================

const animals = ['pigs', 'goats', 'sheep', 'chickens', 'cats', 'dogs'];

delete animals[1];
console.log('animal after 1st deletion console', animals);

console.log("modifiedarray", animals.slice(2, 5)); // 2 < 5
console.log('animal after 1st slice console', animals);

//  ================================================










