const user = {email: 'jdoe@gmail.com'};



try {
	// ReferenceError: fails because there is no such defined function
	//myFunction();

	// Produce a TypeError
	//null.myFunction()

	// Produce a SyntaxError
	//eval('Hello World'); // evaluate JS within a string, looked as variables

	// Produce URIError
	// decodeURIComponent('%');

	// we can create our own errors with throw
	if(!user.name) {
		//throw 'User has no name';

		// we can also throw our custom error as a particular error type
		throw new SyntaxError('User has no name');
	}
} catch(e) {
	// e represents the error Object
	//console.log(e.message); // message for the error
	//console.log(e.name); // type of reference
	//console.log(e instanceof ReferenceError);
	console.log(`${e}`);
} finally {
	// runs regardless of the result of the catch block
	console.log('Finally runs regardless of result...');
}

// try-catch allows us to continue our programs after an error without crashing it altogether - Calling just myFunction() without the try-catch block WOULD crash
console.log('Program continues...');
