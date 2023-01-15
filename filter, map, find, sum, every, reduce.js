/* 
Array.prototype() - FILTER, MAP, FIND, SUM, EVERY, REDUCE
*/

// FILTER

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },

  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]

const filteredItems = items.filter((item) => {
  return item.price <= 100
}
// all items under 100 will be returned to the new array
console.log(filteredItems);

// filtere array is simple use a t/f statement to return the items you want

console.log(filteredItems)

;



////////////////////////////////////
// MAP

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },

  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]

const itemNames = items.map((item) => {
  return item.name
})

console.log(itemNames);

// multiple uses for the map function


//////////////////////////////////
// FIND

// uses a t/f statement to find the first item that matches the criteria

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },

  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]

const foiundItem = items.find((item) => {
  return item.name === 'Book'
})

console.log(foundItem);

// returns the FIRST item ethat passes the t/f test

//////////////////////////////////
// SUM
// if anything in the function returns true, the some method returns true. aka if one thing is true everything is true

// return items < 100

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },

  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]

const ch

cheapItems = items.some((item => {
  return.item.price <= 100

})

console.log(cheapItems);


//////////////////////////////////
// EVERY  

// checks to make sure EVERY item in the array passes the t/f test

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },

  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]

const cheapItems = items.every(item => {

  return item.price <= 1000
})


//////////////////////////////////
// REDUCE

// checks to make sure EVERY item in the array passes the t/f test

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },

  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]

const cheapItems = items.reduce(currentTotal, item) => {

  return item.price + currentTotal
}, 0)

console.log(total);

