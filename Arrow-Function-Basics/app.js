// REGULAR FUNCTION

// const sayHello = function() {
// 	console.log('hello');
// }
//  sayHello();

// ARROW FUNCTION version
// const sayHello = () => { console.log('hello'); }
// sayHello();

// when the func body is only one line, we can shorten our syntax even further
// const sayHello = () => console.log('hello, but briefer');

//notice that we can even drop return with the one-line () syntax!
//const sayHello = () => 'Hello, again';


// returning an object literal is a little more difficult though
// without the parentheses, our return is read as a function. Wrap it up!
// const sayHello = () => ({ msg: 'Hello!'});

//working with parameters in arrow Functions
// single parameters don't even need parentheses!
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Charles');

// two or more parameters, however, do need parentheses
// sorry, listening to bjork while I code this
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Bjork', 'something-dottir');

// arrow functions with callbacks
const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
// 	return name.length;
// })

//shorter, more arrow-y function
const nameLengths = users.map( name => name.length )

console.log(nameLengths);

// an example with Fetch API, grabbing from a local txt file
function getText() {
	fetch('test.txt')
		.then(res => res.text())
		.then(data => {
			console.log(data);
			document.querySelector('#outptu').innerHTML = data;
		})
		.catch(err => console.log(err));
}
