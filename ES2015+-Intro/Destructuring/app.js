// Destructuring is a means of assigning variables by extracting values from objects, arrays...

let a, b;
[a, b] = [100, 200];

// Rest Pattern, the ...spread inicator loads our remains variable as an array containing the remaining values of the previous array
// Note that the name doesn't have to be 'rest' in order to work...
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

console.log(a); //100
console.log(b); //200
console.log(c); //300
console.log(rest); //[400, 500]

// We can also destructure objects
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(a, b); // 100, 200
console.log(rest); // {c: 300, d: 400, e: 500}

// Array destructuring
// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);

// Parse an array returned from a function
// function getPeople() {
// 	return ['John', 'Beth', 'Mike'];
// }
//
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

// Object destructuring
// You'll see this a lot in frameworks like React
const person = {
	name: 'John Doe',
	age: 32,
	city: 'Miami',
	gender: 'Male',
	sayHello: function() { console.log('Hello'); }
}

// ES5 way
// const person = person.name,
// 			age = person.age,
// 			city = person.city,
// 			gender = person.gender

// ES6 destructuring
const {name, age, city, gender, sayHello} = person;
console.log(name, age, city, gender);
sayHello();
