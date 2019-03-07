// Module/Revealing Module : Break code up into distinct module files, which are then imported into other files to extend their capabilities. Supports Public/Private modules.

// ES6 added Module support, but since browser support isn't widespread just yet, it is necessary to transpile with webpack/babel.

// Basic Module structure
// make an IIFE (function(){}())
(function() {
	// Declare private vars and functions

	return {
		// Declare public vars and functions
	}
})();

// STANDARD MODULE PATTERN
const UIController = (function(){
	// PRIVATE BEGIN
	let text = 'Hello World';

	// change h1 in the DOM
	const changeText = function() {
		const element = document.querySelector('h1');
		element.textContent = text;
	}

	return {
		// PUBLIC BEGIN
		callChangeText: function() {
			changeText();
			console.log(text);
		}
	}
})();

UIController.callChangeText();

// REVEALING MODULE PATTERN
// Instead of returning our own public functions, you map object literals to private functions you want to 'reveal'
const ItemController = (function(){
	// a common convention for naming private variables is to start with _
	let data = [];

	function add(item) {
		data.push(item);
		console.log('Item added...');
	}

	function get(id) {
		// find() returns the value of the FIRST ELEMENT in the array that satisifies the testing function conditions
		return data.find(item => {
			return item.id === id;
		})
	}

	return {
		// REVEALING the modules for public use
		// Remember: If it isn't included in this return, the method remains PRIVATE
		// add: add,
		// get: get
		add, get
	}
})();

ItemController.add({id: 1, name: 'John'});
ItemController.add({id: 2, name: 'Mark'});
console.log(ItemController.get(1));
console.log(ItemController.get(2).name);
