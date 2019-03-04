// by adding async to our function, it now returns a promise
// async function myFunc() {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('Hello'), 1000);
// 	});
// 	const error = true;
//
// 	if(!error) {
// 		// waits until the promise is resolved
// 		const res = await promise;
// 		return res;
// 	} else {
// 		await Promise.reject(new Error('Something went wrong'));
// 	}
//
// }
//
// myFunc()
// 	// using .then handles the promise
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err));


 // An eample of async/await with fetch API
 async function getUsers() {
	 // await the response of the fetch call
	 const response = await fetch('https://jsonplaceholder.typicode.com/users');

	 // proceed only if the promise above is resolved
	 const data = await response.json();

	 // only proceed if the second promise returned by the json() is resolved
	 return data;
 }

 getUsers().then(users => console.log(users));
