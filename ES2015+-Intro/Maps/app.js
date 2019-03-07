// Map is an object that holds key-value pairs
// Any data type can be used as a key or value, including objects

const map1 = new Map();

// Set keys
const key1 = 'some string',
			key2 = {},
			key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// get values by key, with get()
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// Count values using the size property
// console.log(map1.size); //3, because there are 3 key/value pairs

// Iterating through maps
// loop, using for...of to get keys AND values
for (let [key, value] of map1) {
	// console.log(`${key} = ${value}`);
}

// Iterate keys only
for (let key of map1.keys()) {
	// console.log(key);
}

// Iterate values only
for (let value of map1.values()) {
	// console.log(value);
}

// Loop with forEach
map1.forEach(function(value, key){
	// console.log(`${key} = ${value}`);
})

// We can also convert sets to arrays
const keyValueArray = Array.from(map1);
// console.log(keyValueArray);

// array just from values or keys
const valuesArray = Array.from(map1.values());
const keysArray = Array.from(map1.keys());

console.log(valuesArray);
console.log(keysArray);
