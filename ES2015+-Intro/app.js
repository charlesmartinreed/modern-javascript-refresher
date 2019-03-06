// Iterators and Generators, part of ES6 standard, are both means of iterate through something.

// Iterators are like loops that can be paused
// function nameIterator(names) {
// 	let nextIndex = 0;
//
// 	return {
// 		next: function() {
// 			return nextIndex < names.length ?
// 			{ value: names[nextIndex++], done: false } :
// 			{ done: true }
// 		}
// 	}
// }
//
// const namesArr = ['Jack', 'Jill', 'Jason'];
// const names = nameIterator(namesArr);
//
// //at first step, this returns {value: 'Jack', done: false }
// // if we wanted the value, we'd use names.next().value
//
// console.log(names.next().value); //jack
// console.log(names.next().value); //Jill
// console.log(names.next().value); //Jason
// console.log(names.next()); // {done: true}


// Generators are functions that can be paused and return multiple values - called "yielding" values

// the * character lets JS know that this is a Generator
// function* sayNames() {
// 	yield 'Jack'; // you can yield any data type
// 	yield 'Jill';
// 	yield 'John';
// }
//
// const name = sayNames();
// console.log(name.next()); // { value: 'Jack', done: false }
// console.log(name.next()); // { value: 'Jill', done: false }
// console.log(name.next().value); // John
// console.log(name.next().value); // undefined

function* createIds() {
	let index = 1;

	while(true) {
		yield index++;
	}
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
