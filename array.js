var arrayMale = ['John', 'Robert', 'Josef', 'Martin'];
var arrayFemale = ['Eva', 'Kate', 'Dominica', 'Sylvia'];
var allNames = arrayMale.concat(arrayFemale);

console.log(allNames);

var newName = 'Ignacy';

if(allNames.indexOf(newName) === -1 ) {
  allNames.push(newName);
}

console.log(allNames);
