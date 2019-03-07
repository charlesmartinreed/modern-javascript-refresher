// SETS - unique values of any type, primitive or reference
const set1 = new Set();

// Add values to set with add()
set1.add(100);
set1.add('A string!');
set1.add({name: 'John'});
set1.add(1==5);
set1.add(100); //this won't be added, but it also won't give us an error

// or add values with the Set constructor
const set2 = new Set([1, true, 'a string again!', false]);

// console.log(set1);
// console.log(set2);

// Get the count for a set using size()
// console.log(set1.size); //4

// Check for values with .has
// console.log(set1.has(200)); //false
// console.log(set1.has(50 + 50)); //true, expression evaluates to a value, 100
// console.log(set1.has({name: 'John'})); //quick, why is this false? It's a reference value! These objects won't share the same point in memory, so ths is always false!

// Delete from the set with .delete
// set1.delete(100);
// console.log(set1);

// Iterating through sets

for (let item of set1) {
	// console.log(item);
}

// forEach loop
set1.forEach((value) => {
	// console.log(value);
})

// As with maps, sets can be converted into arrays
const setArray = Array.from(set1);
console.log(setArray);
