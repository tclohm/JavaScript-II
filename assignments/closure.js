// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
let jsonObject = [
	{id: 0, url: 'https://www.coolnewapp.io/launchs/', success: false, data: {token: 'error'}, error: {message: "No token"}},
	{id: 1, url: 'https://www.hexdecimal.ex/home/', success: true, data: {token: 'hello world'}, error: {message: ""}},
	{id: 2, url: 'https://www.numberonebootcamp.org/discount/', success: false, data: {token: 'error'}, error: {message: "404"}},
];

const mocInternetPull = (json, callback) => {
	callback(json)
}

const internetResults = mocInternetPull(jsonObject, function(object) { 
	console.log(object)
});

console.log(internetResults)

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = (limit=5) => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  let count = 0;
  // 2- Declare a function `counter`. It should increment and return `count`.
  const counter = () => { 
  	(count < limit) ? count++ : count = 1;
  	return count; 
  }
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

console.log("============================")
const myCounter = counterMaker();
myCounter();
myCounter();
console.log(myCounter());

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

myCounter();
console.log(myCounter());
console.log(myCounter());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  return {
   	increment: () => { return count += 1 },
  	decrement: () => { return count -= 1 },
  };

  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

console.log("============================")
const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment())
console.log(newCounterFactory.decrement())
console.log(newCounterFactory.increment())
console.log(newCounterFactory.increment())
console.log(newCounterFactory.increment())
console.log(newCounterFactory.increment())
console.log(newCounterFactory.increment())
console.log(newCounterFactory.increment())