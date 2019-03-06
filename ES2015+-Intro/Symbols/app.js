// Symbols, added in ES6, are a primitive value.
// Each symbol is unique

const sym1 = Symbol(); //not new Symbol() because there is now constructor
const sym2 = Symbol('sym2')

console.log(typeof sym2); //symbol

// No two symbols can be the same
console.log(Symbol('123') === Symbol('123')); //false!

// console.log(`Hello ${sym2}`); //TypeError! can't implicitly convert to a string
// console.log(`Hello ${String(sym1)}`); //Explict conversion, however, is fine!


// Why use symbols? One reason is UNIQUE OBJECT KEYS
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
// use the bracket notation here since we're using a variable name, not a literal
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are NOT ABLE TO BE ENUMERATED IN for..in loops...
// for(let i in myObj) {
// 	console.log(`${i}: ${myObj[i]}`); //we only get key3 and key4!
// }

// Symbols are IGNORED WHEN USING JSON.stringify
console.log(JSON.stringify({key: 'prop'})); // parses normally!
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); //empty object!
