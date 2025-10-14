// This will allow us to use that function from that(index.js) file, 
// and we can use it right here.

const greet = require('./greet');
const {person1, person2, person3} = require('./ppl');

greet("Bharath");
greet("Johnwick")
console.log(person1);
console.log(person2);
console.log(person3);