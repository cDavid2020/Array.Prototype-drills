// MAP - uses arrow function to invoke a function on each item in an array. The function is invoked on each item in the array and the result is returned in a new array

let numbers = [6, 42, 4, 81, 56, 33];

// multiply every value by two
let multipliedNumbers = numbers.map(number) => number * 2);
let addedNumbers = numbers.map(number) => number + 2);

console.log(addedNumbers;
  
console.log(multipliedNumbers);{

console.log(numbers);


  //////

  let numbers = [6, 42, 4, 81, 56, 33];

  //log the string 'hey' to the console

  numbers.map(() => console.log('hey'));
/// hey gets logged 6 times because the array has 6 items


///////

let numbers = [6, 42, 4, 81, 56, 33];

let team = {
  {
    name: 'John',
    age: 23,
  }
}

team.map(teamMember => teamMember.age += 10)

console.log(team);



//////////////////////////////////
// FILTER

let numbers = [6, 42, 4, 81, 56, 33];
numbers.filter(number => number > 18 && < 50);
// if the item passes this test it gets pased to the new array

console.log(filteredNumbers);

//////////////////////////////////let numbers = [6, 42, 4, 81, 56, 33];


numbers.filter(number => number > %2 !== 0);


//////////////////////////////////
// REDUCE - takes an array and reduces it to a single value. The Accumulator adds to the Current Value to create a single number

let numbers = [6, 42, 4, 81, 56, 33];

// accumulator and current value
let reducedValue = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(reducedValue);

